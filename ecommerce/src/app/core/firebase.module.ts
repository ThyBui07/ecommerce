import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule
  ],
  declarations: [ ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [ ]
})
export class FirebaseModule { }
