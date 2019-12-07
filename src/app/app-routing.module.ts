import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosModule'
  },
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule'
  },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
