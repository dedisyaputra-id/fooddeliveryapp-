import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Home } from './home/home';
import { AppLayout } from './Layout/app-layout/app-layout';
import { Login } from './auth/login/login';
import { AuthLayout } from './Layout/auth-layout/auth-layout';
export const routes: Routes = [
    {
        path : "",
        component: AppLayout,
        children: [
            {
                path : "",
                component: Home
            },
            {
                path : "Products",
                component: Products
            },
        ]  
    },
    {
        path : "",
        component : AuthLayout,
        children : [
            {
                path : "Login",
                component : Login,
            }
        ]
    }
];
