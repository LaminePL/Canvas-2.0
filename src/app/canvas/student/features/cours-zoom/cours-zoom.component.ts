import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModulesService } from 'src/services/modules.service';
import { StudentsService } from 'src/services/students.service';
import { ModuleModel } from '../../../models/module.model';
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-cours-zoom',
  templateUrl: './cours-zoom.component.html',
  styleUrls: ['./cours-zoom.component.scss']
})
export class CoursZoomComponent implements OnInit {

  modules: Array<ModuleModel>
  displayedModules: Array<ModuleModel>
  loading: boolean;
  searchKey!: string;
  currantModule: Array<ModuleModel>
  studyLength: string
  constructor(private modulesService: ModulesService, private router: Router,
    private route: ActivatedRoute, private studentsService: StudentsService, private userService : UserService) { }

  ngOnInit(): void {

    this.loading = true;


    this.userService.currentUser.subscribe(res => {
      if (res)
        this.studentsService.getAllStudents().subscribe(data => {
          let student = data.find((user)=>{ return   user.id_user == res.userId})
          this.studyLength = student?.study_length
          this.modulesService.getModules().subscribe(data => {
            let modules = data.filter(x => x.module_name.startsWith(this.studyLength))
            this.modules = modules
            this.displayedModules = modules;
            this.loading = false;
          })
        })
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
    this.displayedModules = this.modules.filter(x => !!this.searchKey ? x.module_name.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()) : true)
  }
  findValueByPrefix(object, prefix) {
    for (var property in object) {
      if (object.hasOwnProperty(property) &&
        property.toString().startsWith(prefix)) {
        return object[property];
      }
    }
  }

}
