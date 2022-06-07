import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { ColumnDefinition } from '../models/columnDefinition';

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class DTableComponent implements OnInit, OnChanges {

  @Input() rows: Array<any>
  @Input() columnsDefinition: Array<ColumnDefinition>
  @Input() loading: boolean;
  @Input() searchable: boolean;

  displayedRows: MatTableDataSource<any>
  displayedColumns: Array<ColumnDefinition>
  columnNames: Array<string>
  searchKey!: string;


  @ContentChild('columnTemplate') columnTemplate: TemplateRef<any>
  @ViewChild('paginator', { static: false }) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  pageSizes = [10, 25, 50, 100]

  constructor(private changeDetector: ChangeDetectorRef) {
    this.displayedRows = new MatTableDataSource([])
  }

  ngOnInit(): void {
    this.columnNames = []
    this.columnNames.push(...this.columnsDefinition?.map(x => x.name))
    this.displayedColumns = [...this.columnsDefinition]
    if (this.rows)
      this.displayedRows.data = [...this.rows]

    //this.displayPaginator = this.pagination?.totalRows > 0;

  }

  ngAfterViewInit() {
    this.displayedRows.paginator = this.paginator;
  }

  getValue(row: any, column: ColumnDefinition) {
    if (typeof column.field === 'string') {
      return row[column.field]
    }

    if (typeof column.field === 'function') {
      return column.field(row)
    }

    if (!column.field) {
      return row[column.name]
    }

    return
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.columnsDefinition?.currentValue) {
      this.displayedColumns = [...changes.columnsDefinition.currentValue]
      this.columnNames = []
      this.columnNames.push(...this.displayedColumns?.map(x => x.name))
    }

    if (changes.rows?.currentValue) {
      this.displayedRows.data = [...changes.rows.currentValue]
    }

    if (changes.loading)
      this.loading = changes.loading.currentValue

  }

  onClick(event: MouseEvent, rowId: number) {
    event.stopPropagation()
    //this.clickRow.emit(rowId)
  }

  calculateClass(classHandler: string | ((data) => string), row: any): string {
    if (typeof classHandler === 'string') {
      return classHandler
    }

    if (typeof classHandler === 'function') {
      return classHandler(row)
    }

    return ''
  }

  sortData(sortState: Sort) {
    if (sortState.direction) {
      const column = this.displayedColumns.find(x => x.name === sortState.active)
      const ascDirection = sortState.direction === "asc" ? 1 : -1
      this.displayedRows.data = this.displayedRows.data.sort((a, b) => this.getValue(a, column) < (this.getValue(b, column)) ? -ascDirection : this.getValue(a, column) > (this.getValue(b, column)) ? ascDirection : 0)
    } else {
      this.displayedRows.data = [...this.rows]
    }
  }

  filterBy(event: Event, column: ColumnDefinition) {
    this.displayedRows.data = [...this.rows.filter(x => this.getValue(x, column).toString().includes((event.target as HTMLInputElement).value))]
  }

  onSearchKey() {
    this.searchKey = ""
    this.applyFilter();
  }

  applyFilter() {
    this.displayedRows.filter = this.searchKey.trim().toLocaleLowerCase();
  }





}
