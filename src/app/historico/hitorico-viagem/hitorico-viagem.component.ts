import { HistoricoService } from './../historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hitorico-viagem',
  templateUrl: './hitorico-viagem.component.html',
  styleUrls: ['./hitorico-viagem.component.css']
})
export class HitoricoViagemComponent implements OnInit {

  service: HistoricoService;

  historico = [];

  constructor(service: HistoricoService) {
    this.service = service;
  }

  ngOnInit() {
  }

  getHistoricoViagem(codCartao){
    this.service.getHistoricoViagem(codCartao)
      .subscribe(historico => {
        this.historico = historico;
      });
  }

}
