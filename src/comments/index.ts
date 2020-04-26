import { Base } from '../base'
import { Comment } from './types'

const resourceName = 'comments'

export class Comments extends Base {
    getComment (commentId: string) {
        return this.request<Comment>(`${resourceName}/${commentId}`)
    }

    getComments (articleId: string) {
        return this.request<Comment[]>(`${resourceName}?a_id=${articleId}`)
    }
}
