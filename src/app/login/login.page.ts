import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginCredential } from '../types';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;
  private  handlerMessage = '';
  public toastButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
       this.handlerMessage = 'Dismiss';
     },
    }
  ];
  constructor(
    private _toastController: ToastController,
    private _router: Router,
    private _loginService: LoginService,
    formBuilder: FormBuilder
  ) { 
    this.loginFormGroup = formBuilder.group({
       email: ["",[Validators.required]],
       password: ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(){
   
    const loginCredentials: LoginCredential = this.loginFormGroup.value;
    this._loginService.login(loginCredentials)
    .then((authData) => {
        this._router.navigate(["/tabs"]);
        console.log(authData);
    })
    .catch((authError)=>{
       const toast =    this._toastController.create({
          message: "User or Password are invalid !!", 
          duration: 5500, 
          position: "top",
          buttons: this.toastButtons
      });
      toast.then((toastMessage)=>{
        toastMessage.present();
      });
      console.log("Auth Error => ", authError);
    });

    
  }

}
