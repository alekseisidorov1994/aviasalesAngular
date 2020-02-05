import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WallPageComponent} from './pages/wall-page/wall-page.component';


const routes: Routes = [
  {path: '', component: WallPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
