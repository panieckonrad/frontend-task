import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import {freeApiService} from 'src/services/freeapi.service';
import {Product} from '../classes/product'

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Product>;
  dataSource: MyTableDataSource;

  constructor(private _freeApiService: freeApiService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['picture','id', 'name'];

  ngOnInit() {
    this.dataSource = new MyTableDataSource(this._freeApiService);
    this._freeApiService.getProducts() // datasource is now Product[] instead of observable array
    .subscribe
    (
      data=>
      {
        this.dataSource.data = data; // typecasting data returned from API to list
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

	
  public doFilter = (value: string) => { // search for data using the filter text-input
    this._freeApiService.searchProduct(value) 
    .subscribe
    (
      data=>
      {
        this.dataSource.data = data; // datasource is now filtered
      }
    );
   
  }



}
