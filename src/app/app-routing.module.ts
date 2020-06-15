import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
path: 'pessoas',
loadChildren: () => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
},
{
path: 'anotacao',
loadChildren: () => import('./anotacao/anotacao.module').then(a=>a.AnotacaoModule)
},
{
path: 'login',
loadChildren: () => import('./login/login.module').then(l=>l.LoginModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
