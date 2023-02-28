import { Component, OnInit } from '@angular/core';
import { AddrowComponent } from '../addrow/addrow.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  componentpath = [
    { name: 'addrow'},
    { name: 'form' },
    { name: 'product'},
    { name: 'inventry' },
    { name: 'menuproject'}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  navigateTo(event:any) {
    // if (event.target.value === 'addrow') {
    //   this.router.navigate(['/addrow']);
    // }else if(event.target.value === 'form'){
    //   this.router.navigate(['/from']);
    // }else if(event.target.value === 'product'){
    //   this.router.navigate(['/product']);
    // }else if(event.target.value === 'inventry'){
    //   this.router.navigate(['/inventry']);
    // }else if(event.target.value === 'menuproject'){
    //   this.router.navigate(['/menuproject']);
    // }

    let value = event.target.value

    value === 'addrow' ? this.router.navigateByUrl('/addrow') : value === 'form' ? this.router.navigateByUrl('/form') :
    value === 'product' ? this.router.navigateByUrl('/product'): value === 'inventry' ? this.router.navigateByUrl('/inventry'):
    value === 'menuproject' ? this.router.navigateByUrl('/menuproject') : this.router.navigateByUrl('/collection')
  }
}
