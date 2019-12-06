import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoListResponse } from './video-modells/video-list-response';
import { Video } from './video-modells/video';
import { Observable } from 'rxjs';
import { VideoResponse } from './video-modells/video-response';
import { VideoTypeListResponse } from './video-modells/video-type-list-response';

@Injectable()
export class VideoService{
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  getAllVideos(): Observable<VideoListResponse>{
    return this.http.get<VideoListResponse>("http://localhost:8080/wc/api/video/all")
  }

  getVideoById(id: String): Observable<VideoResponse>{
    return this.http.get<VideoResponse>("http://localhost:8080/wc/api/video/" + id)
  }

  getVideosByType(type: String): Observable<VideoListResponse>{
    return this.http.get<VideoListResponse>("http://localhost:8080/wc/api/video/all?type=" + type)
  }

  getRelatedVideos(id: String): Observable<VideoListResponse>{
    return this.http.get<VideoListResponse>("http://localhost:8080/wc/api/video/" + id + "/related")
  }

  getAllVideoTypes(): Observable<VideoTypeListResponse>{
    return this.http.get<VideoTypeListResponse>("http://localhost:8080/wc/api/video/type")
  }
  
}
