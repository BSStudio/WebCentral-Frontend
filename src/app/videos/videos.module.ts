import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list/video-list-item/video-list-item.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatSidenavModule, MatTabsModule, MatChipsModule } from '@angular/material';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
  declarations: [VideoListComponent, VideoListItemComponent, VideoDetailsComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,

    FlexLayoutModule,

    // Material
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatChipsModule
  ]
})
export class VideosModule { }