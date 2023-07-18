import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, from, of, tap } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logInStatus : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private _snakBar: SnackbarService) { }

  onLogin(email: string, password: string): Promise<any> {
    return (this.afAuth.signInWithEmailAndPassword(email, password))
  }
  signUp(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(
      email as string, password as string
    )
  }

  logout() {
    this.logInStatus.next(false);
    return this.afAuth.signOut()
  }
}
