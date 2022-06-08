import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModulesService } from 'src/services/modules.service';
import { ModuleModel } from '../../../models/module.model';

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
  constructor(private modulesService: ModulesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.modulesService.getModules().subscribe(data => {
      let modules = data.filter(x =>  x.module_name.startsWith("3"))
      this.modules = modules
      this.displayedModules = modules;
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
  findValueByPrefix(object, prefix) {
    for (var property in object) {
      if (object.hasOwnProperty(property) &&
         property.toString().startsWith(prefix)) {
         return object[property];
      }
    }
  }

}
