import { Component, OnInit } from '@angular/core';
import {ContributorModel} from "../../../models/contributor.model";
import {ColumnDefinition} from "../../../shared/models/columnDefinition";
import {ModuleModel} from "../../../models/module.model";
import {ContributorsService} from "../../../../../services/contributors.service";
import {ModulesService} from "../../../../../services/modules.service";
import {academyContributorColumns} from "../../../models/columns/academy-contributor-columns";

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {
  rows: Array<ContributorModel>
  contributorsLength;
  loading: boolean;

  constructor(private contributorsService: ContributorsService, private modulesService: ModulesService) {
  }


  ngOnInit(): void {

    this.loading = true;

    this.contributorsService.getContributors().subscribe(data => {
      this.contributorsLength = data.length;
      //console.log(this.rows.length)
      this.loading = false;
    })
  }


}
