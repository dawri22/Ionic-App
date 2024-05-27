import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  /* */

  numero:number = 0;
  list:string[]=[];

  multiplicar(numero: number){
    if(this.numero!=null){
      for(let i =0; i<15; i++){
        this.list.push(` ${this.numero} x ${i} = ${i*this.numero} `)
      }
    }else{
      alert("no ingreso ningun numero")
    }
  }

  getLista(){
    return this.list;
  }

  constructor() { }

  ngOnInit() {
  }

}
