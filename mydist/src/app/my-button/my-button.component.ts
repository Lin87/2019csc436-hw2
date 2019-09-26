import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  isLiked:Boolean = false;

  constructor(private _myService: MyServiceService) { }

  ngOnInit() {
  }

  like() {
    this.isLiked = this._myService.likeImage(this.isLiked);
    console.log(this.isLiked);
  }

}
