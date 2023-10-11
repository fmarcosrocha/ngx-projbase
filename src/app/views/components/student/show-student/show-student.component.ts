import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  people = [
    {
      name: 'John Doe',
      cpf: '123.456.789-01',
      phone: '(123) 456-7890',
      course: 'Computer Science',
    },
    {
      name: 'Jane Smith',
      cpf: '987.654.321-09',
      phone: '(987) 654-3210',
      course: 'Mathematics',
    },
  ];

  ngOnInit(): void {
  }

}
