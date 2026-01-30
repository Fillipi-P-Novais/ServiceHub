import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
export const index = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
index.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return index.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
index.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
index.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
const indexForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
indexForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::index
* @see app/Http/Controllers/TicketController.php:13
* @route '/projects/{project}/tickets'
*/
indexForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
export const create = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/tickets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
create.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return create.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
create.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
create.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
const createForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
createForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::create
* @see app/Http/Controllers/TicketController.php:24
* @route '/projects/{project}/tickets/create'
*/
createForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\TicketController::store
* @see app/Http/Controllers/TicketController.php:56
* @route '/projects/{project}/tickets'
*/
export const store = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/projects/{project}/tickets',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TicketController::store
* @see app/Http/Controllers/TicketController.php:56
* @route '/projects/{project}/tickets'
*/
store.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return store.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::store
* @see app/Http/Controllers/TicketController.php:56
* @route '/projects/{project}/tickets'
*/
store.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TicketController::store
* @see app/Http/Controllers/TicketController.php:56
* @route '/projects/{project}/tickets'
*/
const storeForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TicketController::store
* @see app/Http/Controllers/TicketController.php:56
* @route '/projects/{project}/tickets'
*/
storeForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
export const show = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/tickets/{ticket}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
show.url = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            project: args[0],
            ticket: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
        ticket: typeof args.ticket === 'object'
        ? args.ticket.id
        : args.ticket,
    }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
show.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
show.head = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
const showForm = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
showForm.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TicketController::show
* @see app/Http/Controllers/TicketController.php:83
* @route '/projects/{project}/tickets/{ticket}'
*/
showForm.head = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const tickets = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
}

export default tickets