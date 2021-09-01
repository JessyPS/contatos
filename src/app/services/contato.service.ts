import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [

    {
      nome:"Thommy Shelby",
      email: "florjess@teste.com",
      telefones: ["55555-5555","45787-1333", "78454-1216"],
    },
    {
      nome:"Groot",
      email: "florjess31@teste.com",
      telefones: ["32222-5555","54648-4511","48742-0000"]
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
      nome:"Poly Gray",
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

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[] {
    return BASE_DE_CONTATOS;
  }

  addContato(c:Contato):void {
    BASE_DE_CONTATOS.push(c)
  }
}
