import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDetails } from '../../shared/models/contacts.model';
import { testContactDetails } from '../shared/mock-data';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private contactService: ContactsService, private postsService: PostsService) { }


  public contactDetails: ContactDetails;
  public contactForm: FormGroup

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.contactForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required])
    });


    this.contactService.getContact(id).subscribe(data => {

      this.contactDetails = { contact: { ...data }, posts: [] }
      this.contactForm.setValue({
        fullName: this.contactDetails.contact.name,
        email: this.contactDetails.contact.email,
        companyName: this.contactDetails.contact.company.name
      })
    }
    );
    this.postsService.getContactPosts(id).subscribe(data => {
      this.contactDetails = { ...this.contactDetails, posts: [...data] }
    })

  }

  onSubmit() {
    this.contactService.updateContact(this.contactDetails.contact).subscribe(res => {
      console.log(res);

    })
  }

}
