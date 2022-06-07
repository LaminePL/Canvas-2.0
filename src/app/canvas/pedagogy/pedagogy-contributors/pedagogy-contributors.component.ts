import { Component, OnInit } from '@angular/core';
import { ContributorsService } from 'src/services/contributors.service';
import { ModulesService } from 'src/services/modules.service';
import { academyContributorColumns } from '../../models/columns/academy-contributor-columns';
import { ContributorModel } from '../../models/contributor.model';
import { ModuleModel } from '../../models/module.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';

@Component({
  selector: 'app-pedagogy-contributors',
  templateUrl: './pedagogy-contributors.component.html',
  styleUrls: ['./pedadogy-contributors.component.scss']
})
export class PedagogyContributorsComponent implements OnInit {

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
