import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user;
  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('userName');
  }
}
