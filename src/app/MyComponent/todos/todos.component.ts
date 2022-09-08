import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
      this.todos = [
        {
          sno: 1,
          title: "This is Title",
          desc: "Descript",
          active: true
        },
        {
          sno: 2,
          title: "This is Title",
          desc: "Descript",
          active: true
        },
        {
          sno: 3,
          title: "This is Title",
          desc: "Descript",
          active: true
        }
      ]
   }

  ngOnInit(): void {
  }

}
