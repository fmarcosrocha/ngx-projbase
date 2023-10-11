import { Component, OnInit } from '@angular/core';
import {StudentsDataService} from 'app/services/students-data.service';
import {Student} from 'app/Interfaces/Person';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  studentData: Student = {
    id: '',
    name: '',
    CPF: '',
    phoneNumber: '',
    course: ''
  };
  errorMessage = '';
  availableCourses: string[] = [];
  constructor(private dataService: StudentsDataService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.dataService.getCourses().subscribe(courses => {
      this.availableCourses = courses;
    });
  }

  addStudent(): void {
    if (this.isFormValid()) {
      this.dataService.addStudent(this.studentData).subscribe(
        (response: Student) => {
          console.log('Student added successfully:', response);
          this.clearInputFields();
        },
        (error) => {
          console.error('Error adding student:', error);
        }
      );
    }else{
      this.errorMessage = 'Please fill in all required fields.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }
  isFormValid(): boolean {
    return this.isEmpty(this.studentData.name) &&
      this.isEmpty(String(this.studentData.CPF)) &&
      this.isEmpty(String(this.studentData.phoneNumber)) &&
      this.isEmpty(this.studentData.course);
  }

  isEmpty(data: string): boolean {
    return data.trim() !== '' && data.trim() !== null && data.trim() !== 'null';
  }

  clearInputFields(): void {
    this.studentData = {
      id: '',
      name: '',
      CPF: '',
      phoneNumber: '',
      course: ''
    };
  }

}
