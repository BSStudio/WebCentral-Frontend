import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  id: any;

  relatedVideos = [
    
    {
      id: 1,
      type: 'public',
      title: 'Gólya7 2019 - Vártúra',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 2,
      type: 'public',
      title: 'Ökörsütés 2019',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190915_okorsutes_lq.png'
    },
    {
      id: 3,
      type: 'private',
      title: 'I. Simonyi Félévzáró és Főzőverseny',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190529_fozoverseny_final_lq.png'
    },
    {
      id: 4,
      type: 'draft',
      title: 'Abstract design loooo ooo ooo ooooooooooooo',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    },
    {
      id: 5,
      type: 'private',
      title: 'Tech',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    },
    {
      id: 6,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    },
    {
      id: 6,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    },
    {
      id: 6,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    },
    {
      id: 6,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://via.placeholder.com/320x180'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
