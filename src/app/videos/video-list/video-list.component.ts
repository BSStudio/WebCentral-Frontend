import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  pictures = [
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
      title: '15. Simonyi születésnapi meglepetés videó',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 5,
      type: 'private',
      title: 'Gólyatábor 2018 - Reggeli torna és GólyaZH',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 6,
      type: 'public',
      title: 'Régi dallamok új köntösben S01E01 (Szandi - Nyugi doki)',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 7,
      type: 'public',
      title: 'Gondold újra! - környezettudatos programsorozat az Alleeban',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 8,
      type: 'public',
      title: 'Krampampuli',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 9,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 10,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 11,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 12,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    },
    {
      id: 13,
      type: 'public',
      title: 'Placeholder',
      snapshotUrl: 'https://v.bsstudio.hu/bss_vagott_web_16a9_HD/keyframe/20190913_vartura_dori_lq.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
