import { ColumnDefinition } from '../../shared/models/columnDefinition';

export const userColumns = [

  {
    name: 'firstName',
    label: 'First Name'
  },
  {
    name: 'lastName',
    label: 'last Name'
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'roleName',
    label: 'Role',
  },
  {
    name: 'activation',
    label: 'Activation',
    type: 'template'
  }
] as Array<ColumnDefinition>
