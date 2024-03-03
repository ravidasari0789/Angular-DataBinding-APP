import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databindingapp';

  firname:String="Ravi";
  number1:number=1234;
  number2:number=456;

  message:string="";
    public isdisable="false";
  lastname:string="dasari"
  
display(){

  this.firname="ravi dasari";
}
add(){

  this.message="";
}
addfullname(){
   
  this.firname+this.lastname;
}
  
}
