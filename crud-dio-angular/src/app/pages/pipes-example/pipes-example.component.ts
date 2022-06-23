import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hello World!';
  date = new Date;
  pessoa = {
    nome: 'Felipe',
    idade: '33',
    profissao: 'Desenvolvedor'
  }
  nomes = ['Felipe'];

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor() {
    this.number = 123456789;
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
