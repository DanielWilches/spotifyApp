import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-error',
  templateUrl: './card-error.component.html',
  styleUrls: ['./card-error.component.scss']
})
export class CardErrorComponent implements OnInit {
@Input() mensajeError: string;
  constructor() { }

  ngOnInit(): void {
  }

}
