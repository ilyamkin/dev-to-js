import qs from 'querystringify'

import { Base, Pagination } from '../base'
import { Video } from './types'

const resourceName = 'videos'

export class Videos extends Base {
    getVideos (params?: Pagination) {
        let query = resourceName
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Video[]>(query)
    }
}
