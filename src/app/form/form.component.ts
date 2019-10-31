import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  msg = 'father data';
  sonMsg: string;
  constructor() { }

  ngOnInit() {
  }

  parentRun() {
    console.log('这是父组件的 run 方法');
  }

  runParent(msg: string) {
    console.log(msg);
    this.sonMsg = msg;
  }
}
