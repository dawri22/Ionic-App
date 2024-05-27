import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.page.html',
  styleUrls: ['./mayor.page.scss'],
})
export class MayorPage implements OnInit {

  constructor() { }

  num1: number = 0;
  num2: number = 0;

  resul: number = 0;

  mayor(){
    if(this.num1 > this.num2){
      this.resul=this.num1;
    }
    else if(this.num1 < this.num2){
      this.resul = this.num2;
    }
  }

  ngOnInit() {
  }

}
