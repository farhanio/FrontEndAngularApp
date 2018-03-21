import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import  'rxjs/add/operator/map';
import {contactService} from '../../services/contacts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any;

  keyword:string="";
  currentpage:number=0;
  size:number=8;
  pages:any;

  constructor(public  http:Http, public contactservice:contactService,
              public router:Router) { }

  ngOnInit() {

  }
  doSearch(){
    this.contactservice.getContacts(this.keyword,this.currentpage,this.size)
      .subscribe( data =>  {
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
      },  err=>
      {
        console.log(err);
      })
  }

  chercher(){
    this.doSearch();
  }

  gotopage(i:number){
  this.currentpage=i;
  this.doSearch();
  }

  onEditContact(id:number){
  this.router.navigate(['edit-contact',id]);
  }

  deleteContact(id:number){
    this.contactservice.deleteContact(id).subscribe(value =>{
      alert("delete Successful");

      this.contactservice.getContacts(this.keyword,this.currentpage,this.size)
        .subscribe( data =>  {
          this.pageContacts=data;
          this.pages=new Array(data.totalPages);
        },  err=>
        {
          console.log(err);
        })
      //this.contact=value;
      //this.router.navigate(['contacts']);
      //console.log(value);
    },  err=>
    {
      alert("Problem deleting");
      console.log(err);
    })
  }

}
