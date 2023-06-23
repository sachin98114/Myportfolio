import { Component } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  letstalk(){
    window.scrollTo(0, document.body.scrollHeight);
  }
}
