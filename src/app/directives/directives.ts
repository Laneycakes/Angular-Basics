import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
})
export class Directives {
  isNoteVisible = true;
  isParagraphVisible = true;

  monthNameStatic = 'Mar';
  monthNameDynamic = 'Mar';

  cityList = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];

  studentList = [
    { stud_name: 'D Esquivel', course: 'Web Development', isActive:false },
    { stud_name: 'J Dizon', course: 'Network Administration', isActive:false },
    { stud_name: 'F Alejandro', course: 'Systems Development', isActive:false },
    { stud_name: 'J David', course: 'CyberSecurity', isActive:false },
    { stud_name: 'C Quintana', course: 'Web Development', isActive:true }
  ];

  showNote() { this.isNoteVisible = true; }
  hideNote() { this.isNoteVisible = false; }
  toggleNote() { this.isParagraphVisible = !this.isParagraphVisible; }
}
