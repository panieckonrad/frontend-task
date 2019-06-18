import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Product } from '../classes/product';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      console.log('data', this.data['product']);
    }
    product: Product = this.data['product']; // product is a variable storing the row from material table

  ngOnInit() {
    console.log('The product2 is '+ this.product.id);
  }

}
