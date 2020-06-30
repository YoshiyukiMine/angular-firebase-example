import { Injectable } from '@angular/core';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBer: MatSnackBar
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  login() {
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider()
    ).then(() => {
      this.snackBer.open('ようこそGitPetへ',　null, {
        duration: 3000
      });
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBer.open('ログアウトしました', null, {
        duration: 3000
      });
    });
    this.router.navigateByUrl('/welcome');
  }
}
