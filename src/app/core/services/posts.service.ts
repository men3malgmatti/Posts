import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Comment } from 'src/app/dashboard/shared/models/posts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments'

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.postsUrl)

  }

  getContactPosts(contactId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?userId=${contactId}`)
  }


  getPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${postId}`)
  }

  getComments(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentsUrl}?postId=${postId}`)
  }

}
