import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username='Nani';
  password='';
  errorMessage="Invalid Credentials";
  invalidLogin=false;

  //dependency injection ,declare in constructor args
  //find Router and inject it into this LoginComponent
  constructor(private router :Router,
    private hardcodedAuthenticationService :HardcodedAuthenticationService

  ){}

  ngOnInit(): void {
      
  }

  handleLogin()
  {
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
     {
      this.invalidLogin=false;
      this.router.navigate(['welcome',this.username]);
                         // route along with parameter
     }
       
    else
    this.invalidLogin=true;
    console.log(this.username);
    
  }

}
