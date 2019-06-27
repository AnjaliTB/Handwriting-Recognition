import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string;
  password:string;
  reppass:string;
constructor(public navCtrl:NavController){

}
login(){
  console.log("Username"+this.username);
  console.log("Password"+this.password);
  console.log("Repeat Password"+this.reppass);
  if(this.username=='anju' && this.password=='anju')
    console.log("Login successful");
  else
    console.log("Login unsuccessful");

}
//goRegister(){
  //this.navCtrl.navigateForward('./register/register.page.html');
//}
}
