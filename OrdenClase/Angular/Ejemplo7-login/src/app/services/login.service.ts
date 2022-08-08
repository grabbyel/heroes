import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  login(email: string, pass: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, pass);
  }

  registro(email: string, pass: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, pass);
  }

  logout(email: string, pass: string) {
    return this.angularFireAuth.signOut();
  }

  comprobar(email: string, pass: string) {
    return this.angularFireAuth.authState;
  }
}
