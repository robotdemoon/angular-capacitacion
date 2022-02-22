import { Injectable } from '@angular/core';
import {IUser} from "@data/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public contador = 1;
  public users: IUser[]  = [
    {name: 'Ivan', age: 20, birthDate: 660895200000, salary: 100000},
    {name: 'Juan', age: 11, birthDate: 661875200000, salary: 823992}
  ]

  increment() {
    this.contador = this.contador + 1;
    this.users.push({
      name: 'Pablo',
      age: 24,
      birthDate: 660898200000,
      salary: 100000
    })
  }

  get getUsers(): IUser[] {
    return  this.users;
  }
}
