import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact:any = {name:"", phoneNumber:"", email:"", image:""};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  // newContact = {name:"", phoneNumber:"", email:"", image:""}

  addContact(){
    const newContact = {name:this.newContact.name, phoneNumber:this.newContact.phoneNumber, email:this.newContact.email, image:this.newContact.image}

    console.log("Add contact has been called");
    this.contacts.push(newContact)
    // add contact to contacts list
    // clear inputs
  }
}
