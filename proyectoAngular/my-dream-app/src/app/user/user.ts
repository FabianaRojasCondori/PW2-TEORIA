import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() nameUser: any;

  sayHello(nameUser: any) {
    alert("Hola " + nameUser);
  }
}
