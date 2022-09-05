import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: Todo[]= [
    {
      id: 1, 
      title: 'Tarea de ejemplo', 
      done: false, 
      date: new Date('4-15-2020')
    }
  ];

  constructor() { }

  add(title: string){
    let id = this.tasks.length + 2;
    this.tasks.push(
      {
        id, 
        title: title, 
        done: false, 
        date: new Date()
      });
  }

  delete(item) {
    let index = this.tasks.indexOf(item);
    this.tasks.splice(index, 1);
    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

}
