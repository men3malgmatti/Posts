import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDetails } from '../../shared/models/contacts.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { PostsService } from 'src/app/core/services/posts.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private contactService: ContactsService, private postsService: PostsService) { }


  public contactDetails: ContactDetails;
  public contactForm: FormGroup;
  public isLoading: boolean;
  public sub: Subscription;

  ngOnInit(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');

    this.contactForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      companyName: new FormControl('', [Validators.required])
    });

    this.getContactDetail(id);

  }

  getContactDetail(id: string) {

    this.sub = forkJoin([this.contactService.getContact(id), this.postsService.getContactPosts(id)]).subscribe(
      results => {
        this.contactDetails = { contact: results[0], posts: results[1] }
        this.contactForm.setValue({
          fullName: this.contactDetails.contact.name,
          email: this.contactDetails.contact.email,
          companyName: this.contactDetails.contact.company.name
        })
        this.isLoading = false;
      }
    )


  }

  onSubmit() {

    this.contactService.updateContact(this.contactForm.value).subscribe(res => {
      console.log(res);

    })
  }


  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
