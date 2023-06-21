import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { UserDeatailsService } from '../user-deatails.service';
export interface TableItem {
  field: string;
  value: string;
}
@Component({
  selector: 'app-data-stored',
  templateUrl: './data-stored.component.html',
  styleUrls: ['./data-stored.component.scss']
})
export class DataStoredComponent implements OnInit {

  displayedColumns: string[] = ['field', 'value'];

  dataSource: MatTableDataSource<TableItem>;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() {
    // Initialize your data source
    this.dataSource = new MatTableDataSource<TableItem>([
      { field: 'City', value: 'yy' },
      { field: 'Country', value: 'South Africa' },
      { field: 'Postal Address', value: 'rt' },
      { field: 'Postal Code', value: '0987' },
      { field: 'Email', value: 'katlego.Rampedi@Ekuruleni.gov.za' },
      { field: 'First Name', value: 'kat' },
      { field: 'Last Name', value: 'rampedi' },
      { field: 'Password', value: '123' },
      { field: 'Phone', value: '0728813186' },
      // Add more items as needed
    ]);
  }

  }