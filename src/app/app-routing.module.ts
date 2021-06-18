import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';
import { BusinessComponent } from './pages/business/business.component';

const routes: Routes = [
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'business/:id' , component: BusinessComponent},
  { path: '**', redirectTo: 'affiliate' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
