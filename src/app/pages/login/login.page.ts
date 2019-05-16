import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from 'src/app/interface/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides
  public wavesPosition: number = 0;
  public wavesDifference: number = 80;
  public userLogin: User = {};
  public userRegister: User = {};


  constructor(public keyboard: Keyboard) { }

  ngOnInit() { }


  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }
  login() {

  }
  
  register() {
    console.log(this.userRegister);
  }

}
