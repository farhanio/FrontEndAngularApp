import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {contactService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact=new Contact();
  idContact:number;


  constructor(public activatedRoute:ActivatedRoute, public contactservice:contactService, public router:Router) {
    console.log(activatedRoute.snapshot.params['id']);
    this.idContact=activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {

    this.contactservice.getContactDetails(this.idContact)
      .subscribe( data =>  {
        this.contact=data;
        console.log(data);
      },  err=>
      {
        console.log(err);
      })
  }



  confirmToUpdate(){
    this.mode = 2;
  }


  UpdateContact(){
    this.contactservice.updateContact(this.contact).subscribe(value =>{
      alert("Update Successful");
      //this.contact=value;
      this.router.navigate(['contacts']);
      console.log(value);
    },  err=>
    {
      alert("Problem when parsing data");
      console.log(err);
    })
  }



}
