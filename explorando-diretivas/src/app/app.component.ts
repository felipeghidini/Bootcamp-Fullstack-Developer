import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'explorando-diretivas';
  count = 0;
  nome = 'Felipe  Ghidini';
  text: string = '';

  pessoas = [
    {
      nome: 'Felipe',
      sobrenome: 'Ghidini'
    },
    {
      nome: 'Amanda',
      sobrenome: 'Ghidini'
    },
    {
      nome: 'Eloah',
      sobrenome: 'Ghidini'
    },
    {
      nome: 'Rafael',
      sobrenome: 'Ghidini'
    },
  ]


  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome);
  }
}


