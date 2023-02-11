import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animal = {
    name: "Leão",
    image: "https://i.pinimg.com/originals/5d/81/af/5d81af68bc4a0de97f58b6799d606b5c.jpg",
  }
}
