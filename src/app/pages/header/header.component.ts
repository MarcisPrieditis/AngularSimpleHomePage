import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: any[] = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: '/examples',
      title: 'Examples'
    }
  ]
}
