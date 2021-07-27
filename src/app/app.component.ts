import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email; // : string ;
  webpage : string;
  hobbies : string[];

  constructor(){
    console.log("Constructor working...");
    this.name = "Omid Chahuaris Choque"
    this.email = "ochuahuaris@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Incursionar", "Programación","Juegos online"];
  }

  showhobbies(){
    return true;
  }

}
