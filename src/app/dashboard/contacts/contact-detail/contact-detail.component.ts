import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDetails } from '../../shared/models/contacts.model';
import { testContactDetails } from '../shared/mock-data';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }


  public testContactDetails: ContactDetails;
  public contactForm: FormGroup

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.testContactDetails = testContactDetails;
    console.log(this.testContactDetails);
    this.contactForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required])
    });

    this.contactForm.setValue({
      fullName: this.testContactDetails.contact.name,
      email: this.testContactDetails.contact.email,
      companyName: this.testContactDetails.contact.company.name
    })
  }



}
