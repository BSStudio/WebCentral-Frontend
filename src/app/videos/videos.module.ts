import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [VideoListComponent, VideoItemComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,

    // Material
    MatCardModule,
    MatIconModule
  ]
})
export class VideosModule { }
