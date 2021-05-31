import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetails, Post } from '../../shared/models/posts.model';
import { testPosts, testPostDetails } from '../shared/posts-mock-data';
import { PostsService } from 'src/app/core/services/posts.service';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService, private contactsService: ContactsService) { }

  public postDetails: PostDetails;


  ngOnInit(): void {
    let post: Post;
    const id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(id).subscribe(data => {
      post = { ...data }
      this.contactsService.getContact(String(post.userId)).subscribe(data => {
        this.postDetails = { post, contact: { ...data }, comments: [] }
      })
      this.postsService.getComments(id).subscribe(data => {
        this.postDetails.comments = data
      })

    })

  }

}
