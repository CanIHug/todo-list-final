declare var require: any

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
const Swal = require('sweetalert2');

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  constructor(
    private service: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  todos = {
    todo: '',
    when: '',
    where: '',
    time: '',
    status: 'pending'
  }

  addTodos() {
    this.service.add(this.todos).subscribe(data => {
      this.service.getTodos();
      this.router.navigate(['']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'successfully added',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
