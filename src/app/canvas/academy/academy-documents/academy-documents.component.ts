import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/services/file.service';
import { FileModel, FileType } from '../../models/file.model';
@Component({
  selector: 'app-academy-documents',
  templateUrl: './academy-documents.component.html',
  styleUrls: ['./academy-documents.component.scss']
})
export class AcademyDocumentsComponent implements OnInit {

  files: Array<FileModel>

  title: string;
  fileType: FileType;
  id_student: number;
  constructor(public dialogRef: MatDialogRef<AcademyDocumentsComponent>, private fileService: FileService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.title = data.title;
    this.fileType = data.fileType;
    this.id_student = data.id_student;
  }

  ngOnInit(): void {
    this.fileService.getFilesByStudentByType(this.id_student, this.fileType).subscribe(res => {
      this.files = res;
    })


  }


  download(file) {
    this.fileService.download(file);
  }

  view(file) {
    this.fileService.view(file);
  }


}
