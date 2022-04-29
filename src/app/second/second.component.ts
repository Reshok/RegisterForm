import { Component,Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import { ThiredComponent } from '../third/thired.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent  {
  _id: any;
  dialog: any;

  
  dailog: any;
  static html({ html, arg1 }: { html: any; arg1: { width: string; data: { name: string; uname: String; email: string; pass: number; }; }; }): void {
    throw new Error('Method not implemented.');
  }
  
email:any
name:any
registerForm:any
uname:any

  constructor(private router:Router,private activatedRoute:ActivatedRoute,
   
    public dialogRef: MatDialogRef<SecondComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  view(){
    console.log(this.data.name,this.data.email,this.data.uname,this.data.pass);
    this.router.navigate(
      ['/ok'],
      { queryParams: {name:this.data.name,email:this.data.email,uname:this.data.uname,pass:this.data.pass}}                   //{ queryParams:{data:"hai"}}
    ) 
   
     };
  
     ngOnInit() :void {}

}
export interface DialogData{
  email: string;
  name: string;
  uname:string;
  pass:number;
  
}

                                        /*....End....*/






 // console.log(this.data.email);
/* view():any{                                 //go on third component
    const dialogRef =this.dialog.open(ThiredComponent,{
      data: {name: this.name},
    });
  }*/
  /*  this.router.navigate([
      '/ok',this._id],{ queryParams:{name:''}}
      );
      */
  
 
  /*gotoThird() {
    this.router.navigate(['/ok',{name:'value'}]);
  }*/



/*onNoClick(): void {
    this.dialogRef.close();
  }*/


/*view(){
    console.log(this.data.name,this.data.email);
    const dialogRef = this.dailog.open(ThiredComponent, {
      width: '250px',
      value: {name: this.name,email:this.email},
    });
  } */

