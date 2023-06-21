import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { UserDeatailsService } from '../user-deatails.service';

@Component({
  selector: 'app-data-stored',
  templateUrl: './data-stored.component.html',
  styleUrls: ['./data-stored.component.scss']
})
export class DataStoredComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'cellphone', 'actions'];

  constructor(private userDetailsService: UserDeatailsService) { }

  ngOnInit(): void {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userdata = JSON.parse(userDataString);
      this.dataSource = new MatTableDataSource(userdata);
    }
  }

  deleteUser(user: any) {
    // Logic to delete user entry
  }

  updateUser(user: any) {
    // Logic to update user entry
  }}