import {Component, OnInit} from '@angular/core';
import {StudentsService} from "src/services/students.service";
import {InternshipModel} from "src/app/canvas/models/internship.model";
import {FileService} from "src/services/file.service";
import {LevelModel} from "src/app/canvas/models/level.model";
import {FileModel} from "src/app/canvas/models/file.model";
import {zip, map, forkJoin} from 'rxjs';


@Component({
  selector: 'app-pedagogy-internship',
  templateUrl: './pedagogy-internship-zoom.component.html',
  styleUrls: ['./pedagogy-internship-zoom.component.css']
})

export class PedagogyInternshipZoomComponent implements OnInit {
  offers: Array<InternshipModel>
  offersFilter: Array<InternshipModel>
  loading: boolean;
  levelList: Array<LevelModel> = [
    {id_level: 1, level: 'B.ENG 1'},
    {id_level: 2, level: 'B.ENG 2'},
    {id_level: 3, level: 'B.ENG 3'},
    {id_level: 4, level: 'M.ENG 1'},
    {id_level: 5, level: 'M.ENG 2'}
  ]
  files: Array<any>

  constructor(private studentService: StudentsService, private fileService: FileService) {
  }

  ngOnInit(): void {
    this.loading = true;
    let objects = [];

    zip(this.studentService.getInternship(), this.fileService.getAllFilesByInternship(3)).pipe(
      map(([interShip, files]) => {
        return interShip.map((data, index) => Object.assign(data, files[index]))
      })
    ).subscribe((res) => {
      this.offers = res
      this.loading = false
      this.offersFilter = res
      this.files = res
    })
  }

  download(file) {
    this.fileService.download(file);
  }

  view(file) {
    this.fileService.view(file);
  }


  onChangeLevel(level) {
    this.offersFilter = this.offers?.filter(offer => offer?.internship_level === level?.value?.id_level);
    if (level.value == null) {
      this.offersFilter = this.offers

    }

  }

}
