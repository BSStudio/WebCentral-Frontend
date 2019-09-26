import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input() video: VideoItem

  constructor() { }

  ngOnInit() {
  }

}

export interface VideoItem {
  title: string;
  snapshotUrl: string;
}