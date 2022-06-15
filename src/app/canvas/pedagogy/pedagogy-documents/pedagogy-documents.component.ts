import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/services/file.service';
import { FileModel, FileType } from '../../models/file.model';
@Component({
  selector: 'app-pedagogy-documents',
  templateUrl: './pedagogy-documents.component.html',
  styleUrls: ['./pedagogy-documents.component.css']
})
export class PedagogyDocumentsComponent implements OnInit {

  files: Array<FileModel>
  title:string;
  fileType: FileType;
  id_student:number;
  constructor(public dialogRef: MatDialogRef<PedagogyDocumentsComponent>,private fileService : FileService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.title = data.title;
      this.fileType = data.fileType;
      this.id_student = data.id_student;
    }

  ngOnInit(): void {

    this.fileService.getFilesByStudentByType(this.id_student,this.fileType).subscribe(res =>{
        this.files = res;
    })
  }


}
