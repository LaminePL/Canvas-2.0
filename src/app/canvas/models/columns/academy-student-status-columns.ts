import { formatDate } from "@angular/common";
import { StudentModel } from "../student.model";
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { StudentStatusModel } from "../student-status.model";
export const academyStudentStatusColumns = [

  {
    name: 'first_name',
    label: 'First name'
  },
  {
    name: 'last_name',
    label: 'Last name'
  },
  {
    name: 'campus_name',
    label: 'Campus'
  },
  {
    name:'notes',
    label:'Note',
    field: (row : StudentStatusModel) => row.notes ? row.notes : '/'

  },
  {
    name:'status',
    label:'Admis',
    field: (row : StudentStatusModel) => row.is_admitted ? 'Non' : 'Oui'

  }

] as Array<ColumnDefinition>
