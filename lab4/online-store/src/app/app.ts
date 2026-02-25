import { Component } from "@angular/core";
import { Header } from "./component-UI/header/header";
import { Main } from "./component-UI/main/main";
import { products } from "./products";
@Component({
  selector: "app-root",
  imports: [Header, Main],
  templateUrl: "app.html"
})

export class App{
  myProducts = products;
}