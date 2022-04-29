import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { SecondComponent } from '../second/second.component';
import { MatDialog, } from '@angular/material/dialog';
//import { NavigationExtras } from '@angular/router';
//import { ThiredComponent } from '../third/thired.component';

@Component({
  selector: 'app-first - app-third  ',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  data: any;
 
  public get dialog(): MatDialog {
    return this._dialog;
  }
  public set dialog(value: MatDialog) {
    this._dialog = value;
  }
 
  constructor(public formBuilder: FormBuilder,private _dialog: MatDialog ) {}

  
   ngOnInit():any{
    this.registerForm=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      uname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      pass:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),

    }) 
  
   }
  registerForm:any;
  
   invalid:any
  // name: string | any;


  
 
  /*Values are pass in first component to second Conponent*/
  openDialog(): void {
   console.log(this.registerForm.value);
     const dialogRef = this.dialog.open(SecondComponent,{
       width: '280px',
       data: {name:this.name.value,email:this.email.value,uname:this.uname.value,pass:this.pass.value},
       
     });
    }
   get name(){ return this.registerForm.get('name');}
   get uname(){ return this.registerForm.get('uname');}
   get email(){ return this.registerForm.get('email');}
   get pass(){ return this.registerForm.get('pass');}
   
}

                                  /*.....End.....*/




                                  // constructor(public formBuilder: FormBuilder,private _dialog: MatDialog ) {

  
   
                                  //   this.registerForm=this.formBuilder.group({
                                  //      name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]],
                                  //      email: ['', [Validators.required, Validators.email]],
                                  //      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
                                  //      pass: ['', [Validators.required, Validators.pattern("[0-9]*")]],
                                 
                                  //    }) 
                                  //  }





 //constructor(public dialog: MatDialog) {}
  // results: object = new Object();
/* dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.email = result;
     });*/

  //msg:string | any
  
  /*email(): void {
    throw new Error('Function not implemented.');
  }*/
  /*onSubmit(){
    console.log(this.registerForm.value);
  
   }*/
   /*get firstName(): FormControl {
    return this.registerForm.controls.name as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.controls.uname as FormControl;
  }*/



/*function CourseDialogComponent(CourseDialogComponent: any, dialogConfig: any) {
  throw new Error('Function not implemented.');
}
  /* 
   submitted = false;
  msg:string | undefined;
  openDialog(){
    alert(this.msg="Registerd Succesfully");
  }
  ngOnInit(): void {
  }

*/
