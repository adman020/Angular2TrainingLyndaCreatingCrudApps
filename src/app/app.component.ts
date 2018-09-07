import { Component } from '@angular/core';

// use these for Firebase
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// FIX https://stackoverflow.com/questions/43990887/getting-an-error-has-no-exported-member-angularfire-authproviders-authmethod?rq=1
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // bind to any type of array
  items: FirebaseListObservable<any[]>;

  // reference input in form
  msg: string = '';

  // dependency injection
  constructor(public af: AngularFireDatabase) {

  // Abbreviated to AF
  this.items = af.list('/messages');
 }

 // Create method
 send(chatMsg: string) {
  this.items.push({message: chatMsg});
  // clears out message
  this.msg = '';
  alert('creating');
 }

 delete(key:string){
   this.items.remove(key);
   alert('deleting');
 }


}
