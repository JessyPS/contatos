import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[]= [
    {
      nome:"Jessica Pereira",
      email: "florjess@teste.com",
      telefones: ["55555-5555"],
    },
    {
      nome:"Groot",
      email: "florjess31@teste.com",
      telefones: ["32222-5555"]
    },
    {
      nome:"Dr. Estranho",
      email: "florjess31@teste.com",
      telefones: ["44444-5555"]
    },
    {
      nome:"Cosima",
      email: "florjess31@teste.com",
      telefones: ["11111-5555"]
    },
    {
      nome:"João Nascimento",
      email: "florjess31@teste.com",
      telefones: ["99999-5555"]
    },
    {
      nome:"Fernanda Souza",
      email: "florjess31@teste.com",
      telefones: ["22222-5555"]
    },
    {
      nome:"Mariah Pereira",
      email: "florjess31@teste.com",
      telefones: ["48545-5555"]
    },
    {
      nome:"Bruna Pereira",
      email: "florjess31@teste.com",
      telefones: ["44848-5555"]
    },
    {
      nome:"Jessica Pereira",
      email: "florjess31@teste.com",
      telefones: ["31313-5555"]
    },
    {
      nome:"Jessica Pereira",
      email: "florjess31@teste.com",
      telefones: ["57842-5555"]
    },
    {
      nome:"Jessica Pereira",
      email: "florjess31@teste.com",
      telefones: ["335541-5555"]
    },
    {
      nome:"Jessica Pereira",
      email: "florjess31@teste.com",
      telefones: ["58755-5555"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
