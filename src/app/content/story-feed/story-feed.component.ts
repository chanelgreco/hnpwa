import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../content/data.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css']
})
export class StoryFeedComponent implements OnInit {

  feed: Observable<number[]>;
  items$: Observable<any[]>;
  pages$: Observable<number>;
  currentPage$ = new BehaviorSubject(1);

  preload;

  constructor(private db: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.feed = this.route.data.switchMap(data => {
      return this.db.getFeed(data.feed);
    });

    this.pages$ = this.feed.map(arr => Math.floor(arr.length / 30) + 1);

    this.items$ = this.currentPage$.switchMap(page => {
      return this.feed.map(items => items.slice((page - 1) * 30, (page - 1) * 30 + 30));
    });
  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    this.currentPage$.next(this.currentPage$.value - 1);
  }

}
