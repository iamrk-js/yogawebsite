import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.scss']
})
export class TeacherdashboardComponent implements OnInit {
  allCourses : Array<any> = []
  constructor(private _coursesService : CoursesService) { }

  ngOnInit(): void {
    this._coursesService.getAllCourses()
      .subscribe(res => {
        console.log(res);
        this.allCourses = res;
      })
  }
  onCourseRemove(id:any){
    this._coursesService.deleteCourse(id)
      .subscribe(res => {
        console.log(res);
        this.allCourses = this.allCourses.filter(course => course.id !== id)
      })
  }
}
