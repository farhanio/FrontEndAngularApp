import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../model/model.contact';

@Injectable()

export class contactService{

  pageContacts:any;

  constructor(public http:Http){}

  getContacts( keyword:string, page:number, size:number){
    return this.http.get( "http://localhost:8080/chercherContacts?mc="+keyword+"&page="+page+"&size="+size)
        .map(resp=> resp.json());

  }

  saveContact( contact:Contact){
    return this.http.post( "http://localhost:8080/contacts",contact );
     // .map(resp=> resp.json());

  }

  deleteContact( id:number ){
    return this.http.delete( "http://localhost:8080/contacts/"+id );


  }

  getContactDetails(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id).map(value => value.json());
  }

  updateContact(contact:Contact){
    return this.http.post( "http://localhost:8080/contacts", contact)
      .map(value => value.json());
  }
}
