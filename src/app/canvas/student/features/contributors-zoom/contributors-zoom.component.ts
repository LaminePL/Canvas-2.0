import { Component, OnInit } from '@angular/core';
import {ContributorModel} from "../../../models/contributor.model";
import {ColumnDefinition} from "../../../shared/models/columnDefinition";
import {ModuleModel} from "../../../models/module.model";
import {ContributorsService} from "../../../../../services/contributors.service";
import {ModulesService} from "../../../../../services/modules.service";
import {academyContributorColumns} from "../../../models/columns/academy-contributor-columns";

@Component({
  selector: 'app-contributors-zoom',
  templateUrl: './contributors-zoom.component.html',
  styleUrls: ['./contributors-zoom.component.css']
})
export class ContributorsZoomComponent implements OnInit {
  rows: Array<ContributorModel>
  displayedRows: Array<ContributorModel>
  displayedColumns: Array<ColumnDefinition>
  loading: boolean;
  moduleFilterValues: Array<ModuleModel>
  moduleFilter: ModuleModel;

  constructor(private contributorsService: ContributorsService, private modulesService: ModulesService) {
    this.displayedRows = []
  }


  ngOnInit(): void {

    this.displayedColumns = academyContributorColumns;
    this.loading = true;
    this.modulesService.getModules().subscribe(data => {
      this.moduleFilterValues = data;
    })
    this.contributorsService.getContributors().subscribe(data => {
      this.rows = data;
      this.displayedRows = data;
      this.loading = false;
    })
  }
  onModuleFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.moduleFilter ? x.id_module == this.moduleFilter.id : true);
  }

}
