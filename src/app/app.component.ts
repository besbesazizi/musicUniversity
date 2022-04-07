import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDontNet';
  colors =['red','white','black','yellow'];
  login : string="login";
  isAth:boolean=false;

  chang(){
    confirm("test");
  }

  toggle(){
    this.isAth=!this.isAth;
    this.login=this.isAth?"login":"logout";

  }
}
