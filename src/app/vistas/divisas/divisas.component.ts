import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.scss']
})
export class DivisasComponent {
  eurlib=0;
  libeur=0;
  totalcuenta=0;
  totalcuenta2=0;


  cuentaeurlib(){
    this.totalcuenta=this.eurlib * 0,87;
  }
  cuentalibeur(){
    this.totalcuenta2=this.libeur * 1,13;
  }
}
