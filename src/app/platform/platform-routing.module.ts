import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'platform',
    component: WrapperComponent,
    data: {
      title: 'Platform',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/platform/' + 'main'
      },
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      { path: 'main', component: MainComponent,
        data: {
          title: 'Main',
          redirectPath: '/main'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
