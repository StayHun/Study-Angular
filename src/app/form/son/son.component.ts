import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() msg: string
  @Input() run: any; // 接收父组件传递过来的方法parentRun
  @Output() private outer = new EventEmitter<string>();

  sendParent() {
    this.outer.emit('msg from child'); // 广播传递数据给父组件
  }

  constructor() { }

  ngOnInit() {
    this.run();
  }

}
