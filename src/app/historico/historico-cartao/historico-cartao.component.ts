import { HistoricoService } from './../historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-cartao',
  templateUrl: './historico-cartao.component.html',
  styleUrls: ['./historico-cartao.component.css'],
})
export class HistoricoCartaoComponent implements OnInit {

  service: HistoricoService;

  historico = [];

  constructor(service: HistoricoService) { 
    this.service = service;
  }

  ngOnInit() {
  }

  getHistoricoSaldoCartao(codCartao){
    this.service.getHistoricoSaldoCartao(codCartao)
      .subscribe(historico => {
        this.historico = historico;
      });
  }

}
