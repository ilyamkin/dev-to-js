import { User } from '../users/types'

export type Comment = {
    type_of: string,
    id_code: string,
    body_html: string,
    user: User,
    children: Comment[],
}