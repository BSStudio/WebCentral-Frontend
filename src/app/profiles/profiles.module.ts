import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileListItemComponent } from './profile-list-item/profile-list-item.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

import { MatDividerModule } from '@angular/material/divider'


@NgModule({
  declarations: [ProfileListItemComponent, ProfileListComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatDividerModule
  ]
})
export class ProfilesModule { }
