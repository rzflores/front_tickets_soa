import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './Layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './Layout/dashboard-layout/dashboard-layout.component';
import { UsersComponent } from './pages/users/users.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TicketsAllComponent } from './pages/tickets/tickets-all/tickets-all.component';
import { TicketsAssignedComponent } from './pages/tickets/tickets-assigned/tickets-assigned.component';
import { TicketsUnassignedComponent } from './pages/tickets/tickets-unassigned/tickets-unassigned.component';
import { TicketCommentsComponent } from './pages/tickets/ticket-comments/ticket-comments.component';

export const routes: Routes = [
    // { path : 'registro' , component: RegistroPageComponent },
    // { path : 'recuperar' , component: LoginPageComponent },
    { path : 'dashboard' , 
        component: DashboardLayoutComponent ,
        // canActivate: [AuthGuard],
        children : [
            { path: 'tickets-all', component: TicketsAllComponent  },
            { path: 'tickets-assigned', component:  TicketsAssignedComponent },
            { path: 'tickets-unassigned', component:  TicketsUnassignedComponent },
            { path: 'ticket-commets', component:  TicketCommentsComponent },
            { path: 'users', component:  UsersComponent },
            { path: 'departments', component: DepartmentsComponent },
            { path: 'categories', component:  CategoriesComponent },
        ]
    },
    { path : 'login' , component : LoginLayoutComponent },
    { path : '' , component : LoginLayoutComponent },
];