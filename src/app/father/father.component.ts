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
  active = true;
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
    //     在这个方法里，theForm就是ngForm的模板引用实例，类型是NgForm的。
    // 如果表单验证有失败，theForm.invalid就是false。
    // theForm.controls就是这个表单里的所有控件，如果想获取姓名的验证结果，就是theForm.controls['name'].errors。
    // 用这种方式，我们就可以在组件中获取所有表单控件的数据、验证状态、错误信息等。
  }

  reset() {
    this.user = { // 重置用户数据
      address: {}
    };
    this.active = false;
    setTimeout(() => this.active = true, 0);
    return false;
  }
}
