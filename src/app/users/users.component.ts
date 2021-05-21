import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  totalPages: number[] = [];
  field: string = 'firstname';
  page = 0;
  size = 2;
  asc = true;
  isFirst = true;
  isLast = false;

  

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.loadUsers();
  }

  loadUsers(){
    this.userService.usuarios(this.page, this.size, this.field, this.asc).subscribe(
      data => {
        this.isFirst = data.first;
        this.isLast = data.last;
        this.users = data.content;
        this.totalPages = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  sort(): void{
    this.asc = !this.asc;
    this.loadUsers();
  }

  backward():void{
    if(!this.isFirst){
      this.page--;
      this.loadUsers();
    }
  }

  forward():void{
    if(!this.isLast){
      this.page++;
      this.loadUsers();
    }
  }

  setPage(page: number): void{
    this.page = page;
    this.loadUsers();
  }



}
