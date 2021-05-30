import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetails } from '../../shared/models/posts.model';
import { testPosts, testPostDetails } from '../shared/posts-mock-data';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public testPost: PostDetails;


  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.testPost = testPostDetails
    console.log(this.testPost);

  }

}
