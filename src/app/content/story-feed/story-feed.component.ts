import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../content/data.service';
import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css']
})
export class StoryFeedComponent implements OnInit {

  private _feed: Observable<number[]>;
  items$: Observable<any[]>;

  constructor(private db: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._feed = this.route.data.switchMap(data => {
      return this.db.getFeed(data.feed);
    });

    this.items$ = this._feed.map(ids => ids.slice(0, 30));
  }

}
