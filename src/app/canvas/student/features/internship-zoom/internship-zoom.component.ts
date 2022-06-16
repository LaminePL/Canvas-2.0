import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../../../../services/students.service";
import {InternshipModel} from "../../../models/internship.model";
import {FileService} from "../../../../../services/file.service";
import {LevelModel} from "../../../models/level.model";


@Component({
  selector: 'app-internship-zoom',
  templateUrl: './internship-zoom.component.html',
  styleUrls: ['./internship-zoom.component.css']
})

export class InternshipZoomComponent implements OnInit {
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

  constructor(private studentService: StudentsService, private fileService: FileService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.studentService.getInternship().subscribe((offer) => {
      this.offers = offer
      this.offersFilter = offer
      this.loading = false;
    })

  }

  download(file) {
    console.log(file)
    this.fileService.download(file);
  }

  view(file) {
    this.fileService.view(file);
  }


  onChangeLevel(level) {
    this.offersFilter = this.offers.filter(offer => offer?.internship_level === level?.value?.id_level);
  }
}