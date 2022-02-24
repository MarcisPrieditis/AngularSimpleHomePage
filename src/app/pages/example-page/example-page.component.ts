import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openGame2048(): void {
    window.open("https://github.com/MarcisPrieditis/2048WindowsFormsGame");
  }

  openSQLmovies(): void {
    window.open("https://github.com/MarcisPrieditis/SQLmovies");
  }

  openFlightPlanner(): void {
    window.open("https://github.com/MarcisPrieditis/FlightPlannerWebAPI");
  }
}
