import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infomations',
  templateUrl: './infomations.component.html',
  styleUrls: ['./infomations.component.css']
})
export class InfomationsComponent implements OnInit {

  @Input() data: any
  constructor() { }
  ngOnInit(): void {
  }

}
