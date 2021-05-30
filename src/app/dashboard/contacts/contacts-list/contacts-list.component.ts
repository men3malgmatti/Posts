import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contacts.model';
import { testContact } from '../shared/mock-data'

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  constructor() { }

  public contacts: Contact[] = [];


  ngOnInit(): void {
    this.contacts = testContact;
  }

}
