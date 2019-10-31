import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  myName: string;
  myId: string;
  user: any;
  users: any;
  constructor() {
    this.user = {
      name: '张三',
      mobile: 13800138001,
      city: '北京',
      street: '朝阳望京...'
    };
    this.users = {
      name: '张三',
      mobile: 13800138001,
      address: {
        city: '北京',
        street: '朝阳望京...'
      }
    };
  }

  ngOnInit() {
  }

  show() {
    console.log(this.myName);
    console.log(this.myId);
  }

  callPhone(value) {
    console.log(value);
  }

  logForm(theForm) {
    console.log(theForm);
  }
}
