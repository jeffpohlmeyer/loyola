export type RouteType = {
    current: string;
    next: string | null;
    previous: string | null;
}

export const routes: RouteType[] = [
    {
        current: '/',
        next: '/loyola',
        previous: null
    },
    {
        current: '/loyola',
        next: '/post-loyola',
        previous: '/'
    },
    {
        current: '/post-loyola',
        next: '/njit',
        previous: '/loyola'
    },
    {
        current: '/njit',
        next: '/ace',
        previous: '/post-loyola'
    },
    {
        current: '/ace',
        next: '/new-york-life',
        previous: '/njit'
    },
    {
        current: '/new-york-life',
        next: '/metlife',
        previous: '/ace'
    },
    {
        current: '/metlife',
        next: '/am-best',
        previous: '/new-york-life'
    },
    {
        current: '/am-best',
        next: '/urbint',
        previous: '/metlife'
    },
    {
        current: '/urbint',
        next: '/arqu',
        previous: '/am-best'
    },
    {
        current: '/arqu',
        next: '/unknown',
        previous: '/urbint'
    },
    {
        current: '/unknown',
        next: null,
        previous: '/arqu'
    },
];