import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://uploads.dailydot.com/2024/07/side-eye-cat.jpg?q=65&auto=format&w=1600&ar=2:1&fit=crop';
  w = 400;
  h = 250;

  textColor = 'blue';
  yourName = '';

  count = 0;
  increment() { this.count++; }
  decrement() { this.count--; }

  studentName = 'Clarence Lane C. Parungao';
  imageUrl2 = 'https://i.imgflip.com/5w0kaf.png';
  isDisabled = true;

  isPassing = true;

  boxColor = 'blue';
  boxSize = '150px';
}
