import { Component, OnInit } from '@angular/core';
import {StudentsDataService} from 'app/services/students-data.service';
import {Student} from 'app/Interfaces/Person';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  students: Student[] = [];

  constructor(private dataService: StudentsDataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataService.getStudent().subscribe((data: Student[]) => {
      this.students = data;
      console.log(data);
    });
  }

  deleteItem(studentId: string, studentName: string): void {
    const confirmation = window.confirm(`Are you sure you want to delete ${studentName}?`);
    if (!confirmation) {
      return;
    }
    this.http.delete(this.dataService.studentsUrl + `/${studentId}`).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.students = this.students.filter((student) => student.id !== studentId);
      },
      (error) => {
        console.error('Error deleting item', error);
      }
    );
  }

}
