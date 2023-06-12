import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { YogaDashboardComponent } from './components/yoga-dashboard/yoga-dashboard.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "teacherDashboard", component: TeacherdashboardComponent },
  { path: "studentsDashboard", component: StudentdashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
