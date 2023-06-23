import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sixthpage',
  templateUrl: './sixthpage.component.html',
  styleUrls: ['./sixthpage.component.css']
})
export class SixthpageComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  getdata() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.myForm.reset();
    }
  }
  openWhatsAppChat(){
    var phoneNumber = "7079717726";
    window.open("https://wa.me/" + phoneNumber, "_blank");
  }
  openEmailChat(){
    var emailAddress = "sachinkumar98114@gmail.com";
  window.open("mailto:" + emailAddress, "_blank");
  }
}
