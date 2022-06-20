import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Felipe Ghidini';
  imageUrl = 'http://picsum.photos/300/300'
  imageDesc = 'essa é uma imagem';
  buttonText = 'Clique aqui';
  textRed = true;
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    console.log('clicou aqui', value);
    this.textRed = true;
  }

  clicouNoFilho(text: any) {
    console.log(text);

  }
}
