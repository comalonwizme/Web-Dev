/*
// Component input properties
import { Component, input } from "@angular/core";

@Component({
    selector: "app-user",
    template: `
        <p>
            This user's name is {{ name() }}!
        </p>
    `
})

export class User {
    readonly name = input<string>();
}
*/

/*
// Component output properties
import { Component, output } from "@angular/core";

@Component({
    selector: "child-app",
    styles:`
        .btn{
            padding: 5px;
            border-radius: 5px;
        }
    `,
    template:`
        <button class = "btn">
            Add item
        </button>
    `,
})

export class Child{
    readonly addItemEvent = output<string>();

    addItem(){
        this.addItemEvent.emit("okok");
    }
}

*/

/*
//Deferrable Views
import { Component } from "@angular/core";
@Component({
    selector: "comment-app",
    template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
    `,
})

export class Comments{

}
*/

/*
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <div>Username: {{ username }}</div> `,
})
export class User {
  username = 'youngTech';
}
*/

/*
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
*/

/*
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
*/

/*
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}
*/