import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmountDescription } from '../amount-description/amount-description';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  AmountDescription, FormsModule, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'simple-expense-tracker';
}
