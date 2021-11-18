const initial = {
    tree: [
        {
            route: '/', nodes: [], title: 'Домашняя страница'
        }
    ],
    currentPage: {}
}

export const routesReducer = (state = initial, action) => {
    switch (action.type) {
        case 'INSERTNEWPATH':
            const arr = insertRoute(action.payload.currentPath, state.tree, {
                route: `/` + action.payload.path.replace('/', '').replace(/\s/g, ''),
                title: action.payload.title,
                nodes: []
            })
            if (arr == false) {
                return state
            }
            return { ...state, tree: arr.routes, currentPage: arr.current }
        case 'CHANGECURRENTPAGE':
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}

const insertRoute = (location, routes, m) => {
    let path_to = location.pathname.split(`/`)
    if (path_to.length == 0) {
        path_to = path_to.splice(1, 1)
    } else {
        path_to = path_to.splice(1, path_to.length)
    }
    const path = location.pathname

    if (path === '/') {
        routes[0].nodes = [...routes[0].nodes, m]

        return {
            routes: routes,
            current: routes[0]
        }
    }
    if (path_to.length < 2) {
        const index = routes[0].nodes.findIndex((e, i) => {
            return e.route == path
        })
        if (index == -1) {
            return false
        }

        routes[0].nodes[index].nodes = [...routes[0].nodes[index].nodes, m]

        return {
            routes: routes,
            current: routes[0].nodes[index]
        }
    } else {

        let count = 0
        let need_path = [...routes[0].nodes]
        let indexses = []

        for (let j = 0; j < path_to.length; j++) {

            if (need_path == null) { return false }
            if (count == 0) {
                let index = need_path.findIndex((e, i) => {


                    return e.route == `/` + path_to[j]
                }
                )



                if (index == -1) {
                    need_path = null
                } else {
                    indexses.push(index)
                    need_path = { ...need_path[index] }
                }
            } else {
                let index = need_path.nodes.findIndex((e, i) => {


                    return e.route == `/` + path_to[j]
                }
                )

                if (index == -1) {
                    need_path = null
                } else {
                    indexses.push(index)
                    need_path = { ...need_path.nodes[index] }
                }
            }

            count += 1


            if (count == path_to.length) {
                need_path.nodes = [...need_path.nodes, m]
                let routing = { ...routes[0].nodes }
                for (let q = 0; q <= indexses.length; q++) {
                    if (Number.isInteger(indexses[q])) {
                        routing = routing[indexses[q]].nodes
                    } else {
                        routing.push(m)
                    }
                }

                return {
                    routes: routes,
                    current: need_path
                }
            }
        }

    }

}
