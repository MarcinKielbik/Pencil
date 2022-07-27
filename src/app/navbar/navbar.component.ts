import { Component, ElementRef, HostListener,OnInit } from '@angular/core';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  downloadTxt() {
    const data: string = 'Is not yet working :/';
    const blob = new Blob([data],
    {type: "text/plain; charset=utf-8"});
    saveAs(blob, "save-me.txt");
  }
  makeBold() {
    document.execCommand('bold');
  }
  
  makeCut() {
    document.execCommand('cut'); 
  }

  makeItalic() {
        document.execCommand('italic'); 

  }

  makeunderline() {
    document.execCommand('underline');
  }

  copy() {
    document.execCommand('copy');
  }

  paste() {
    document.execCommand('paste');
  }

  removeFormat() {
    document.execCommand('removeFormat');
  }
}
