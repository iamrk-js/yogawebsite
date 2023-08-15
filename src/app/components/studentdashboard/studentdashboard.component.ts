import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss']
})
export class StudentdashboardComponent implements OnInit {
  allCourses : Array<any> = []
  constructor(private _coursesService : CoursesService) { }

  ngOnInit(): void {
    this._coursesService.getAllCourses()
    .subscribe(res => {
      console.log(res);
      this.allCourses = res;
    })
  }

}
