
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  @Input() oneSingleContact: any
  @Output() contactBeingDeleted = new EventEmitter<string>();

  deleteContact(theWholeContact){
    this.contactBeingDeleted.emit(theWholeContact);
  }
  constructor() { }

  ngOnInit() {
  }

}