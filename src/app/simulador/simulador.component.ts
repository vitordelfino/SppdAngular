import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  http: Http;
  estacoes = [];
  estacoesSimulador = [];


  url: string = 'https://ws-sppd.herokuapp.com/rest/sppd/getListaEstacaoTeste';
  url1: string = 'https://ws-sppd.herokuapp.com/rest/sppd/dijkstra/encontrarMenorCaminho/';

  constructor(http: Http){  
    this.http = http;

    http = http;
    http.get(this.url)
      .map(res => res.json())
      .subscribe(estacoes => {
         this.estacoes = estacoes;
      });        
         
  }

  ngOnInit() {
  }



  simular(event, origem, destino){
    event.preventDefault();

    //origem = this.getNomeEstacao(origem);
    //destino = this.getNomeEstacao(destino);

    this.http.get(this.url1+origem+'/'+destino)
      .map(res => res.json())
      .subscribe(estacoes => {
        this.estacoesSimulador = estacoes;
      });

  }


  getNomeEstacao(str: string){
    if(!(str.indexOf('-') == -1)){
      return str.replace(' ', '').replace(' ','');      
    }
    return str.replace(' ', '-');
  }
  
}
