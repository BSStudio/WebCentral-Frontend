import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: ':id',
    component: VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
