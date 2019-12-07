import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list/video-list-item/video-list-item.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatTabsModule, MatChipsModule, MatProgressSpinnerModule } from '@angular/material';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { RelatedListItemComponent } from './video-details/related-list-item/related-list-item.component';

@NgModule({
  declarations: [VideoListComponent, VideoListItemComponent, VideoDetailsComponent, RelatedListItemComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,

    FlexLayoutModule,

    // Material
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ]
})
export class VideosModule {

  constructor() { }

}
