import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SignService } from 'src/app/sevice/sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent  implements OnInit {

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  signForm!: FormGroup;

  unsubscribe$ = new Subject();

  constructor(private fb: FormBuilder, private service: SignService, private route: Router) {
    this.signForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get name(){
    return this.signForm.get('name')!
  }

  get password(){
    return this.signForm.get('password')!
  }

  ngOnInit(): void {}

  login = () => {
    let userName = this.name.value;
    let password = this.password.value;

    this.service.authenticate(userName, password).subscribe({
      next: () => this.route.navigateByUrl(`photos/${userName}`),
      error: () => {
        this.signForm.reset();
        this.input.nativeElement.focus();
      }
    })
  }

  ngOnDestroy(): void {
   this.unsubscribe$.unsubscribe();
  }
}
