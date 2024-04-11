import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule, RouterLink] ,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
    public dataForm: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      secondPassword: new FormControl(''),
    }
  )
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        secondPassword: ['', Validators.required],
      }, 
      {
        validator: this.checkPassword
      }
    )
  }

  public checkPassword(group: FormGroup){
    const password = group.get('password')?.value
    const secondPassword = group.get('secondPassword')?.value
    return password === secondPassword ? null : {invalidPass: true}
  }

  public onSubmit():void{
    console.log(this.dataForm.valid, this.dataForm.value)
    console.log(this.dataForm)
    // console.log(this.dataForm?.errors?.passValidate)
  }
}