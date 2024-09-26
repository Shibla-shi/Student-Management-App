import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  @Input() students: any[] = []; 
  addStudent(student: any) {
    this.students.push(student);
  }

  calculateGrade(totalMarks: number): string {
    if (totalMarks >= 90) {
      return 'A';
    } else if (totalMarks >= 80) {
      return 'B';
    } else if (totalMarks >= 70) {
      return 'C';
    } else if (totalMarks >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  getGradeClass(totalMarks: number): string {
    const grade = this.calculateGrade(totalMarks);
    switch (grade) {
      case 'A':
        return 'grade-a';
      case 'B':
        return 'grade-b';
      case 'C':
        return 'grade-c';
      case 'D':
        return 'grade-d';
      default:
        return 'grade-f';
    }
  }

}
