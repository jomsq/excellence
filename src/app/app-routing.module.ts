import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; 
import { ProductsComponent } from './products/products.component'; 
import { ServicesComponent } from './services/services.component'; 
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomepageComponent },
  { path: "products", component: ProductsComponent },
  { path: "services", component: ServicesComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
