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
    class:'responsive-hide-col',
    headerClass:'responsive-hide-col'
  },
  {
    name: 'email',
    label: 'Email',
    class:'responsive-hide-col',
    headerClass:'responsive-hide-col'
  },
  {
    name: 'campus_name',
    label: 'Campus',
    class:'responsive-hide-col',
    headerClass:'responsive-hide-col'
  },
  {
    name: 'level',
    label: 'Année',
    field: (row : StudentModel) => row.level ? row.level : '/',
    class:'responsive-hide-col',
    headerClass:'responsive-hide-col'
  },
  {
    name:'details',
    label:'',
    type: "template"
  }

] as Array<ColumnDefinition>
