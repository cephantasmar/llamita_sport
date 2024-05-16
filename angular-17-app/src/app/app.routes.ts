import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path: 'home', component:HomeComponent },
    {path: 'pedidos', component:PedidosComponent },
    {path: 'contacto', component:ContactoComponent },
    {path: 'login', component:LoginComponent }
    
];
