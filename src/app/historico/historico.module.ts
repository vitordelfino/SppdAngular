import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoService } from './historico.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoCartaoComponent } from './historico-cartao/historico-cartao.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [HistoricoCartaoComponent],
  exports: [HistoricoCartaoComponent],
  providers: [HistoricoService]
})
export class HistoricoModule { }
