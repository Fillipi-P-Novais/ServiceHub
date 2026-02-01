import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TicketController::index
 * @see app/Http/Controllers/TicketController.php:17
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
 * @see app/Http/Controllers/TicketController.php:17
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
 * @see app/Http/Controllers/TicketController.php:17
 * @route '/projects/{project}/tickets'
 */
index.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TicketController::index
 * @see app/Http/Controllers/TicketController.php:17
 * @route '/projects/{project}/tickets'
 */
index.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TicketController::index
 * @see app/Http/Controllers/TicketController.php:17
 * @route '/projects/{project}/tickets'
 */
    const indexForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TicketController::index
 * @see app/Http/Controllers/TicketController.php:17
 * @route '/projects/{project}/tickets'
 */
        indexForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TicketController::index
 * @see app/Http/Controllers/TicketController.php:17
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
 * @see app/Http/Controllers/TicketController.php:28
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
 * @see app/Http/Controllers/TicketController.php:28
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
 * @see app/Http/Controllers/TicketController.php:28
 * @route '/projects/{project}/tickets/create'
 */
create.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TicketController::create
 * @see app/Http/Controllers/TicketController.php:28
 * @route '/projects/{project}/tickets/create'
 */
create.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TicketController::create
 * @see app/Http/Controllers/TicketController.php:28
 * @route '/projects/{project}/tickets/create'
 */
    const createForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TicketController::create
 * @see app/Http/Controllers/TicketController.php:28
 * @route '/projects/{project}/tickets/create'
 */
        createForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TicketController::create
 * @see app/Http/Controllers/TicketController.php:28
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
 * @see app/Http/Controllers/TicketController.php:35
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
 * @see app/Http/Controllers/TicketController.php:35
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
 * @see app/Http/Controllers/TicketController.php:35
 * @route '/projects/{project}/tickets'
 */
store.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TicketController::store
 * @see app/Http/Controllers/TicketController.php:35
 * @route '/projects/{project}/tickets'
 */
    const storeForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TicketController::store
 * @see app/Http/Controllers/TicketController.php:35
 * @route '/projects/{project}/tickets'
 */
        storeForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TicketController::show
 * @see app/Http/Controllers/TicketController.php:58
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
 * @see app/Http/Controllers/TicketController.php:58
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
 * @see app/Http/Controllers/TicketController.php:58
 * @route '/projects/{project}/tickets/{ticket}'
 */
show.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TicketController::show
 * @see app/Http/Controllers/TicketController.php:58
 * @route '/projects/{project}/tickets/{ticket}'
 */
show.head = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TicketController::show
 * @see app/Http/Controllers/TicketController.php:58
 * @route '/projects/{project}/tickets/{ticket}'
 */
    const showForm = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TicketController::show
 * @see app/Http/Controllers/TicketController.php:58
 * @route '/projects/{project}/tickets/{ticket}'
 */
        showForm.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TicketController::show
 * @see app/Http/Controllers/TicketController.php:58
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
/**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
export const edit = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/tickets/{ticket}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
edit.url = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
edit.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
edit.head = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
    const editForm = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
        editForm.get = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TicketController::edit
 * @see app/Http/Controllers/TicketController.php:68
 * @route '/projects/{project}/tickets/{ticket}/edit'
 */
        editForm.head = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\TicketController::update
 * @see app/Http/Controllers/TicketController.php:78
 * @route '/projects/{project}/tickets/{ticket}'
 */
export const update = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/projects/{project}/tickets/{ticket}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TicketController::update
 * @see app/Http/Controllers/TicketController.php:78
 * @route '/projects/{project}/tickets/{ticket}'
 */
update.url = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::update
 * @see app/Http/Controllers/TicketController.php:78
 * @route '/projects/{project}/tickets/{ticket}'
 */
update.put = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\TicketController::update
 * @see app/Http/Controllers/TicketController.php:78
 * @route '/projects/{project}/tickets/{ticket}'
 */
    const updateForm = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TicketController::update
 * @see app/Http/Controllers/TicketController.php:78
 * @route '/projects/{project}/tickets/{ticket}'
 */
        updateForm.put = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\TicketController::destroy
 * @see app/Http/Controllers/TicketController.php:100
 * @route '/projects/{project}/tickets/{ticket}'
 */
export const destroy = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/projects/{project}/tickets/{ticket}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TicketController::destroy
 * @see app/Http/Controllers/TicketController.php:100
 * @route '/projects/{project}/tickets/{ticket}'
 */
destroy.url = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TicketController::destroy
 * @see app/Http/Controllers/TicketController.php:100
 * @route '/projects/{project}/tickets/{ticket}'
 */
destroy.delete = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TicketController::destroy
 * @see app/Http/Controllers/TicketController.php:100
 * @route '/projects/{project}/tickets/{ticket}'
 */
    const destroyForm = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TicketController::destroy
 * @see app/Http/Controllers/TicketController.php:100
 * @route '/projects/{project}/tickets/{ticket}'
 */
        destroyForm.delete = (args: { project: number | { id: number }, ticket: number | { id: number } } | [project: number | { id: number }, ticket: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const tickets = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default tickets