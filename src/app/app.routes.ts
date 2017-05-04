import { HistoricoCartaoComponent } from './historico/historico-cartao/historico-cartao.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: SimuladorComponent },
    { path: 'historico', component: HistoricoCartaoComponent },
    { path: '**', component: SimuladorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);