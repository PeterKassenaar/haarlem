// app.routes.ts
import {Routes} from '@angular/router';
import {authGuard} from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  // 1. On empty path, start on the home page.
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // 2. All routes in our application. They are lazy loaded,
  // due to loadComponent.
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component')
      .then(m => m.ProductsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    // In this path, also Child Routes are loaded. Question: can this be simplified?
    path: 'customers',
    loadComponent: () => import('./components/customers/customers.component')
      .then(m => m.CustomersComponent),
    loadChildren: () => import('./components/customers/customers.routes')
      .then(m => m.CUSTOMERS_ROUTES)
  },
  {
    // No match? Redirect to home page.
    // You can also create a FileNotFoundComponent with more information...
    path: '**',
    redirectTo: 'home'
  }
];
