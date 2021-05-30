import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/posts.model';
import { testPosts } from '../shared/posts-mock-data'
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor() { }


  public posts: Post[] = [];

  ngOnInit(): void {
    this.posts = testPosts
  }

}
