import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/dashboard/shared/models/contacts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  private contactsUrl = 'https://jsonplaceholder.typicode.com/users';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>(this.contactsUrl)

  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactsUrl}/${contactId}`)
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.contactsUrl}`, contact, this.httpOptions)
  }

}
