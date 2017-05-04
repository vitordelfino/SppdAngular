import { routing } from './app.routes';
import { HistoricoModule } from './historico/historico.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import 'rxjs/add/operator/map';
import { EstacaoComponent } from './estacao/estacao.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    EstacaoComponent,
    SimuladorComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HistoricoModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
