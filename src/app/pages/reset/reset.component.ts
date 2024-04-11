import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule, RouterLink] ,
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit {
    public dataForm: FormGroup = new FormGroup({
      email: new FormControl(''),
    }
  )
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      }
    )
  }


  public onSubmit():void{
    console.log(this.dataForm.valid, this.dataForm.value)
    console.log(this.dataForm)
    // console.log(this.dataForm?.errors?.passValidate)
  }
}
