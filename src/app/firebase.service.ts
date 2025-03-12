import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyCuKIKm4Wze3GW3TvsVd862A2ky194eDYw",
    authDomain: "tienda-online-5971f.firebaseapp.com",
    databaseURL: "https://tienda-online-5971f-default-rtdb.firebaseio.com",
    projectId: "tienda-online-5971f",
    storageBucket: "tienda-online-5971f.firebasestorage.app",
    messagingSenderId: "193750050261",
    appId: "1:193750050261:web:57e2986d3c75756abe495c"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);

  }

}
