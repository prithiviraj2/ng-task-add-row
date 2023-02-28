import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  addObj: any = {}
  amount = 0;
  countrylist: any
  constructor(private fb: FormBuilder,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      present: ['1'],
      country: [''],
      totalAmount: [0],
      address: this.fb.array([
      ])
    })
    this.countrylist = [
      { id: 1, country: 'India' },
      { id: 2, country: 'Pakistan' },
      { id: 3, country: 'China' }
    ]
  }

  calculateTotal(event: any, index: any) {
    console.log(event.value)
    console.log(index)
    this.addObj.address = event.value;
    for (let i = 0; i < this.addObj.address.length; i++) {
      if (Number(this.addObj.address[i].city) > Number(this.addObj.address[i].street)) {
        this.addObj.address[i].diff = Number(this.addObj.address[i].city) - Number(this.addObj.address[i].street);
        this.addObj.address[i].total = this.addObj.address[i].diff * 0.05
        this.addObj.address[i].total = this.addObj.address[i].total.toFixed(2)
      } else {
        this.toaster.error("Max value should be Greater")
      }
    }
    console.log(this.addObj)
    let docArrList = <FormArray>this.form.controls['address'];
    docArrList.controls = [];
    if (this.addObj.address.length > 0) {
      for (let val of this.addObj.address) {
        docArrList.push(this.vendorPurchaseMaterialList());
      }
    }
    this.form.patchValue({ address: this.addObj.address });
    // this.calculateTotalAmount(event,index)
  }
  // calculateTotalAmount(event:any,index:any){
  //   this.addObj.address=event.value;
  //   console.log(this.addObj)
  //   for (let i = 0; i < this.addObj.address.length; i++) {
  //     console.log(this.addObj.address[i])
  //     this.amount+=this.addObj.address[i].total
  //   }
  //   this.addObj.totalAmount=this.amount
  //   console.log(this.addObj)
  // }
  vendorPurchaseMaterialList() {
    return this.fb.group({
      street: [0],
      city: [0],
      diff: [0],
      total: [0],
      percentage: ['5%'],
      totalAmount: [0]
    });
  }
  get vendorWiseList(): FormArray {
    return (<FormArray>this.form.get('address')) as FormArray;
  }
  addItem() {
    let count = this.form.value.country
    console.log(count);
    if (count != '') {
      let order = this.vendorPurchaseMaterialList();
      this.vendorWiseList.push(order);
      // if (this.addObj.address.length > 0) {
      //   let order = this.vendorPurchaseMaterialList();
      //   this.vendorWiseList.push(order);
      // }

    } else {
      this.toaster.error("Select Values")
    }



  }
  delete(index: any) {
    this.vendorWiseList.removeAt(index);
    this.toaster.error("Deleted Successfully")
  }
  submit() {
    console.log(this.form.value)
    localStorage.setItem("value", JSON.stringify(this.form.value))
    this.toaster.success("Submitted Successfully")
  }
  edit() {
    const editdata = JSON.parse(localStorage.getItem('value') || '{}');
    console.log(editdata)
    this.addObj = editdata;
    let docArrList = <FormArray>this.form.controls['address'];
    docArrList.controls = [];
    if (this.addObj.address.length > 0) {
      for (let val of this.addObj.address) {
        docArrList.push(this.vendorPurchaseMaterialList());
      }
    }
    this.form.patchValue({ address: this.addObj.address });
  }
  checkpresent(event: any) {
    if (event.target.checked) {
      this.form.value.present = '1'
    } else {
      this.form.value.present = '0'
    }
  }
}
