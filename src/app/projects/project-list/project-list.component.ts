import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/videos/video-modells/video';
import { VideoService } from 'src/app/videos/video.service';
import { VideoType } from 'src/app/videos/video-modells/video-type';
import { VideoTag } from 'src/app/videos/video-modells/video-tag';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public videos: Video[];
  public videoTypes: VideoType[];
  public videoTags: VideoTag[];
  public loading: boolean;
  public reloadCallback: Function;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.reloadCallback = this.reload.bind(this);
    this.reload();
  }

  reload() {
    this.loading = true;
    this.getVideos();
    this.getVideoTypes();
    this.getVideoTags();
    this.loading = false;
  }

  getVideos() {
    this.videos = undefined;
    this.videoService.getAllVideos()
      .subscribe(
        data => {
          this.videos = [];
          for (let i = 0; i < data.videos.length; i++) {
            this.videos[i] = data.videos[i].video;
          }
        },
        err => console.error(err),
        () => console.log('received' + this.videos)
      );
  }

  getVideoTypes() {
    this.videoTypes = undefined;
    this.videoService.getAllVideoTypes()
      .subscribe(
        data => {
          this.videoTypes = [];
          for (let i = 0; i < data.videoTypes.length; i++) {
            this.videoTypes[i] = data.videoTypes[i].videoType;
          }
        },
        err => console.error(err),
        () => console.log('received' + this.videoTypes)
      );
  }

  getVideoTags() {
    this.videoTags = undefined;
    this.videoService.getAllVideoTags()
      .subscribe(
        data => {
          this.videoTags = [];
          for (let i = 0; i < data.videoTags.length; i++) {
            this.videoTags[i] = data.videoTags[i].videoTag;
          }
        },
        err => console.error(err),
        () => {
          console.log('received' + this.videoTypes);
        }
      );
  }

}
