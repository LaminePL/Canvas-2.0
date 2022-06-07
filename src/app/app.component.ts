import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
import { UserService } from 'src/services/user.service';
import { RolesEnum } from './canvas/models/roles.enum';
import { UserModel } from './canvas/models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SUPINFO';
  firstName: any;
  lastName: any;
  email: any;
  userRole: any;
  isExpanded: boolean = false;
  showFiller = false;
  currentUser: UserModel
  roles = RolesEnum;

  constructor(public router: Router,private userService : UserService) {
  }
  ngOnInit(): void {

     this.userService.currentUser.subscribe(user =>{
      this.currentUser = user;
      //c'est la en fait
      console.log(user)
      // t'as pas besoin de rfraichir c'est juste parceque je me suis abonné a current user ici
    });// je vois, sur mon ancien code je pense que je  le recuperer pas de la meme maniere c'est pour ca qu'il est a null au debut
    // oui je pense aussi regarde
    // tu vois il est bien la avant ton null
    //maintenant pour adapter ton code t'as juste à utiliser le currentUser et c bon

  }

  logout() {
    this.userService.logout();
  }


}

