import { Base } from '../base'
import { User } from './types'

const resourceName = 'users'

export class Users extends Base {
    getCurrentUser () {
        return this.request<User>(`${resourceName}/me`)
    }

    getUser (id: number) {
        return this.request<User>(`${resourceName}/${id}`)
    }

    getUserByUsername (username: string) {
        return this.request<User>(`${resourceName}/by_username?url=${username}`)
    }
}
