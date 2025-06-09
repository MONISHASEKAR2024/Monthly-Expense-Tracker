import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmountDescription } from '../amount-description/amount-description';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  AmountDescription, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'simple-expense-tracker';
}
