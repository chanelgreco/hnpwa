import { Component, OnInit } from '@angular/core';
import { DataService } from '../../content/data.service';
import { Router, ActivatedRouter, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {

  item$;
  comments$;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = this.data.getItem(id);
  }

}
