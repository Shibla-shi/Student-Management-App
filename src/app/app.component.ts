import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentFormComponent,StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: any[] = [];

  onAddStudent(student: any) {
    this.students.push(student);
    
    console.log('Updated students array:', this.students);
  }}
