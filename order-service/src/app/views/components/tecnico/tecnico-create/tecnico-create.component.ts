import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome:'Davi',
    cpf:'678.520.570-04',
    telefone: '(00) 91111-0000'
  }

  constructor(
    private router : Router,
    private service: TecnicoService
     ) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['tecnicos'])
  }

  create():void{
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Tecnico criado com sucesso!')
    }, err => {
      console.log(err)
      if(err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error)
      }
    })
  }

}
