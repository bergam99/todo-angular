import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  isShoppingSelected:boolean = false;
  isInscureSelected:boolean = false;
  isWorkSelected:boolean = false;
  isBrokedSelected:boolean = false;
  isCleanSelected:boolean = false;
  isAnotherSelected:boolean = false;


  newTask: string='';
  registerationForm! : FormGroup;
  task:any;

  constructor(
    private todoService: TodoService,
    private fb:FormBuilder
    ) {
      this.task = {};
      // this.newTask = '';

    }


  ngOnInit() {
    this.createRegisterationForm();
  }


  onSubmit() {
    console.log(this.registerationForm);
    this.task = Object.assign(this.task, this.registerationForm.value);
    localStorage.setItem('task', JSON.stringify(this.task.input));
    this.todoService.addTask(this.newTask);

    // this.addTask(this.task.input);
    this.todoService.addTask(this.task.input);
    // Reset the input value to an empty string
    // this.newTask = '';
    this.registerationForm.controls['input'].setValue('');

  }

  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      // type:[null, Validators.required],
      input:[null, Validators.required],
      urgent : [null, Validators.required]
    })
  }



}
