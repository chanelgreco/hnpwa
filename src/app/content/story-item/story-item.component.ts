import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../content/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() itemId;
  item$: Observable<any>;

  constructor(private db: DataService) { }

  ngOnInit() {
    this.item$ = this.db.getItem(this.itemId);
  }

}
