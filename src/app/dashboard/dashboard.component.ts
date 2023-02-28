import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableData = [
    {
      FirstName: "Gururaj",
      LastName: "Jewargi",
      Mobile: 1234567890,
      Location: "Bangalore"
    },
    {
      FirstName: "RAju",
      LastName: "Jewargi",
      Mobile: 1478523690,
      Location: "Gulbarga"
    },
    {
      FirstName: "Guru",
      LastName: "Jewargi",
      Mobile: 9874563215,
      Location: "Kalaburagi"
    }
  ]


  constructor() { }

  ngOnInit(): void {

  }
  submitted(event: any) {
    console.log(event);

    this.tableData.push(event);
    console.log(this.tableData);
  }



 
}
