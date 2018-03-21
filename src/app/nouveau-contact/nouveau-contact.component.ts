import { Component, OnInit } from '@angular/core';
import {contactService} from '../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:contactService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
   this.contactService.saveContact(dataForm).subscribe(value => {
     console.log(value);
     console.log("OK")
   },error2 => {
     console.log(error2);
   });
  }
}
