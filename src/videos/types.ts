import { User } from '../users/types'

export type Video = {
    type_of: string,
    id: number,
    path: string,
    cloudinary_video_url: string,
    title: string,
    user_id: number,
    video_duration_in_minutes: string,
    user: User,
}
