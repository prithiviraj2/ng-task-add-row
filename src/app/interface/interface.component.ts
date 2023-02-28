import { Component } from '@angular/core';

// Typescript - interface

// Interface - only works with object

interface User {
  name:string,
  age:number
}

const user:User = {
  name:'prithivi',
  age:50
}

// Function Interface

interface Function {
  (x:number,y:number):number
}

let add:Function = (p1:number,p2:number) => {
  return p1+p2
}

// Extending Interface

interface Employee extends User {
  employeeid:number
}

const employee:Employee = {
  name:'sriram',
  age:32,
  employeeid:100
}

// types cant be replaced with

type strorNum = string | number

let errorcode:strorNum = '400'

errorcode = 200
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent {


  
}
