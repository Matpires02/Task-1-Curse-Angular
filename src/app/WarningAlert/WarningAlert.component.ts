import { Component } from "@angular/core";

@Component({
  selector: 'warning-alert',
  templateUrl: './WarningAlert.component.html',
  styles:[`
    div{
      color: red;
      font-weight: 600;
    }
  `]
})
export class WarningAlertComponent{}