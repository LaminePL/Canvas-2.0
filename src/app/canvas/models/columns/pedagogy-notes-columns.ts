import { formatDate } from "@angular/common";
import { StudentNotesInfosModel } from "../student-notes-infos.model";
import { ColumnDefinition } from '../../shared/models/columnDefinition';
export const pedagogyStudentNotesColumns = [

  {
    name: 'first_name',
    label: 'First name'
  },
  {
    name: 'last_name',
    label: 'Last name'
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'module_name',
    label: 'Module'
  },
  {
    name: 'module_credits',
    label: 'Crédits'
  },
  {
    name: 'notes',
    label: 'Note'
  },
  {
    name:'alert',
    label:'',
    type:'template',
    field: (row : StudentNotesInfosModel) => {if(row.notes <10){return 'Alerter'}else{return ''}},
  }

] as Array<ColumnDefinition>
