import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `
    <hr>
    <p>It worked!</p>
  `,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
