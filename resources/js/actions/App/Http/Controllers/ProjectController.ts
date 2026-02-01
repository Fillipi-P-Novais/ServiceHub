import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/companies/{company}/projects'
 */
const storefd2d58edb15fcff1641d5899d7e4ac3a = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefd2d58edb15fcff1641d5899d7e4ac3a.url(args, options),
    method: 'post',
})

storefd2d58edb15fcff1641d5899d7e4ac3a.definition = {
    methods: ["post"],
    url: '/companies/{company}/projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/companies/{company}/projects'
 */
storefd2d58edb15fcff1641d5899d7e4ac3a.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { company: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    company: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        company: typeof args.company === 'object'
                ? args.company.id
                : args.company,
                }

    return storefd2d58edb15fcff1641d5899d7e4ac3a.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/companies/{company}/projects'
 */
storefd2d58edb15fcff1641d5899d7e4ac3a.post = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefd2d58edb15fcff1641d5899d7e4ac3a.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/companies/{company}/projects'
 */
    const storefd2d58edb15fcff1641d5899d7e4ac3aForm = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storefd2d58edb15fcff1641d5899d7e4ac3a.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/companies/{company}/projects'
 */
        storefd2d58edb15fcff1641d5899d7e4ac3aForm.post = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storefd2d58edb15fcff1641d5899d7e4ac3a.url(args, options),
            method: 'post',
        })
    
    storefd2d58edb15fcff1641d5899d7e4ac3a.form = storefd2d58edb15fcff1641d5899d7e4ac3aForm
    /**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/projects'
 */
const store8f35706c95c06c991312479b995e49d2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

store8f35706c95c06c991312479b995e49d2.definition = {
    methods: ["post"],
    url: '/projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/projects'
 */
store8f35706c95c06c991312479b995e49d2.url = (options?: RouteQueryOptions) => {
    return store8f35706c95c06c991312479b995e49d2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/projects'
 */
store8f35706c95c06c991312479b995e49d2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/projects'
 */
    const store8f35706c95c06c991312479b995e49d2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store8f35706c95c06c991312479b995e49d2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:32
 * @route '/projects'
 */
        store8f35706c95c06c991312479b995e49d2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store8f35706c95c06c991312479b995e49d2.url(options),
            method: 'post',
        })
    
    store8f35706c95c06c991312479b995e49d2.form = store8f35706c95c06c991312479b995e49d2Form

export const store = {
    '/companies/{company}/projects': storefd2d58edb15fcff1641d5899d7e4ac3a,
    '/projects': store8f35706c95c06c991312479b995e49d2,
}

/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
const create1dfc347a8455d73c83f63f7c7ea11e8f = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, options),
    method: 'get',
})

create1dfc347a8455d73c83f63f7c7ea11e8f.definition = {
    methods: ["get","head"],
    url: '/companies/{company}/projects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
create1dfc347a8455d73c83f63f7c7ea11e8f.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    company: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        company: args.company,
                }

    return create1dfc347a8455d73c83f63f7c7ea11e8f.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
create1dfc347a8455d73c83f63f7c7ea11e8f.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
create1dfc347a8455d73c83f63f7c7ea11e8f.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
    const create1dfc347a8455d73c83f63f7c7ea11e8fForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
        create1dfc347a8455d73c83f63f7c7ea11e8fForm.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/companies/{company}/projects/create'
 */
        create1dfc347a8455d73c83f63f7c7ea11e8fForm.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create1dfc347a8455d73c83f63f7c7ea11e8f.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create1dfc347a8455d73c83f63f7c7ea11e8f.form = create1dfc347a8455d73c83f63f7c7ea11e8fForm
    /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
const create854856a96573f720f48e09da9946a4d0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})

create854856a96573f720f48e09da9946a4d0.definition = {
    methods: ["get","head"],
    url: '/projects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
create854856a96573f720f48e09da9946a4d0.url = (options?: RouteQueryOptions) => {
    return create854856a96573f720f48e09da9946a4d0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
create854856a96573f720f48e09da9946a4d0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
create854856a96573f720f48e09da9946a4d0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
    const create854856a96573f720f48e09da9946a4d0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create854856a96573f720f48e09da9946a4d0.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
        create854856a96573f720f48e09da9946a4d0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create854856a96573f720f48e09da9946a4d0.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProjectController::create
 * @see app/Http/Controllers/ProjectController.php:25
 * @route '/projects/create'
 */
        create854856a96573f720f48e09da9946a4d0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create854856a96573f720f48e09da9946a4d0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create854856a96573f720f48e09da9946a4d0.form = create854856a96573f720f48e09da9946a4d0Form

export const create = {
    '/companies/{company}/projects/create': create1dfc347a8455d73c83f63f7c7ea11e8f,
    '/projects/create': create854856a96573f720f48e09da9946a4d0,
}

/**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:15
 * @route '/projects'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
export const show = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
show.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
show.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
show.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
    const showForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
        showForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:41
 * @route '/projects/{project}'
 */
        showForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
export const edit = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
edit.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
edit.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
edit.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
    const editForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
        editForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProjectController::edit
 * @see app/Http/Controllers/ProjectController.php:52
 * @route '/projects/{project}/edit'
 */
        editForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
export const update = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
update.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
update.put = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
update.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
    const updateForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
        updateForm.put = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:60
 * @route '/projects/{project}'
 */
        updateForm.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:69
 * @route '/projects/{project}'
 */
export const destroy = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:69
 * @route '/projects/{project}'
 */
destroy.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:69
 * @route '/projects/{project}'
 */
destroy.delete = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:69
 * @route '/projects/{project}'
 */
    const destroyForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:69
 * @route '/projects/{project}'
 */
        destroyForm.delete = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ProjectController = { store, create, index, show, edit, update, destroy }

export default ProjectController