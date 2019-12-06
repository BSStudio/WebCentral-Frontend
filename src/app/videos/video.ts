import { VideoType } from './video-type'
import { VideoTag } from './video-tag';

export class Video{
    id: number;
    videoType: VideoType;
    videoTags: VideoTag[];
    longName: string;
    canonicalName: string;
    projectName: string;
    description: string;
    visible: boolean;
    archived: boolean;
    videoLocation: string;
    imageLocation: string;
}