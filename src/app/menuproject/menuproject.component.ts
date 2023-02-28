import { Component, OnInit } from '@angular/core';
import { menutask } from '../menu';
@Component({
  selector: 'app-menuproject',
  templateUrl: './menuproject.component.html',
  styleUrls: ['./menuproject.component.scss']
})
export class MenuprojectComponent {
  result = menutask;
  financialYear: any
  taxChapterDetails: any
  id: any
  isGlobal: any
  remarks: any
  taxChapterLookupId: any
  displayValue: any
  totalamount1: any = []
  totalamount:string="";
  constructor() { }

  ngOnInit(): void {
    console.log(this.result);



    for (let i = 0; i < this.result.length; i++) {
      this.id = this.result[i].id
      this.isGlobal = this.result[i].isGlobal
      this.financialYear = this.result[i].financialYear
      this.remarks = this.result[i].remarks
      this.taxChapterDetails = this.result[i].taxChapterDetails
      console.log("id value is" + ":" + this.id);
      console.log("isGlobal value is" + ":" + this.isGlobal);
      console.log("financialYear value is" + ":" + this.financialYear);
      console.log("remarks value is" + ":" + this.remarks);
      console.log("taxChapterDetails value is" + ":" + this.taxChapterDetails);
      for (let i = 0; i < this.taxChapterDetails.length; i++) {
        this.taxChapterLookupId = this.taxChapterDetails[i].taxChapterLookupId
        this.displayValue = this.taxChapterLookupId.displayValue
        console.log("taxChapterLookupId value is" + ":" + this.taxChapterLookupId);
        console.log("displayValue value is" + ":" + this.displayValue);
      }

    }


    // let amount = 67.023124;
    // let tax = 51.0257624;
    // let totalamount = ""
    // let amtval = (Number(amount))
    // let taxval = Number(tax);
    // let add = amtval + taxval
    // let sub = amtval - taxval
    // let multi = amtval * taxval
    // let div = amtval / taxval
    //  let add1 = add.toString()
    //  let sub1 = sub.toString()
    //  let multi1 = multi.toString()
    //  let div1 = div.toString()
    // this.totalamount1 = [add, sub, multi, div]
    // console.log(this.totalamount1);

    // // this.totalamount=  [add1, sub1, multi1, div1]
    // console.log('string value is ' + this.totalamount1.toString());

  }
  onsumbit(){
    let amount = 67.023124;
    let tax = 51.0257624;
    // let amtval = (Number(amount))
    // let taxval = Number(tax);
    // let amtval =Math.round(amount)
    // let taxval =Math.round(tax)
    let adddecimal =amount+tax
    // let add =amtval+taxval 
   let add1 =Math.round(adddecimal)
   this.totalamount=add1.toString()
   this.totalamount1=adddecimal.toFixed(2)
   console.log('addition value is ' + this.totalamount);
   console.log('addition value is ' + this.totalamount1);
  }

  onsub(){
    let amount = 67.023124;
    let tax = 51.0257624;
    // let amtval = (Number(amount))
    // let taxval = Number(tax);
    // let amtval =Math.round(amount)
    // let taxval =Math.round(tax)
    // let sub =amtval-taxval
    let adddecimal =amount-tax
    let add1 =Math.round(adddecimal)
   this.totalamount=add1.toString()
   this.totalamount1=adddecimal.toFixed(2)
   console.log('subtration value is ' +this.totalamount);
   console.log('subtration value is ' + this.totalamount1);
  }
  onmulti(){
    let amount = 67.023124;
    let tax = 51.0257624;
    // let amtval = (Number(amount))
    // let taxval = Number(tax);
    // let amtval =Math.round(amount)
    // let taxval =Math.round(tax)
    // let multi =amtval*taxval
    let adddecimal =amount*tax
    let add1 =Math.round(adddecimal)
   this.totalamount=add1.toString()
   this.totalamount1=adddecimal.toFixed(2)
   console.log('multiplication value is ' +this.totalamount);
   console.log('multiplication value is ' + this.totalamount1);
  }
  ondiv(){
    let amount = 67.023124;
    let tax = 51.0257624;
    // let amtval = (Number(amount))
    // let taxval = Number(tax);
    // let amtval =Math.round(amount)
    // let taxval =Math.round(tax)
    // let div =amtval/taxval
    let adddecimal =amount/tax
    let add1 =Math.round(adddecimal)
   this.totalamount=add1.toString()
   this.totalamount1=adddecimal.toFixed(2)
   console.log('divition value is ' +this.totalamount);
   console.log('divition value is ' + this.totalamount1);
  }
}

