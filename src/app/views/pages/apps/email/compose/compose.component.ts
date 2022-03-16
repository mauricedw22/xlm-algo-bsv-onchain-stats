import { Component, OnInit } from '@angular/core';

import { PeoplesData } from '../../../../../core/dummy-datas/peoples.data';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  peoples: any[] = [];
  selectedTo: any[] = [];
  selectedCc: any[] = [];
  messageValue: string = "";

  constructor() { }

  ngOnInit(): void {
    this.peoples = PeoplesData.peoples;
    this.selectedTo = [this.peoples[2].id]
    this.selectedCc = [this.peoples[3].id, this.peoples[4].id, this.peoples[5].id]
  }

}
