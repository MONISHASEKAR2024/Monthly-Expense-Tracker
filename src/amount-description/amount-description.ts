import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { iterator } from 'rxjs/internal/symbol/iterator';

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
  expense : {Amount : number , Description: string }[]=[];
  isediting = false;
  EditingIndex: number | null = null;
  


  onclick(){
    if((this.Amount !==null && this.Amount>0) && this.Description.trim() !== ''){
      if(this.isediting && this.EditingIndex !== null){

        this.expense[this.EditingIndex] = {

       Amount :this.Amount,
       Description: this.Description
      }
      this.isediting = false;
      this.EditingIndex = null;
    }else{
      this.expense.push({
        Amount: this.Amount,
        Description: this.Description

      });
    }
    this.Amount = null;
    this.Description ='';
    }else{
      alert('Please fill the input fields!')
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
  OnEdit(index:number):void{
    const item = this.expense[index];
    this.Amount = item.Amount;
    this.Description = item.Description;
    this.isediting = true;
    this.EditingIndex = index;
  }

  OnDelete(index:number){
    this.expense.splice(index,1);
    if(this.EditingIndex === index)
    {
      this.Amount = null;
      this.Description = '';
      this.isediting= false;
      this.EditingIndex = null;
    }
  }
  OnSave():void{
    if(this.expense.length > 0)
    {
        alert('Expenses saved successfully');
        this.expense =[];
    }
  }

}
