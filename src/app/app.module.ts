import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular forms library
import { FormsModule } from '@angular/forms';

// Angular http library
import { HttpModule } from '@angular/http';

// use these for Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';



// put Firebase config stuff here
export const firebaseConfig = {
  apiKey: "AIzaSyDBFSX7-ZHYdLGNC4vUHpUdtFUQaqynW4g",
  authDomain: "chatapp-3ddb7.firebaseapp.com",
  databaseURL: "https://chatapp-3ddb7.firebaseio.com",
  projectId: "chatapp-3ddb7",
  storageBucket: "chatapp-3ddb7.appspot.com",
  messagingSenderId: "1063761264705"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // tell it to include these libraries
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
