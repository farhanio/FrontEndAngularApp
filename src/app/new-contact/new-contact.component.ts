import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {Http} from '@angular/http';
import {contactService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode=1;
  constructor(public  http:Http, public contactservice:contactService) { }

  ngOnInit() {
  }

  saveContact(){

    this.contactservice.saveContact(this.contact)
      .subscribe(data =>  {
        console.log(data);
      },  err=>
      {
        console.log(err);
      })
  }

  confirmToSave(){

     this.mode = 2;
  }
}
