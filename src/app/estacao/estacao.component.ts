import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'estacao',
  templateUrl: './estacao.component.html',
  styleUrls: ['./estacao.component.css']
})
export class EstacaoComponent implements OnInit {

  estacoes = [];
  nome: string;
  url: string = 'http://localhost:8080/WebServiceSPPD/sppd/getListaEstacaoTeste';
  
  constructor(http: Http) {
     
     
    http = http;
    http.get(this.url)
      .map(res => res.json())
      .subscribe(estacoes => {
         this.estacoes = estacoes;
      }); 

   }

  ngOnInit() {
  }

}
