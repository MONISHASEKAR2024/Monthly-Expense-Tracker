import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-amount-description',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './amount-description.html',
  styleUrl: './amount-description.css'
})
export class AmountDescription {
  Amount : number | null=null;
  Description : string ='';
  expense : {Amount : number , Description: string }[]=[]

  onclick(){
    if((this.Amount !==null && this.Amount>0) && this.Description.trim() !== ''){
      this.expense.push({
       Amount :Number(this.Amount),
       Description: this.Description
      })
      this.Amount = null;
      this.Description = ''
    }else{
      alert('Please enter valid inputs')
    }
    }

  getTotal():number{
    return this.expense.reduce((total, item) => total + item.Amount, 0);
  }

  preventnegative(e: KeyboardEvent){
    if(e.key === '-' || e.key === 'e' || e.key === 'E'){
      e.preventDefault();
    }
  }


}
