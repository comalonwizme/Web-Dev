import {Component} from "@angular/core";
/* 
// Components in Angular
@Component({
  selector: "app-root",
  template: `Hello Universe`,
  styles: [`
    :host{
      color: #a144eb
    }
    `
  ]
})

export class App{};

*/
/*
// Updating the Component Class 
@Component({
  selector: "app-root",
  template:  `Hello {{city}},  {{ 1 + 1 }}`,
})

export class App{
  city = "San Francisco"
};
*/

// Composing Components
/*
@Component({
  selector: "app-user",
  template: "Username - {{username}}"
})
export class User{
  username = "comalonwizme"
}
@Component({
  selector: "app-root",
  template:  `
  <section>
    <app-user/>
  </section>
  `,
  imports: [User]
})

export class App{};
*/
/*
//Control Flow in Components - @if
@Component({
  selector: "app-root",
  template:`
    @if(isLogIn){
      <span>
        Hello my brother!
      </span>
    }
    @else{
      <span>
        Goodbye my brother!
      </span>
    }
  `
})
export class App{
  isLogIn = true
}
*/

/*
//Control Flow in Components - @for
@Component({
  selector: "app-root",
  template: `
    @for(user of users; track user.id){
      <p>{{user.name}}</p>
    }
  `
})

export class App{
  users = [
    {id: 0, name: "Abilmansur"},
    {id: 1, name: "Nurdaulet"},
    {id: 2, name: "Yerkenur"},
    {id: 3, name: "Mansur"},
    {id: 4, name: "..."}
  ]
}
*/
/*
//Property Binding
@Component({
  selector: "app-root",
  styleUrls: ['app.css'],
  template:`
    <div [contentEditable] = "checker"></div>
  `
})

export class App{
  checker = true
}
  */

/*
//Event handling
@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
    <button (click) = "showSecretMessage2()">
      There's a secret message2 for you, hover to reveal:
      {{ message2 }}
    </button>
  `
})
export class App {
  message = '';
  message2 = "";
  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
  showSecretMessage2(){
    this.message2 = "Goodbye!";
  }
}
*/

/*
// Component input properties
import {User} from "./user";
@Component({ 
  selector: "app-root",
  template: `
    <app-user name = "comalonwizme"></app-user>
  `,
  imports: [User]
})
export class App{}
*/

/*
// Component output properties
import { Child } from "./user";

@Component({
  selector: "app-root",
  template: `
    <child-app (addItemEvent)="addItem($event)" />
    <p>
      OK all the way down {{items.length}}
    </p>
  `,
  imports: [Child],
})

export class App{
  items = new Array();

  addItem(item: string){
    this.items.push(item);
  }
}
*/

/*
//Deferrable Views
import {Comments} from "./user";

@Component({
  selector: "app-root",
  template:`
  <div>
    <h1>
      How I feel about Angular
    </h1>
    <article>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
  </p>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
  </p>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted.
  </p>
</article>
    @defer(on viewport){
      <comment-app />
    }
    @placeholder{
      <p>
        Future Comments
      </p>
    }
    @loading(minimum 2s){
      <p>
        Loading Comments...
      </p>
    }
  </div>
  `,
  imports: [Comments],
})
export class App{}
*/

/*

//
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}

*/

/*
import {Routes} from '@angular/router';

export const routes: Routes = [];


import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class App {}
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
*/
/*
@Component({
  selector: "app-home",
  template: `
    <div>
      Home Page
    </div>
  `,
})

export class App{};

*/
/*
import {RouterOutlet, RouterLink} from '@angular/router';
@Component({
  selector: "app-root",
  template:`
  <nav>
    <a routerLink="/">Home</a> | <a routerLink="./user">Page</a>
  </nav>
  <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink]
})
export class App{};
*/

/*

import { FormsModule, NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
  <p>
    Username: {{username}}
  </p>
  <p>
    {{username}}'s favorite framework: {{fav_framework}}
  </p>
  <label for="framework">
    Favorite Framework:
    <input id="framework" type="text" [(ngModel)] = "fav_framework">
  </label>
  `,
  imports: [FormsModule]
})
export class App{
  username = "comalonwizme";
  fav_framework = "";
}

*/

/*
import { OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
  <p>
    Username: {{username}}
  </p>
  <p>
    Framework: {{fav_framework}}
  <p>
    Favorite Framework:
    <label for="framework">
      <input id = "framework" type="text" [(ngModel)] = "fav_framework" />
      <button (click) = "show_framework()">
        Show Framework
      </button>
    </label>
  </p>
  `,
  imports: [FormsModule]
})

export class App implements OnInit{
  username = "";
  fav_framework = "";
  ngOnInit(){
    if(typeof window !== "undefined"){
      this.username = window.prompt("Enter your name") ?? "";
    }
  }
  show_framework(){
    if(typeof window !== "undefined"){
      window.alert(this.fav_framework)
    }
  }
}
  */
/*
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
  <form [formGroup]="profileForm" (ngSubmit) = "subm()">
    <input type = "text" formControlName = "name" />
    <input type = "email" formControlName = "email" />
    <button type="submit">Submit</button>
  </form>
  <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})

export class App implements OnInit{
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })
  ngOnInit(){}
  subm(){
    if(typeof window !== "undefined"){
      window.alert(this.profileForm.value.name + " | " + this.profileForm.value.email);
    }
  }
}
*/

/*
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
*/

/*
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
  carService = inject(CarService);
}
*/

/*
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class App {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
*/

/*
import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
}

*/


/*
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
*/

/*
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}
*/