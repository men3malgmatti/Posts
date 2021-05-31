import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetails } from '../../shared/models/posts.model';
import { PostsService } from 'src/app/core/services/posts.service';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService, private contactsService: ContactsService) { }

  public postDetails: PostDetails;
  public isLoading: boolean

  ngOnInit(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.getPostDeatils(id);

  }


  getPostDeatils(id: string) {

    this.postsService.getPost(id).pipe(
      switchMap(post => {
        return forkJoin(of(post), this.contactsService.getContact(String(post.userId)), this.postsService.getComments(id))
      })
    ).subscribe(results => {
      this.postDetails = { post: results[0], contact: results[1], comments: results[2] }
      this.isLoading = false;
    })

  }

}
