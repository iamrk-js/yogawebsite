import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss'],
})
export class AddcourseComponent implements OnInit {
  courseForm!: FormGroup;
  isInEditMode: boolean = false;
  courseId!: string;
  constructor(
    private _snackBar: SnackbarService,
    private _coursesService: CoursesService,
    private _auth: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createCourseForm();
    this._auth.params.subscribe((id: Params) => {
      this.courseId = id['courseId'];
      console.log(this.courseId);
      if (this.courseId) {
        this.isInEditMode = true;
        this._coursesService.getSingleCourse(this.courseId)
          .subscribe(res => {
            console.log(res);
            this.courseForm.patchValue(res)
          })
      }
    });
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

  onCourseCreate() {
    if (this.courseForm.valid) {
      let course = this.courseForm.value;
      this.courseForm.reset();
      this._coursesService.createNewCourse(course).subscribe((res) => {
        console.log(res);
        this._snackBar.openSnackbar('New Course is Added Succesfully', 'ok');
      });
    }
  }

  onPostUpdate(){
    if(this.courseForm.valid){
      let obj = {...this.courseForm.value, id : this.courseId};
      console.log(obj)
      this._coursesService.updatePost(obj)
        .subscribe(res => {
          console.log(res)
          this._router.navigate(['/teacherDashboard'])
        })
    }
  }
}
