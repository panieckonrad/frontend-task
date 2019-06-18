import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MyTableDataSource } from './my-table-datasource'; // My own table data source, didnt workout but keeping for future.
import {MatTableDataSource} from '@angular/material';
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
  prod: Product[];
  dataSource = new MatTableDataSource(this.prod); // datasource is empty

  constructor(private _freeApiService: freeApiService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['picture','id', 'name' ,'actions'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.prod);
    this._freeApiService.getProducts() // datasource is now Product[] instead of observable array of Product[]
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

	
  public doFilter = (value: string) => { // value is what we insert to the filter box
    this.dataSource.filter = value.trim().toLocaleLowerCase(); // filter by id
  }



}
