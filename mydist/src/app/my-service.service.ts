import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(boo: boolean) {
    return !boo;
  }

}
