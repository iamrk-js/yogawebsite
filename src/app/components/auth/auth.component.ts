import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, of, tap } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private _apiService: ApiService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _auth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _authService: AuthService) { }
  allreadyHaveAccount: boolean = false;
  ngOnInit(): void {
  }

  onSignUp(f: NgForm) {
    console.log(f.value)
    let { email, password, userRole } = f.value;
    this._authService.signUp(email, password)
      .subscribe(userCredential => {
        // Handle successful signup
        const uid = userCredential.user?.uid;
        this._snackbar.openSnackbar(`Successfully Created account as a ${userRole}`, 'close');
        this.allreadyHaveAccount = !this.allreadyHaveAccount;
        this._firestore.collection('users').doc(uid).set({
          role: userRole
        });
      })
  }
  onLogin(f: NgForm) {
    let { email, password } = f.value;
    this._authService.onLogin(email, password)
      .then(userCredential => {
        // Handle successful login
        console.log(userCredential)
        const uid = userCredential.user?.uid;
        this._firestore.collection('users').doc(uid).get().subscribe((userDoc) => {
          const userRole: any = userDoc.data();
          // Handle successful login and access user role
          console.log(userRole);
          if (userRole.role.includes('teacher')) {
            this._router.navigate(['/teacherDashboard'])
          } else {
            this._router.navigate(['/studentsDashboard'])
          }
          this._snackbar.openSnackbar(`Successfully Login as a ${userRole.role}`, 'close')
        });
        this._authService.logInStatus.next(true)
      })
      .catch(err => {
        this._snackbar.openSnackbar(err.message, "close")
      })
   
  }
}

