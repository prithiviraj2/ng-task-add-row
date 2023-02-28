import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { mobilelist } from 'src/mobilelist';
@Component({
  selector: 'app-inventry',
  templateUrl: './inventry.component.html',
  styleUrls: ['./inventry.component.scss']
})
export class InventryComponent implements OnInit {
  mobilelist = mobilelist
  form!: FormGroup;
  addObj: any = {}
  netamount: any
  disval: any
  netvalue: any
  constructor(private fb: FormBuilder, private toaster: ToastrService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      date: [''],
      address: this.fb.array([
      ]),
      subtotal: [0],
      gst: [''],
      discount: [0],
      nettotal: [0],
      paid: [0],
      due: [0]

    })
  }
  calculateTotal(event: any, index: any) {
    console.log(event.value)
    console.log(index)
    this.addObj.address = event.value;
    let amount = 0
    let gstval = 0.18
    let gstamount

    for (let i = 0; i < this.addObj.address.length; i++) {
      if (Number(this.addObj.address[i].quantity) <= Number(this.addObj.address[i].tquantity)) {
        this.addObj.address[i].total = Number(this.addObj.address[i].quantity) * Number(this.addObj.address[i].price);
        // this.addObj.address[i].total = this.addObj.address[i].diff * 0.05
        // this.addObj.address[i].total = this.addObj.address[i].total.toFixed(2)
        console.log(this.addObj.address[i].total);
        amount += this.addObj.address[i].total
        console.log(amount);
        gstamount = amount * gstval
        this.disval = amount + gstamount

      } else {
        this.toaster.error("Insufficient quantity")
      }
    }
    console.log(amount);
    this.form.patchValue({ subtotal: amount });
    this.form.patchValue({ gst: gstamount });

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
      itemname: [''],
      tquantity: [''],
      quantity: [0],
      diff: [0],
      total: [0],
      price: [''],
      totalAmount: [0]
    });
  }

  get address(): FormArray {
    return (<FormArray>this.form.get('address')) as FormArray;
  }

  addItem() {
    let name = this.form.value.name
    let date = this.form.value.date
    if (name != '' && date != '') {
      let order = this.vendorPurchaseMaterialList();
      this.address.push(order);
    } else {
      this.toaster.error("Select Values")
    }
  }

  delete(index: any) {
    this.address.removeAt(index);
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

  checkpresent(event: any, index: any) {
    console.log(event.target.value);
    console.log(index);
    const founditem = mobilelist.filter((item: any) => {
      return item.id === event.target.value
    })
    console.log(founditem);
    console.log(this.form.value.address)
    console.log("fsfd" + this.address)
    this.form.value.address[index].price = founditem[0].price
    this.form.value.address[index].tquantity = founditem[0].tquantity
    this.addObj = this.form.value
    this.form.patchValue({ address: this.addObj.address });
  }

  netval() {

    let discount = this.form.value.discount
    this.netvalue = this.disval - discount
    console.log(this.netvalue);
    this.form.patchValue({ nettotal: this.netvalue });
  }

  dueval() {
    let balvalue
    let paidval = this.form.value.paid
    balvalue = this.netvalue - paidval
    console.log(balvalue);

    this.form.patchValue({ due: balvalue });
  }
}
