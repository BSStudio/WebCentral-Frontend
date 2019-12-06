import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { Video } from '../video-modells/video';
import { VideoService } from '../video.service';
import { VideoType } from '../video-modells/video-type';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
@Injectable()
export class VideoListComponent implements OnInit {
  public types: VideoType[];
  public videos: Video[][] = [];
  public selectedIndex: 0;

  constructor(private videoService: VideoService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllVideoTypes();
  }

  getAllVideoTypes() {
    console.log('get video types ' + this.videos);
    this.videoService.getAllVideoTypes()
      .subscribe(
        data => {
          this.types = [];
          for (let i = 0; i < data.videoTypes.length; i++) {
            this.types[i] = data.videoTypes[i].videoType;
          }
        },
        err => console.error(err),
        () => {
          console.log('received' + this.types);
          this.types.forEach((type, index) => {
            this.getVideoByType(index);
          })
        }
      );
  }

  getVideoByType(index: number) {
    console.log('get video by type - index: ' + index);
    this.videos[index] = undefined;
    this.videoService.getVideosByType(this.types[index].canonicalName)
      .subscribe(
        data => {
          this.videos[index] = [];
          for (let i = 0; i < data.videos.length; i++) {
            this.videos[index][i] = data.videos[i].video;
          }
        },
        err => console.error(err),
        () => console.log('received' + this.videos[index])
      );
  }

  /*
  getAllVideos() {
    this.videoService.getAllVideos()
      .subscribe(
        data => {
          for (let i = 0; i < data.videos.length; i++) {
            data.videos[i] = data.videos[i].video;
          }
          this.videos = data.videos;
        },
        err => console.error(err),
        () => console.log('received' + this.videos)
      );
  }
  */
}
