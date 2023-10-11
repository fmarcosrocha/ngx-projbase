import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from 'app/Interfaces/Person';


@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  studentsUrl = 'https://652336aaf43b1793841548f4.mockapi.io/onlineStudent/student';
  private coursesUrl = 'https://652336aaf43b1793841548f4.mockapi.io/onlineStudent/courses';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addStudent(studentData: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, studentData);
  }

  getCourses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.coursesUrl}`);
  }
}
