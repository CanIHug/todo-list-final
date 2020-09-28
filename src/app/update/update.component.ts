declare var require: any

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
const Swal = require('sweetalert2');

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    public service: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  update(data) {
    this.service.updateStudent(data).subscribe(data => {
      this.router.navigateByUrl('/');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'Updated!',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }
}
