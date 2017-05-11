import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HistoricoService {

  http: Http;
  constructor(http: Http) {
    this.http = http;
   }


   getHistoricoSaldoCartao(codCartao: number){
     let url: string = 'https://ws-sppd.herokuapp.com/rest/sppd/cartao/getHistoricoCartao/web/'+codCartao;
     
     return this.http 
        .get(url)
        .map(res => res.json());         
   }

   getHistoricoViagem(codCartao: number){
     let url: string = 'https://ws-sppd.herokuapp.com/rest/sppd/viagens/getHistoricoViagemSite/'+codCartao;

     return this.http
        .get(url)
        .map(res => res.json());
   }

}
