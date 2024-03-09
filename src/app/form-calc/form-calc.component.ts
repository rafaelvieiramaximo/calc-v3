import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})

export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  percentage: string = ''; // Altera para uma string

  onClickSum() {
    this.sum = this.parseAndCalculate(this.num1 + this.num2);
    this.percentage = '';
  }

  onClickSub() {
    this.sum = this.parseAndCalculate(this.num1 - this.num2);
    this.percentage = '';
  }

  onClickMulti() {
    this.sum = this.parseAndCalculate(this.num1 * this.num2);
    this.percentage = '';
  }

  onClickDiv() {
    if (this.num2 !== 0) {
      this.sum = this.parseAndCalculate(this.num1 / this.num2);
    } else {
      console.error('Erro: Divisão por zero.');
    }
    this.percentage = '';
  }

  onClickPot() {
    this.sum = this.parseAndCalculate(this.num1 ** this.num2);
    this.percentage = ''; 
  }

  onClickCento() {
    const result = (this.num1 / this.num2) * 100;
    this.percentage = result.toFixed(2).replace(/^0+/, '') + '%';
  }

  onClickLimpar(){
    this.num1 = 0;
    this.num2 = 0;
    this.sum = 0;
    this.percentage = '';
  }

  private parseAndCalculate(value: number): number {
    return parseFloat(value.toFixed(2));
  }
}