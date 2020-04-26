type Podcast = {
    title: string,
    slug: string,
    image_url: string,
}

export type PodcastEpisode = {
    type_of: string,
    id: number,
    path: string,
    image_url: string,
    title: string,
    podcast: Podcast,
}
