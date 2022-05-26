import { formatDate } from "@angular/common";
import { StudentModel } from "./student.model";
import { ColumnDefinition } from '../shared/models/columnDefinition';
export const studentColumns = [
  {
    name: 'id_user',
    label: 'User'
  },  {
    name: 'id_level',
    label: 'Level'
  },  {
    name: 'date_of_birth',
    label: 'Date of birth',
    field: (row : StudentModel) => row.date_of_birth ? formatDate(row.date_of_birth, 'dd/MM/yyyy', 'en') : undefined,
  },
  {
    name: 'region',
    label: 'Region'
  }
] as Array<ColumnDefinition>
