export type Asset = {
    original: string | null;
    webp: string | null;
}

export type Album = {
    id: number;
    name: string;
    url: string;
    cover: Asset;
    project?: Project;
}

export type Links = {
    name: string;
    icon: string | null;
    url: string;
}

export type PageResource<T> = {
    data: T[];
    meta: PageMeta;
}

export type Project = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    developer: string | null;
    publisher: string | null;
    release_date: string | null;
    bandcamp_embed_url: string | null;
    soundcloud_embed_url: string | null;
    youtube_embed_url: string | null;
    quote: string | null;
    quote_author: string | null;
    links: Links[] | null;
    albums?: Album[];
    cover: Asset;
    banner: Asset;
    logo: Asset;
    show_logo: boolean;
}

export type PageMeta = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    path: string;
    links: {
        [key: number]: { url: string | null; label: string; active: boolean };
    }
}

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    env: string;
    location: string;
    route: string;
    isWebpSupported: boolean;
}
