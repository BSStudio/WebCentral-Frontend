import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/videos/video.service';
import { Video } from 'src/app/videos/video-modells/video';
import { VideoType } from 'src/app/videos/video-modells/video-type';
import { VideoTag } from 'src/app/videos/video-modells/video-tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-create-form',
  templateUrl: './video-create-form.component.html',
  styleUrls: ['./video-create-form.component.css']
})
export class VideoCreateFormComponent implements OnInit {
  @Input() videos: Video[];
  @Input() videoTypes: VideoType[];
  @Input() videoTags: VideoTag[];
  @Input() reload;

  public newVideo: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.newVideo = new Video();
    this.newVideo.visible = true;
  }

  onSubmit() {
    this.videoService.sendNewVideo(this.newVideo)
      .subscribe(data => {
        console.log("Video created");
        this.reload();
      });
    this.newVideo = new Video();
    this.newVideo.visible = true;
  }
}
