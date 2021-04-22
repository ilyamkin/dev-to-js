import qs from 'querystringify'
import { Article, SearchArticlesParams, NewArticle } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'articles'

export class Articles extends Base {
    getArticles (params?: SearchArticlesParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Articles[]>(query)
    }

    getArticle (id: number) {
        return this.request<Article>(`${resourceName}/${id}`)
    }

    getArticleByPath (username: string, slug: string) {
        return this.request<Article>(`${resourceName}/${username}/${slug}`)
    }

    getMyArticles (params?: Pagination) {
        let query = `${resourceName}/me`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Article[]>(query)
    }

    getMyPublishedArticles (params?: Pagination) {
        let query = `${resourceName}/me/published`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Article[]>(query)
    }

    getMyUnpublishedArticles (params?: Pagination) {
        let query = `${resourceName}/me/unpublished`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Article[]>(query)
    }

    getMyAllArticles (params?: Pagination) {
        let query = `${resourceName}/me/all`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Article[]>(query)
    }

    createArticle (params: NewArticle) {
        return this.request<Article>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ article: params })
        })
    }

    updateArticle (id: number, params?: NewArticle) {
        return this.request<Article>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ article: params })
        })
    }
}
