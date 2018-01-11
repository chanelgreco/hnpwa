import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryCommentComponent } from './story-comment/story-comment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UiModule } from '../ui/ui.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    AngularFireModule.initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com'}),
    AngularFireDatabaseModule
  ],
  declarations: [
    StoryFeedComponent,
    StoryItemComponent,
    StoryDetailComponent,
    StoryCommentComponent,
    UserDetailComponent
  ],
  providers: [DataService]
})
export class ContentModule { }
