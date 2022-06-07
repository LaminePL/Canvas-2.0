import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModulesService } from 'src/services/modules.service';
import { academyModuleColumns } from '../../models/columns/academy-module-columns';
import { ModuleModel } from '../../models/module.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';

@Component({
  selector: 'app-academy-modules',
  templateUrl: './academy-modules.component.html',
  styleUrls: ['./academy-modules.component.scss']
})
export class AcademyModulesComponent implements OnInit {

  modules: Array<ModuleModel>
  displayedModules: Array<ModuleModel>
  //displayedColumns: Array<ColumnDefinition>
  loading: boolean;
  searchKey!: string;
  constructor(private modulesService: ModulesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.displayedColumns = academyModuleColumns;
    this.loading = true;
    this.modulesService.getModules().subscribe(data => {
      this.modules = data;
      this.displayedModules = data;
      this.loading = false;
    })
  }

  public onCardClick(url) {
    window.open(url, "_blank");
  }

  onSearchKey() {
    this.searchKey = ""
    this.applyFilter();
  }

  applyFilter() {
    this.displayedModules = this.modules.filter(x => !!this.searchKey ? x.module_name.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()): true)
  }



}
