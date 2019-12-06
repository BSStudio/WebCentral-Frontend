import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { VideoListResponse } from './VideoListResponse';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: Video[];

  constructor(private httpClient: HttpClient) { }

  getVideos(): Video[]{
    return this.httpClient.get<VideoListResponse>("http://localhost:8080/wc/api/video/all");
  }
}
