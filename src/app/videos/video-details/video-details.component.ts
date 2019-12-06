import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '.././video-modells/video';
import { VideoService } from '../video.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent extends BaseComponent implements OnInit {
  id: any;
  video: Video;
  relatedVideos: Video[];

  constructor(
    private router: Router,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = this.route.snapshot.paramMap.get('id');
        this.video = undefined;
        this.relatedVideos = undefined;
        this.getVideo();
        this.getRelatedVideos();
      }
    )
  }

  getVideo() {
    this.videoService.getVideoById(this.id)
      .subscribe(
        data => {
          this.video = data.video;
        },
        err => console.error(err),
        () => console.log('received' + this.video)
      );
  }

  getRelatedVideos() {
    this.videoService.getRelatedVideos(this.id)
      .subscribe(
        data => {
          this.relatedVideos = [];
          for (let i = 0; i < data.videos.length; i++) {
            this.relatedVideos[i] = data.videos[i].video;
          }
        },
        err => console.error(err),
        () => console.log('received' + this.relatedVideos)
      );
  }

}
