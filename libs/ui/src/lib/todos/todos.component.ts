import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nrwl-workspace/data';
@Component({
  selector: 'nrwl-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
