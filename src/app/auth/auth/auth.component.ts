import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title: string = '';
  authType: string = '';
  authForm: FormGroup;
  isSubmitting: boolean;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private myRoute: Router,
    private auth: AuthService
  ) {
    // use FormBuilder to create a form group
    this.authForm = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.authType === 'register' && this.authForm.addControl('userName', new FormControl('', Validators.required));
    });
  }

  submitForm(): void {
    this.isSubmitting = true;
    if (this.authForm.valid) {
      this.auth.sendToken(this.authForm.value.email);
      this.myRoute.navigate(['home']);
    } else {
      this.auth.sendToken('');
    }
  }
}
