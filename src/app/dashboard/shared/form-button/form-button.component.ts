import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() disabled: boolean;
  @Input() color: string;
  @Input() height: string;
  @Input() width: string;

  @Output() click = new EventEmitter();


  ngOnInit(): void {
  }

  onClick() {
    this.click.emit()
  }

}
