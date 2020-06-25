import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData;
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ) {}

  login() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      }
    });
  }

  async signIn(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );
    this.getDataUser(result.user);
    this.login();
  }

  async signUp(email: string, password: string, name: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.setDataUser(result.user, name);
    window.location.href = 'login';
  }

  getDataUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `user/${user.uid}`
    );
    userRef.valueChanges().subscribe((value) => {
      localStorage.setItem('userName', value.name);
      window.location.href = 'home';
    });
  }

  setDataUser(user: any, name: string) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `user/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      name: name,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
}
