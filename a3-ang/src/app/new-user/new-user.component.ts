import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { User } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User= new User()

  interests = [ 
    {name :"Students", id: 1, isSelected: false},
    {name :"Campus", id: 3, isSelected: false},
    {name :"Atmosphere", id: 4, isSelected: false},
    {name :"Dorm rooms", id: 5, isSelected: false},
    {name :"Sports", id: 6, isSelected: false}
  ];

  constructor(private userService: UserService,
    private router: Router) { }


   

  ngOnInit(): void {
   
  }

  saveUser(){


    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }


  onChange(email:string, event: any) {
    if(event.target.checked) {
      this.user.interest.push(email);
    } else {
      let index = this.user.interest.indexOf(email);
      this.user.interest.splice(index,1);
    }
    console.log(this.user)
}

  onsubmit(){

    alert("Successfully Submitted");
    console.log(this.user);
    this.saveUser();
  }




}
