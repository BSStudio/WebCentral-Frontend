import { Component, OnInit, Input } from '@angular/core';

import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent extends BaseComponent implements OnInit {
  @Input() video: VideoItem;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

export interface VideoItem {
  id: any;
  title: string;
  type: string;
  snapshotUrl: string;
}
