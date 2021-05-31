import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contacts.model';
import { testContact } from '../shared/mock-data'
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  constructor(private contactService: ContactsService) { }

  public contacts: Contact[] = [];


  ngOnInit(): void {
    this.contacts = testContact;
    this.contactService.getContacts().subscribe(data => {
      data.forEach(contact => {
        this.contacts.push(contact)
      })
    });
  }
}
