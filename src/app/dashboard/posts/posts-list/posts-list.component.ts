import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/posts.model';
import { testPosts } from '../shared/posts-mock-data'
import { PostsService } from '../../../core/services/posts.service'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private postsService: PostsService) { }


  public posts: Post[] = [];

  ngOnInit(): void {
    this.posts = testPosts
    this.postsService.getPosts().subscribe(data => {
      data.forEach(post => {
        this.posts.push(post)
      })
    })
  }

}
