import { Component, OnInit } from '@angular/core';
import { Dropdown } from './models/dropdown.model';

@Component({
  selector: 'my-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppDropdown {
  dropdowns: Dropdown[] = [
    { id: 1, value: '10' },
    { id: 2, value: '20' },
    { id: 3, value: '30' },
    { id: 4, value: '40' },
  ];
}
