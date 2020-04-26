import qs from 'querystringify'

import { Base, Pagination } from '../base'
import { Tag } from './types'

const resourceName = 'tags'

export class Tags extends Base {
    getTags (params?: Pagination) {
        let query = resourceName
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Tag[]>(query)
    }
}