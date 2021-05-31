import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormButtonComponent } from './form-button/form-button.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContactCardComponent,
        PostCardComponent,
        AvatarComponent,
        FormButtonComponent
    ],
    exports: [
        ContactCardComponent,
        AvatarComponent,
        PostCardComponent,
        FormButtonComponent
    ]
})
export class SharedModule { }