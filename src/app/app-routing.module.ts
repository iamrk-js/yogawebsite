import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { YogaDashboardComponent } from './components/yoga-dashboard/yoga-dashboard.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { AuthGuard } from './services/authgaurd.service';
import { AboutComponent } from './components/about/about.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UserroleGuard } from './services/userrole.gaurd';

const routes: Routes = [
  {
    path: "", component: AuthComponent
  },
  { path: "teacherDashboard", canActivate: [AuthGuard], component: TeacherdashboardComponent },
  { path: "studentsDashboard", canActivate: [AuthGuard], component: StudentdashboardComponent },
  { path: "about", canActivate: [AuthGuard, UserroleGuard],
  data: {
    userRole: "student"
  },
  component: AboutComponent },
  { path: "addnewcourse", canActivate: [AuthGuard], component: AddcourseComponent },
  { path: "editcourse/:courseId", canActivate: [AuthGuard], component: AddcourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
