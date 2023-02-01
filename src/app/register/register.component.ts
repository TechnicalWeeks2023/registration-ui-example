import { Component, OnInit } from '@angular/core';    
import { LoginService } from '../login.service';    
import { User} from '../user';    
import { Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    
@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  userForm: FormGroup;    
  message:string;    
  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }    
    
  ngOnInit() {    
    this.userForm = this.formbulider.group({    
      name: ['', [Validators.required]],    
      password: ['', [Validators.required]],    
      email: ['', [Validators.required]],    
      dateOfBirth: ['', [Validators.required]],    
      zipCode: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.userForm.value;    
    this.CreateUser(user);    
  } 

  CreateUser(user:User)    
  {    
  this.loginService.CreateUser(user).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.message = 'Data saved Successfully';    
      this.userForm.reset();    
    });    
  }    
}    
