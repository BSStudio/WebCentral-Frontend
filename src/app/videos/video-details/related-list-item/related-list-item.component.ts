import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../video-modells/video';

@Component({
  selector: 'app-related-list-item',
  templateUrl: './related-list-item.component.html',
  styleUrls: ['./related-list-item.component.css']
})
export class RelatedListItemComponent implements OnInit {
  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
