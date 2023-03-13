import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public cars: any[] = [
    {
      "id": 1,
      "name": "BMW",
      "color": "purple",
      "available": true
    },
    {
      "id": 2,
      "name": "Audi",
      "color": "black",
      "available": false
    },
    {
      "id": 3,
      "name": "Hyundai",
      "color": "red",
      "available": true
    },
    {
      "id": 4,
      "name": "Tata",
      "color": "white",
      "available": true
    },
    {
      "id": 5,
      "name": "Kia",
      "color": "black",
      "available": false
    },
  ]

  public key: any[] = Object.keys(this.cars[0]);

  public days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  public day = ""

  public changeStyle: boolean = true;

}
