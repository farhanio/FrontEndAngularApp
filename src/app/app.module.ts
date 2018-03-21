import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpModule} from '@angular/http';
import {contactService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const  appRoutes : Routes=[
  {path: 'about' , component : AboutComponent },
  {path: 'contacts' , component : ContactsComponent},
  {path: 'new-contact' , component : NewContactComponent},
  {path: 'edit-contact/:id' , component : EditContactComponent},
  {path: '' , redirectTo:'/about', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), HttpModule,FormsModule
  ],
  providers: [
    contactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
