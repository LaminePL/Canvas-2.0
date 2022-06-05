import { formatDate } from "@angular/common";
import { StudentModel } from "../student.model";
import { ColumnDefinition } from '../../shared/models/columnDefinition';
export const academyStudentColumns = [

  {
    name: 'first_name',
    label: 'First name'
  },
  {
    name: 'last_name',
    label: 'Last name'
  },
  {
    name: 'date_of_birth',
    label: 'Date of birth',
    field: (row : StudentModel) => row.date_of_birth ? formatDate(row.date_of_birth, 'dd/MM/yyyy', 'en') : undefined,
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'campus_name',
    label: 'Campus'
  },
  {
    name: 'level',
    label: 'Année',
    field: (row : StudentModel) => row.level ? row.level : '/',
  },
  {
    name:'details',
    label:'',
    type: "template"
  }

] as Array<ColumnDefinition>
