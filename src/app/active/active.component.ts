import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  // formModel: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  // formModel = new FormGroup({
  //   username: new FormControl('jjj'),
  //   mobile: new FormControl(),
  //   passwordsGroup: new FormGroup({
  //     password: new FormControl(),
  //     pconfirm: new FormControl()
  //   })
  // });

  formModel = this.fb.group({
    username: ['', Validators.required],// Validators.required判断是否为空
    mobile: [''],
    passwordsGroup: this.fb.group({
      password: [''],
      pconfirm: ['']
    })
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel);
    console.log(this.formModel.value);
  }
// patchValue用法
  editData(){
    // 只改一个值的时候，用patchValue
    this.formModel.patchValue({
      username: 'Alex'
    })
    console.log(this.formModel);
  }
// setValue用法（改变所有）
  editAll(){
    this.formModel.setValue({
      username: 'Kate',
      mobile: '12345678912',
      passwordsGroup: {
        password: '123',
        pconfirm: '123'
      }
    })
    console.log(this.formModel);
  }
}
