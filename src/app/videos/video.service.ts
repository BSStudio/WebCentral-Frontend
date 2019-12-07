import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoListResponse } from './video-modells/video-list-response';
import { Observable } from 'rxjs';
import { VideoResponse } from './video-modells/video-response';
import { VideoTypeListResponse } from './video-modells/video-type-list-response';
import { VideoTagListResponse } from './video-modells/video-tag-list-response';
import { Video } from './video-modells/video';
import { VideoRequest } from './video-modells/video-request';
import { VideoTagResponse } from './video-modells/video-tag-response';
import { VideoTag } from './video-modells/video-tag';
import { VideoTagRequest } from './video-modells/video-tag-request';

@Injectable()
export class VideoService {
  private http: HttpClient;
  private baseUrl = 'http://localhost:8080/wc/api';

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  getAllVideos(): Observable<VideoListResponse> {
    return this.http.get<VideoListResponse>(this.baseUrl + '/video/all');
  }

  getVideoById(id: String): Observable<VideoResponse> {
    return this.http.get<VideoResponse>(this.baseUrl + '/video/' + id);
  }

  getVideosByType(type: String): Observable<VideoListResponse> {
    return this.http.get<VideoListResponse>(this.baseUrl + '/video/all?type=' + type);
  }

  getRelatedVideos(id: String): Observable<VideoListResponse> {
    return this.http.get<VideoListResponse>(this.baseUrl + '/video/' + id + '/related');
  }

  getAllVideoTypes(): Observable<VideoTypeListResponse> {
    return this.http.get<VideoTypeListResponse>(this.baseUrl + '/video/type');
  }

  getAllVideoTags(): Observable<VideoTagListResponse> {
    return this.http.get<VideoTagListResponse>(this.baseUrl + '/video/tag');
  }

  sendNewVideo(video: Video): Observable<VideoResponse> {
    const httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<VideoResponse>(this.baseUrl + '/video', JSON.stringify(new VideoRequest(video)), { headers: httpHeaders });
  }

  sendNewTag(videoTag: VideoTag): Observable<VideoTagResponse> {
    const httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<VideoTagResponse>(
      this.baseUrl + '/video/tag',
      JSON.stringify(new VideoTagRequest(videoTag)),
      { headers: httpHeaders }
    );
  }

  getBaseUrl(): String {
    return this.baseUrl;
  }
}
