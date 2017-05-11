import { CartaoModule } from './../cartao/cartao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoService } from './historico.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoCartaoComponent } from './historico-cartao/historico-cartao.component';
import { HitoricoViagemComponent } from './hitorico-viagem/hitorico-viagem.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, CartaoModule
  ],
  declarations: [HistoricoCartaoComponent, HitoricoViagemComponent],
  exports: [HistoricoCartaoComponent],
  providers: [HistoricoService]
})
export class HistoricoModule { }
