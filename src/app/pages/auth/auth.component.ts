import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule,  RouterLink, RouterLinkActive] ,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
    public dataForm: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    }
  )
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }


  public onSubmit():void{
    console.log(this.dataForm.valid, this.dataForm.value)
    console.log(this.dataForm)
    // console.log(this.dataForm?.errors?.passValidate)
  }
}
