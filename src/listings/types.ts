import { Organization } from '../articles/types'
import { User } from '../users/types'

export enum ListingCategory {
    cfp,
    forhire,
    collabs,
    education,
    jobs,
    mentors,
    products,
    mentees,
    forsale,
    events,
    misc,
}

export type NewListing = {
    title: string,
    body_markdown: string,
    category: ListingCategory,
    tags?: string[]
    tag_lis?: string,	
    expires_at?: string,
    contact_via_connect?: boolean,
    location?: string,
    organization_id?: string,
    action?: string,
}

export type UpdateListing = {
    title?: string,
    body_markdown?: string,
    category?: ListingCategory,
    tags?: string[]
    tag_lis?: string,	
    expires_at?: string,
    contact_via_connect?: boolean,
    location?: string,
    organization_id?: string,
    action?: string,
}

export type Listing = {
    type_of: string,
    id: number,
    title: string,
    slug: string,
    body_markdown: string,
    tag_list: string,
    tags: string[],
    category: ListingCategory,
    processed_html: string,
    published: boolean,
    user: User,
    organization?: Organization
}