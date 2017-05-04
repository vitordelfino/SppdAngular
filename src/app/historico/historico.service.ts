import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HistoricoService {

  http: Http;
  constructor(http: Http) {
    this.http = http;
   }


   getHistoricoCartao(codCartao: number){
     let url: string = 'http://localhost:8080/WebServiceSPPD/sppd/cartao/getHistoricoCartao/web/'+codCartao;
     
     return this.http 
        .get(url)
        .map(res => res.json()); 

        
   }

}
