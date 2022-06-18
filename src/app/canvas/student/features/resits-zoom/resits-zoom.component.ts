import { Component, OnInit } from '@angular/core';
import {academyContributorColumns} from "../../../models/columns/academy-contributor-columns";
import {studentResitColumns} from "../../../models/columns/student-resit-columns";
import {ContributorModel} from "../../../models/contributor.model";
import {ColumnDefinition} from "../../../shared/models/columnDefinition";
import {ModuleModel} from "../../../models/module.model";
import {StudentsService} from "../../../../../services/students.service";
import {StudentNotesService} from "../../../../../services/student_notes.service";
import {ResitModel} from "../../../models/resit.model";
import {ModulesService} from "../../../../../services/modules.service";

@Component({
  selector: 'app-resits-zoom',
  templateUrl: './resits-zoom.component.html',
  styleUrls: ['./resits-zoom.component.css']
})
export class ResitsZoomComponent implements OnInit {
  rows: Array<ResitModel>
  displayedRows: Array<ResitModel>
  displayedColumns: Array<ColumnDefinition>
  loading: boolean;
  moduleFilterValues: Array<ResitModel>
  moduleFilter: ModuleModel;
  constructor(private studentsService:StudentsService, private studentNotesService:StudentNotesService, private modulesService : ModulesService) { }

  ngOnInit(): void {

    this.displayedColumns = studentResitColumns;
    this.loading = true;
    this.modulesService.getModules().subscribe(data => {

    })
    this.studentsService.studentDetails.subscribe((res)=>{
      if(res[0]?.has_resit){
        this.studentNotesService.getResitsDetails(res[0]?.id_student).subscribe( data => {
          this.loading = false;

          this.moduleFilterValues = data;
          this.rows = data;
          this.displayedRows = data;
        })
      }

    })

  }
  getYearById(id) {
    if (id == 1) {
      return 'B.ENG 1'
    }
    if (id == 2) {
      return 'B.ENG 2'
    }
    if (id == 3) {
      return 'B.ENG 3'
    }
    if (id == 4) {
      return 'M.ENG 1'
    }
    if (id == 5) {
      return 'M.ENG 2'
    }


  }
  onModuleFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.moduleFilter ? x.id_module == this.moduleFilter.id : true);
  }
}
