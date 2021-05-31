import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() color: string;
  @Input() backgroundColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
