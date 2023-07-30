import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss'],
})
export class AddcourseComponent implements OnInit {
  courseForm!: FormGroup;
  constructor(
    private _snackBar : SnackbarService,
    private coursesService : CoursesService) {}

  ngOnInit(): void {
    this.createCourseForm()
  }

  createCourseForm() {
    this.courseForm = new FormGroup({
      courseName: new FormControl('', [Validators.required]),
      courseDescription: new FormControl('', [Validators.required]),
      courseImg: new FormControl('', [Validators.required]),
      coursePrice: new FormControl('', [Validators.required]),
      courseDuration: new FormControl('', [Validators.required]),
    });
  }

  onCourseCreate(){
    if(this.courseForm.valid){
      let course = this.courseForm.value;
      this.courseForm.reset();
      this.coursesService.createNewCourse(course)
        .subscribe(res => {
          console.log(res);
          this._snackBar.openSnackbar("New Course is Added Succesfully", "ok")
        })
      
    }
  }
}
