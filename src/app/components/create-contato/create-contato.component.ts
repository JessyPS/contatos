import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  } 

  cs:ContatoService = new ContatoService();

  constructor() { }
  
  cancelar(){
    console.log("Pedindo pra cancelar")
    this.onCancelarClick.emit();
  }
 
  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

  addTelefone():void {
    console.log("Só vai!!!");
    this.novoContato.telefones.push("");
  }

  removeTelefone(pos:number):void {
    this.novoContato.telefones.splice(pos, 1);
  }

  salvar(){
    console.log("Enfim salvando");
    this.cs.addContato(this.novoContato);
    // Se quiser fazer a tela sumir depois de adicionar o contato
    // this.onCancelarClick.emit();   

    // Manter a tela e limpar os campos para a edição do novo contato
    this.novoContato ={
      nome:"",
      email:"",
      telefones:[""]
    }
  }
}
