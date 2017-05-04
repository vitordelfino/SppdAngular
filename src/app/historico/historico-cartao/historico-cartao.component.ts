import { HistoricoService } from './../historico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-historico-cartao',
  templateUrl: './historico-cartao.component.html',
  styleUrls: ['./historico-cartao.component.css']
})
export class HistoricoCartaoComponent implements OnInit {

  service: HistoricoService;

  codCartao: number;

  meuForm: FormGroup;

  historico = [];
  constructor(service: HistoricoService, fb: FormBuilder) { 
    this.service = service;   

    this.meuForm = fb.group({
      cartao: ['', Validators.compose(
        [ Validators.required, Validators.minLength(6) ]
        )]
    });

  }

  ngOnInit() {
  }

  getHistoricoCartao(event){

    event.preventDefault();

    this.service.getHistoricoCartao(this.codCartao)
      .subscribe(historico => {
        this.historico = historico;
      });
  }

}
