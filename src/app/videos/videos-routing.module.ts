import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';

const routes: Routes = [
  {
    path:'',
    component:VideoListComponent
  },
  {
    path:'item',
    component:VideoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
