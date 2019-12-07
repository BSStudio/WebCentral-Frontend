import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/videos/video.service';
import { VideoTag } from 'src/app/videos/video-modells/video-tag';

@Component({
  selector: 'app-video-tag-create-form',
  templateUrl: './video-tag-create-form.component.html',
  styleUrls: ['./video-tag-create-form.component.css']
})
export class VideoTagCreateFormComponent implements OnInit {
  public newTag: VideoTag;
  @Input() reload;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.newTag = new VideoTag();
  }

  onSubmit() {
    this.videoService.sendNewTag(this.newTag)
      .subscribe(data => {
        console.log("Video tag created");
        this.reload();
      });
    this.newTag = new VideoTag();
  }

}
