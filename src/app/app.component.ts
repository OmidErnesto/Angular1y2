import { Component } from '@angular/core';

import { DataService } from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;
  title = 'my-dream-app';
  name : string = "Omid Ernesto Chahuaris Choque";
  age : number = 40;
  /*email; // : string ;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor(){
    console.log("Constructor working...");
    this.name = "Omid Chahuaris Choque"
    this.email = "ochuahuaris@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Incursionar", "Programación","Juegos online"];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }*/

  sayHello() {
    alert("Hola Desde app.component")
  }

  deleteUser(user:any){
    for(let i=0; i<this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser : any){
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  /*newHobby(hobby:any) {
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }*/

  posts : Post[] = [];
  

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    });
  }
  

}
