import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,HttpClientModule,DatePipe,NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  
})
export class TodoComponent implements OnInit {

  id:number=-1;
  todo:Todo=new Todo(this.id,'',false,new Date());
  constructor(private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
      
    this.id=this.route.snapshot.params['id'];

    //fire request to service only if it's not a new todo
    if(this.id!=-1){
    this.todoService.retrieveTodo('Nani',this.id).subscribe(
       data=>this.todo=data
    );
  }
  }

  saveTodo()
  {
    if(this.id==-1)// to create new todo
    {
       this.todoService.createTodo('Nani',this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
        }
       );
    }
    else //update existing one
    {
     this.todoService.updateTodo('Nani',this.id,this.todo).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']);
      }
     );
  }}
}
