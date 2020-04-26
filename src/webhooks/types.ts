import { User } from '../users/types'

export type NewWebhook = {
    source: string,
    target_url: string,
    events: string[],
}

export type Webhook = {
    type_of: string,
    id: number,
    source: string,
    target_url: string,
    events: string[],
    created_at: string,
}

export type WebhookWithUser = Webhook & {
    user: User,
}