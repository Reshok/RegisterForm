import { Component, OnInit ,Inject,Input, Injectable, ViewChild} from '@angular/core';
//import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Params, QueryParamsHandling  } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
//import { RegisterService } from '../register.service';
import { UserDataService } from './user-data.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakPoint } from '@angular/flex-layout';
import{ BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-thired',
  templateUrl: './thired.component.html',
  styleUrls: ['./thired.component.css']
})

export class ThiredComponent implements OnInit {
   displayedColumns: string[] = ['name', 'position', 'office','salary'];
  // dataSource = ELEMENT_DATA;
 
  User:any ;



  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

 
  selection:any
  userId:any
  title:undefined | any
  UserDataService:any
  imageSrc = 'assets/sundhar2.png'  
  imageAlt = 'iPhone'
  lis:any=[]; 
  // User: any;
  name:undefined|any;
  value:any 
  data:any
  dailog: any;
  params:any;
  queryParams:any;
  registerForm:any
  Form: FormGroup;
  response:any
  posts:any
  user:any
  email:any
  thired:any
  observe:any
  
  

  static html({ html, arg1 }: { html: any; arg1: { width: string; data: { name: string; uname: String; email: string; pass: any; }; }; }): void {
    throw new Error('Method not implemented.');
  }
  constructor(private route: ActivatedRoute,private http:HttpClient, private UserData: UserDataService,
    private observer: BreakpointObserver,private router: Router
    // public id: number,
    // public firstname:string,
    // public lastname:string,
    // public department:string,
    // public email:string,
    // public country:string,

    )
   {
     
    this.Form = new FormGroup({
      fname: new FormControl()
  });
 
  // this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  // //http.get('https://jsonplaceholder.typicode.com/posts')  
  //  .subscribe(response => {  
  //  // console.log(response); 
  //   this.thired=response;   
    
  // });
    }
    ngAfterViewInit(){
      this.observer.observe(['(max-width:800px)']).subscribe((res: { matches: any; })=>{
        if(res.matches){
          this.sidenav.mode='over';
          this.sidenav.close();
        }else{
          this.sidenav.mode='side';
          this.sidenav.open();
  }
      });
    }

  ngOnInit() :void {
   
   this.route.queryParams.subscribe((params:any)=>{
     console.log(params)
     this.name=params.name,this.email=params.email
   }
   
   );
   this.UserData.user()
   .subscribe((data: [] | any)=>{
     this.User=data;
     console.log(this.User);
     
    // this.lis=this.User.list;
    })
 
 }
  
  

}
// const ELEMENT_DATA: PeriodicElement [] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// ];

export interface DialogData {
  email: string;
  name: string|undefined;
  
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }






function subscribe(arg0: (UserData: any) => any) {
  throw new Error('Function not implemented.');
}
 // public dialogRef: MatDialogRef<ThiredComponent>,
   // @Inject(MAT_DIALOG_DATA) value: DialogData,
// @Input('formControlName') name: string | any;
 // @Output() changeName = new EventEmitter();


 /* constructor (
    public dialogRef: MatDialogRef<ThiredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
   
  }  */
 
  /*static html({ html, arg1 }: { html: any; arg1: { width: string; data: { name: string; uname: String; email: string; pass: any; }; }; }): void {
    throw new Error('Method not implemented.');
  }*/




 /* this.route.queryParams
  //.filter((params: { name: any; }) => params.name)
 // .subscribe((params: { name: string | undefined; }) => {
   // console.log(params); 

   // this.name = params.name;

  //  console.log(this.name); 
  }

 // );
 //}*/




/*
ngOnInit() {
  this.route.queryParams
  .filter(params => params.order)
  .subscribe(params => {
    console.log(params); // { order: "popular" }

    this.name = params.name;

    console.log(this.name); // popular
  }
  }*/