import { HistoricoCartaoComponent } from './historico/historico-cartao/historico-cartao.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { HitoricoViagemComponent } from './historico/hitorico-viagem/hitorico-viagem.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: SimuladorComponent },
    { path: 'historico-saldo-cartao', component: HistoricoCartaoComponent },
    { path: 'historico-viagem', component: HitoricoViagemComponent },
    { path: '**', component: SimuladorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);