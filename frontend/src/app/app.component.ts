import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'sel-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao sistema de gestão de usuários!'

  constructor() { }

  ngOnInit() {
  }

}
