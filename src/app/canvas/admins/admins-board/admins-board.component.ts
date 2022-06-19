import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserModel } from '../../models/user.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { UserService } from 'src/services/user.service';
import { userColumns } from '../../models/columns/user-columns';
import { UserTypeModel } from '../../models/user-type.model';

@Component({
  selector: 'app-admins-board',
  templateUrl: './admins-board.component.html',
  styleUrls: ['./admins-board.component.css']
})
export class AdminsBoardComponent {
  rows: Array<UserModel>
  displayedRows: Array<UserModel>
  displayedColumns: Array<ColumnDefinition>
  loading: boolean;
  roleFilterValues: Array<UserTypeModel>
  roleFilter: UserTypeModel;

  constructor(private userService: UserService) {
    this.displayedRows = []
  }


  ngOnInit(): void {

    this.displayedColumns = userColumns;
    this.loading = true;

    /*this.userService.getUserTypes().subscribe(data => {
      this.roleFilterValues = data;
    })*/

    this.userService.getAllUsers().subscribe(data => {
      this.rows = data;
      this.displayedRows = data;
      this.loading = false;
    })


  }

  editActivationUser(id:number,activate:boolean){
    this.userService.editUserActivation(id,activate).subscribe();
  }

  onRoleFilterChanged(){
    this.displayedRows = this.rows.filter(x => !!this.roleFilter ? x.userTypeId == this.roleFilter.id : true);
  }


}
