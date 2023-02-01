import { Component } from '@angular/core';
import { LoginService } from '../login.service';    
import { User} from '../user';  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[]; 

  constructor(private loginService:LoginService) {}

  clickEvent() {
    this.loginService.GetAllUsers();

    this.loginService.GetAllUsers()
    .subscribe(users => {
        this.users = users as User[]
      })
  }
}
