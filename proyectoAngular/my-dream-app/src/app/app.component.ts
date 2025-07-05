
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-dream-app';
    name : string;
    email : string ;
    webpage : string;
    hobbies : string[] ;

    constructor() {
        console.log("Constructor working ... ");
        this.name = "Fabiana Rojas C.";
        this.email = "frojascon@unsa.edu.pe";
        this.webpage = "http://www.unsa.edu.pe";
        this.hobbies = ["Voley","Programación","Netflix"];
    }

    showhobbies () {
        return true;
    }
}