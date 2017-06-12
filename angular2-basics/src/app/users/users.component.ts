import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
    selector: 'app-users',
    template: `
        <p>Estamos en el user comp </p>
        <button (click)="showInfo=true">Show Info</button>
        <button (click)="onShowAlert()">Show Alert</button>
        <p *ngIf="showInfo">Mas Info</p>
        <p *ngFor="let user of users">{{user}}</p>
        <p [ngStyle]="{'background-color':color}">En verde!</p>
    `
})

export class UsersComponent implements OnInit {
      constructor(private usersService:UsersService) { 
    this.users= usersService.getUsers();
  }
  users:any[];
    showInfo=false;
    color='green';
    //@Input() users:any;
    //@Input() users:any;
    @Output() alertThrown= new EventEmitter<string>();
    ngOnInit() { }
    onShowAlert(){
        this.alertThrown.emit('This is my message');
    }
}