import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContactCardComponent,
        PostCardComponent
    ],
    exports: [
        ContactCardComponent,
        PostCardComponent
    ]
})
export class SharedModule { }