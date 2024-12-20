import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AuthService } from '../services/auth.service';
import { DataSharedService } from '../../common/services/DataShared.service';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    MenubarModule, 
    BadgeModule,
    AvatarModule, 
    InputTextModule, 
    RippleModule, 
    MenuModule,
    CommonModule,
    ToastModule,
    ButtonModule,
    SpeedDialModule,
    RouterModule,
    CardModule
  ],
  providers: [MessageService],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent implements OnInit {
  itemsProfile: MenuItem[] | undefined;
  itemsMenu: MenuItem[] | undefined;
  isViewDashboard : boolean = true;
  token : string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private dataShared: DataSharedService

  ) {
    this.token = localStorage.getItem('token') ?? ''
    this.authService.getUserData(this.token).subscribe({
      next : (res) => {
         this.dataShared.setUsuario(res);
      }
    })
  }

  ngOnInit(): void { 
    this.itemsProfile = [
      { label: 'Nombre Usuario', icon: '', command: () => null },
      { label: 'Profile', icon: 'pi pi-user', command: () => this.onProfile() },
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() }
    ];

    this.itemsMenu = [
          {
              label: 'Tickets',
              items: [
                  {
                      label: 'Asignados',
                      icon: 'pi pi-plus-circle',
                      command: () =>  { 
                          this.isViewDashboard = false 
                          this.router.navigate(['/dashboard/tickets-assigned']) }
                  },
                  {
                    label: 'No asignados',
                    icon: 'pi pi-times-circle',
                    command: () =>  {
                          this.isViewDashboard = false 
                          this.router.navigate(['/dashboard/tickets-unassigned']) }
                  },
                  {
                      label: 'Todos',
                      icon: 'pi pi-search',
                      command: () => {
                          this.isViewDashboard = false 
                          this.router.navigate(['/dashboard/tickets-all']) }
                  },
              ]
          },
          {
              label: 'Configuración',
              items: [
                  {
                      label: 'Usuarios',
                      icon: 'pi pi-users',
                      command: () =>  {
                        this.isViewDashboard = false 
                        this.router.navigate(['/dashboard/users'])
                      }
                  },
                  {
                      label: 'Departamentos',
                      icon: 'pi pi-building',
                      command: () => {
                        this.isViewDashboard = false 
                        this.router.navigate(['/dashboard/departments'])}
                  },
                  {
                    label: 'Categorias',
                    icon: 'pi pi-bars',
                    command: () => { 
                        this.isViewDashboard = false 
                        this.router.navigate(['/dashboard/categories'])
                      }
                  }
              ]
          }
    ];
  
  }

  

  onProfile() {
    console.log('Profile clicked');
    // Acción adicional para el perfil
  }

  onSettings() {
    console.log('Settings clicked');
    // Acción adicional para configuraciones
  }

  onLogout() {

    this.authService.logout(localStorage.getItem('token') ?? '').subscribe(
      {
        next: (res) => {
          if(res.token){
            
            
          }
          
        },
        error: (err) => {
          localStorage.removeItem( 'token')
          this.router.navigate([
            '/login'
          ])
        },
        complete:() => {
         
        }

      }
    )

   
  }

  onDashboard(){
    this.router.navigate([
      '/dashboard'
    ])
    this.isViewDashboard = true
  }

}
