import { Contact } from './contacts.model';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}

export interface Comment {

    postId: number;
    id: number;
    name: string,
    email: string,
    body: string

}


export interface PostDetails {
    contact: Contact,
    post: Post,
    comments: Comment[]
}