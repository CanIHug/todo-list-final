declare var require: any

import { Component, OnInit } from '@angular/core';
import { Todos } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { Router } from '@angular/router';
const Swal = require('sweetalert2');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos$: Todos[];

  constructor(
    public service: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.service.getTodos().subscribe((data: Todos[]) => {
      this.todos$ = data;
    });
  }

  edit(data) {
    this.router.navigate(['/update']);
    this.service.todoData = Object.assign({}, data);
  }

  del(id: number) {
    Swal.fire({
      text: "Are you sure?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.del(id).subscribe(data => {
          this.getAllTodos();
        })
        Swal.fire(
          'Deleted!'
        )
      }
    })
  }

  done(id: number) {
    Swal.fire({
      title: "Are you done?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I am'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.done(id).subscribe(data => {
          this.getAllTodos();

        })
        Swal.fire(
          'Great!'
        )
      }
    })
  }

  undo(id: number) {
    this.service.undo(id).subscribe()
    this.getAllTodos();
  }
}
