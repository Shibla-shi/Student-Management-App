import { CommonModule } from '@angular/common';
import { Component , Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student = {
    name: '',
    course: '',
    totalMarks: 0
  };

  @Output() addStudent = new EventEmitter<any>();

  submitForm() {
    // Emit event to parent component (or service) to add student
    this.addStudent.emit(this.student);
    console.log('Submitted student:', this.student);
    // Optionally, you can reset the form fields here
    this.student = {
      name: '',
      course: '',
      totalMarks: 0
    };
  }
}

