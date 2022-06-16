import { ColumnDefinition } from '../../shared/models/columnDefinition';
import {formatDate} from "@angular/common";
export const studentResitColumns = [

  {
    name: 'module_name',
    label: 'Module'
  },
  {
    name: 'notes',
    label: 'Initial grade'
  },
  {
    name: 'module_credits',
    label: 'ECTS'
  },
  {
    name: 'resit_date',
    label: 'Resit date',
    field: (row : any) => row.resit_date ? formatDate(row.resit_date, 'dd/MM/yyyy HH:mm', 'en') : undefined,

  },

] as Array<ColumnDefinition>
