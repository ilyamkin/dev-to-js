import qs from 'querystringify'

import { Base, Pagination } from '../base'
import { User } from '../users/types'

const resourceName = 'followers'

export class Followers extends Base {
    getFollowers (params?: Pagination) {
        let query = `${resourceName}/users`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<User[]>(query)
    }
}
