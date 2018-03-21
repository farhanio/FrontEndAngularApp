import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact = {
    nom : 'omar' ,
    email : 'omar.farhani@outlook.com'
  };

  title = 'Hello world :D';
}
