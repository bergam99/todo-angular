import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/services/todo.service';
import { CategoryType } from '../../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  @ViewChild('myForm') myForm: any;
  categories = ['🛍️', '💊', '💼', '💸', '🧼', '🤷‍♀️'];
  task: ITodo = {
    id: 0,
    content: '',
    category: null,
    isUrgent: false,
    doneDate: null
  };

  constructor(private todoService: TodoService, private fb: FormBuilder) {}
  ngOnInit() {}

  onSubmit(): void {
    // Generate a unique ID for the task
    const taskId = new Date().getTime();

    // Set the ID and add the task to the service
    this.task.id = taskId;
    this.todoService.addTask(this.task);
    this.myForm.resetForm();

  }
}

  // ======================
  // isShoppingSelected: boolean = false;
  // isInscureSelected: boolean = false;
  // isWorkSelected: boolean = false;
  // isBrokedSelected: boolean = false;
  // isCleanSelected: boolean = false;
  // isAnotherSelected: boolean = false;

  // selectedIcon: string = '';
  // categories: string[] = [
  //   'category1',
  //   'category2',
  //   'category3',
  //   'category4',
  //   'category5',
  //   'category6',
  // ];

  // newTask: string = '';
  // registerationForm!: FormGroup;
  // task: any;
  // categoryForm!: FormGroup;

  // constructor(private todoService: TodoService, private fb: FormBuilder) {
  //   // propriété task est initialisée comme un objet vide. Cette propriété peut être utilisée pour stocker une tâche individuelle à ajouter à la liste de tâches.
  //   this.task = {};
  //   // this.newTask = '';

  //   this.registerationForm = this.fb.group({
  //     category: ['', Validators.required],
  //     input: ['', Validators.required],
  //     urgent: false,
  //   });


  // onSelect(icon: string): void {
  //   this.selectedIcon = icon;
  // }

  // onSubmit1(): void {
  //   localStorage.setItem('selectedIcon', JSON.stringify(this.selectedIcon));
  // }

  // ngOnInit() {
  //   this.createRegisterationForm();
  //   this.categoryForm = this.fb.group({
  //     // category:[''],
  //     category: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   console.log(this.registerationForm);
  //   // this.task 객체에 this.registrationForm.value 객체를 병합(merge)합니다. 이렇게 하면 this.task 객체는 폼 요소의 값을 포함하게 됩니다.
  //   this.task = Object.assign(this.task, this.registerationForm.value);
  //   // localStorage에 this.task.input 값을 JSON 문자열로 저장합니다. 이렇게 하면 사용자가 페이지를 새로고침하거나 브라우저를 닫고 다시 열어도 이 값을 유지할 수 있습니다.
  //   localStorage.setItem('task', JSON.stringify(this.task.input));
  //   // this.todoService의 addTask 메서드를 호출하여 this.task.input 값을 서비스에 추가합니다.
  //   this.todoService.addTask(this.task.input);

  //   // Reset the input value to an empty string
  //   this.newTask = '';

  //   const task: ITodo = {
  //     id: Date.now(),
  //     content: this.registerationForm.value.content,
  //     category: this.registerationForm.value.category,
  //     isUrgent: this.registerationForm.value.isUrgent,
  //     doneDate: null,
  //   };
  //   this.todoService.addTask(task);
  // }

  // // 메소드는 createRegistrationForm으로 정의되며, FormGroup 객체를 생성하고 해당 폼의 FormControl을 정의하는 데 사용됩니다. 이 메소드는 this.fb.group()을 사용하여 폼 그룹 객체를 생성합니다.
  // // 폼 그룹 객체는 폼의 모든 컨트롤의 논리적 그룹입니다. 이 경우, registerationForm은 FormGroup 객체를 할당받아, 폼의 모든 컨트롤을 논리적으로 그룹화합니다.

  // createRegisterationForm() {
  //   this.registerationForm = this.fb.group({
  //     // type:[null, Validators.required],
  //     input: [null, Validators.required],
  //     urgent: [null, Validators.required],
  //   });
  // }

  // setCategory(category: string) {
  //   this.categoryForm.controls['category'].setValue(category);
  //   this.todoService.setCategory(category);
  // }
// }
