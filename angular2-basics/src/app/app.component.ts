import { Component, ElementRef } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elementRef: ElementRef, private usersService:UsersService) { 
    this.users= usersService.getUsers();
  }
  title = 'app';
  users: any[];
  //registeredUsers:any = ['Diego','Marcelo','Chavez'];
  age = 39;
  person = {
    name: 'Diego',
    age: 39
  };
  getName() {
    return 'Pepe!';
  }

  verName() {
    console.log(this.person.name);
  }

  onChildAlert(message:string){
    alert(message);
  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    //s.innerHTML = "console.log('hola')";
    //https://stackoverflow.com/questions/34140065/script-tag-in-angular2-template-hook-when-template-dom-is-loaded
    //https://angular.io/docs/js/latest/api/core/index/ElementRef-class.html
    s.innerHTML = `var input= document.getElementById('edad');
      console.log('valor del atrib: '+ input.getAttribute('value'));`;
    //http://localhost:4200/?myParam=2
    //s.innerHTML = `var myParam = location.search.split('myParam=')[1];`
    //console.log(myParam);`;
    //s.innerHTML = "alert(document.cookie);";*/
    this.elementRef.nativeElement.appendChild(s);

  }
}
