import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';


@NgModule({
  declarations: [ProfileListComponent, ProfileItemComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
