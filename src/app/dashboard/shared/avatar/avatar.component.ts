import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  @Input() fullName: string;
  @Input() size: string;
  public initilas: string;
  public lineHeight: string
  ngOnInit(): void {
    this.initilas = this.fullName.split(" ").map((name) => name[0]).join("")

  }

}
