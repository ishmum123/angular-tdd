import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimpleTextComponent} from './simple-text/simple-text.component';


const routes: Routes = [
  {path: 'simple-text', component: SimpleTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
