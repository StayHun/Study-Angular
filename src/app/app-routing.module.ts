import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { FormComponent } from './form/form.component';
import { ActiveComponent } from './active/active.component';
const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'dashboard', component: FatherComponent },
  { path: 'heroes', component: FormComponent },
  { path: 'active', component: ActiveComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }