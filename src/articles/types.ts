import { User } from '../users/types'
import { Pagination } from '../base'
import { Tag } from '../tags/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchArticlesParams = Pagination & {
    state?: SearchState,
    tag?: string,	
    username?: string,	
    top?: number,
    collection_id?: number,
}

export type NewArticle = {
    title: string,
    body_markdown?: string,
    published?: boolean,
    series?: string,
    main_image?: string,
    canonical_url?: string,
    description?: string,
    tags?: string[],	
    organization_id?: number
}

export type Organization = {
    name: string,	
    username: string,
    slug: string,
    profile_image: string,
    profile_image_90: string,
}

export type Article = {
    type_of: string,
    id: Number,
    title: string,
    description: string,
    cover_image: string,
    readable_publish_date: string,
    social_image: string,
    tag_list: string,
    tags: Array<string>,
    slug: string,
    path: string,
    url: string,
    canonical_url: string,
    comments_count: Number,
    positive_reactions_count: Number,
    created_at: Date,
    edited_at: Date,
    crossposted_at: Date,
    published_at: Date,
    last_comment_at: Date,
    published_timestamp: Date,
    body_html: string,
    body_markdown: string,
    user: User,
    organization: Organization,
    flare_tag: Tag,
}