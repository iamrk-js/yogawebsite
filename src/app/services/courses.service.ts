import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourses } from '../models/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl: string = environment.baseUrl;
  courseUrl = `${this.baseUrl}/courses.json`;
  private dataSubject = new BehaviorSubject<Array<any> | null>(null);
  private data$: Observable<any> = this.dataSubject.asObservable();
  private cachedData!: Array<any>; // undefined
  constructor(private _http: HttpClient) {}

  createNewCourse(course: Icourses): Observable<any> {
    return this._http.post<any>(this.courseUrl, course);
  }

  getAllCourses(): Observable<any> {
    if (this.cachedData) {
      return this.data$;
    } else {
      return this._http.get<any>(this.courseUrl).pipe(
        map((res) => {
          const postArray = [];
          for (const key in res) {
            let obj = {
              ...res[key],
              id: key,
            };
            postArray.push(obj);
          }
          return postArray;
        }),
        tap((res) => {
          this.cachedData = res;
          this.dataSubject.next(res);
        })
      );
    }
  }

  getSingleCourse(id: string): Observable<any> {
    let courseUrl = `${this.baseUrl}/courses/${id}.json`;
    return this._http.get<any>(courseUrl);
  }

  updatePost(course: any): Observable<any> {
    let updateUrl = `${this.baseUrl}/courses/${course.id}.json`;
    return this._http.patch<any>(updateUrl, course);
  }
}
