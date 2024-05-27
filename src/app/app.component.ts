import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Mayor', url: '/mayor', icon: 'calculator' },
    { title: 'Tabla', url: '/tabla', icon: 'heart' },
  ];
  public labels = [];
  constructor() {}
}
