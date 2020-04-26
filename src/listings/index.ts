import qs from 'querystringify'

import { Base, Pagination } from '../base'
import { Listing, ListingCategory, NewListing, UpdateListing } from './types'

const resourceName = 'listings'

type SearchListingsParams = Pagination & {
    category?: ListingCategory,
}

export class Listings extends Base {
    getListings (params?: SearchListingsParams) {
        let query = resourceName
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Listing[]>(query)
    }

    getListingsByCategory (category: ListingCategory, params?: Pagination) {
        let query = `${resourceName}/category/${category}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Listing[]>(query)
    }

    getListing (id: number) {
        return this.request<Listing>(`${resourceName}/${id}`)
    }

    createListing (params: NewListing) {
        return this.request<Listing>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ classified_listing: params })
        })
    }

    updateListing (id: number, params?: UpdateListing) {
        return this.request<Listing>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ classified_listing: params })
        })
    }
}