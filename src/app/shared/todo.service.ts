import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  data: Todos;

  todoData: Todos = {
    id: null,
    todo: '',
    when: '',
    where: '',
    time: '',
    status: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  readonly todoUrl = 'http://localhost:3000/todos';

  getTodos() {
    return this.http.get<Todos[]>(this.todoUrl)
  }

  add(data) {
    return this.http.post(this.todoUrl, data)
  }

  edit(data) {
    return this.http.get(this.todoUrl, data)
  }

  updateStudent(todo: Todos){
    return this.http.put(this.todoUrl + "/" + todo.id, todo);
  }

  del(id: number) {
    return this.http.delete(this.todoUrl + '/' + id)
  }

  done(id: number) {
    return this.http.patch(this.todoUrl + '/' + id, {
      status: 'done'
    })
  }

  undo(id: number) {
    return this.http.patch(this.todoUrl + '/' + id, {
      status: 'pending'
    })
  }

}
