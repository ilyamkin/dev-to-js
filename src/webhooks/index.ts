import { Base } from '../base'
import { Webhook, WebhookWithUser, NewWebhook } from './types'

const resourceName = 'webhooks'

export class Webhooks extends Base {
    getWebhooks () {
        return this.request<Webhook[]>(resourceName)
    }

    getWebhook (id: number) {
        return this.request<WebhookWithUser>(`${resourceName}/${id}`)
    }

    createWebhook (params: NewWebhook) {
        return this.request<WebhookWithUser>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ webhook_endpoint: params })
        })
    }

    deleteWebhook (id: number) {
        return this.request<void>(`${resourceName}/${id}`, {
            method: 'DELETE',
        })
    }
}
