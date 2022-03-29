import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { DataService } from './data.service';


export interface PeriodicElement {
  name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title='';
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-skin'];
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
y:any;
userData:[]=[];

dataSource = new MatTableDataSource<PeriodicElement>();











  constructor(private dataService:DataService) {
    
    
  }
  
  ngAfterViewInit()
  {
   this.dataService.getUserData().subscribe(dataa => {
    this.y=dataa;
    console.warn(this.y);
    let x:PeriodicElement[]=this.y.results;
    this.dataSource.data =x;
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    
  
  
   })
   

  }
  
    
    
  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}

  
 


