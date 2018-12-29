import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



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
    private formBuilder: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = formBuilder.group({
      'email': [' ', [Validators.required, Validators.email]],
      'password': [' ', Validators.required]
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
    const credentials = this.authForm;
    console.log(credentials);
  }
}
