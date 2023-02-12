import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent  implements OnInit {

  signForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get email(){
    return this.signForm.get('email')!
  }

  get password(){
    return this.signForm.get('password')!
  }

  ngOnInit(): void {
  }

}
