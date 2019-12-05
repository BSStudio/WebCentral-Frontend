import { Component } from '@angular/core';

@Component({
  selector: 'app-notinuse',
  template: ''
})
export class BaseComponent {

  get isLoggedIn(){
    return true;
  }

  get isAdmin(){
    return false;
  }

}
