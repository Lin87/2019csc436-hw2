import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(boo:Boolean) {

    if (boo) {
      return false;
    }

    return true;

  }

}
