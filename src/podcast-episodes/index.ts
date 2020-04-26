import qs from 'querystringify'

import { Base, Pagination } from '../base'
import { PodcastEpisode } from './types'

const resourceName = 'podcast_episodes'

type SearchTagsParams = Pagination & {
    username?: string,
}

export class PodcastEpisodes extends Base {
    getPodcastEpisodes (params?: SearchTagsParams) {
        let query = resourceName
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<PodcastEpisode[]>(query)
    }
}