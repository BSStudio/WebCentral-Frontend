import { Component, OnInit, Input } from '@angular/core';

import { BaseComponent } from 'src/app/base/base.component';
import { Video } from '../../video-modells/video';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent extends BaseComponent implements OnInit {
  @Input() video: Video;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
