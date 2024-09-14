import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { SelfAppComponent } from './self-app/self-app.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"demo-1",
    loadChildren: ()=>{
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'demoFe',
        exposedModule: './DemoModule',
      }).then(m => m.DemoModule).catch(err => console.log("err-------------->",err));
    }
  },
  {
    path:"demo-same-app",
    component:SelfAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
