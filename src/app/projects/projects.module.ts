import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideoCreateFormComponent } from './project-list/video-create-form/video-create-form.component';
import { FormsModule } from '@angular/forms';
import { VideoTagCreateFormComponent } from './project-list/video-tag-create-form/video-tag-create-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ProjectsRoutingModule,

    /* Angular Material */
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule
  ],
  declarations: [ProjectListComponent, VideoCreateFormComponent, VideoTagCreateFormComponent]
})
export class ProjectsModule { }
