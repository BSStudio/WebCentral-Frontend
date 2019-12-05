import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related-list-item',
  templateUrl: './related-list-item.component.html',
  styleUrls: ['./related-list-item.component.css']
})
export class RelatedListItemComponent implements OnInit {
  @Input() video: RelatedVideo;

  constructor() { }

  ngOnInit() {
  }

}

export interface RelatedVideo{
  id: any;
  title: string;
  type: string;
  snapshotUrl: string;
}
