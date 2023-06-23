import { Component } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
   scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  letstalk(){
    window.scrollTo(0, document.body.scrollHeight);
  }

  downloadCV() {
    const fileUrl = 'src/assets\cv\sachin_resume.pdf';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'sachin-cv-file.pdf'; 
    link.click();
  }
}
