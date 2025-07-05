 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HelloWorld],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-dream-app';
    name: string;
    email: string;
    webpage: string;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        console.log("Constructor working ... ");
        this.name = "Fabiana Rojas C.";
        this.email = "frojascon@unsa.edu.pe";
        this.webpage = "http://www.unsa.edu.pe";
        this.hobbies = ["Voley", "Programación", "Netflix"];
        this.showHobbies = false;
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    newHobby(hobby: any) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}