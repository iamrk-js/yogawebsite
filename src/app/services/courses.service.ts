import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourses } from '../models/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl: string = environment.baseUrl;
  courseUrl = `${this.baseUrl}/courses.json`;
  constructor(private _http: HttpClient) {}

  createNewCourse(course: Icourses): Observable<any> {
    return this._http.post<any>(this.courseUrl, course);
  }
}
