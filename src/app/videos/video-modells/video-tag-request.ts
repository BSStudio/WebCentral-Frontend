
import { VideoTag } from './video-tag';

export class VideoTagRequest {
  videoTag: VideoTag;

  constructor(videoTag: VideoTag) {
    this.videoTag = videoTag;
  }
}
