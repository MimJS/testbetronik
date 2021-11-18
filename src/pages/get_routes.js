import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ViewPage from './view_page'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'

export const GetRoutes = () => {

    const dispatch = useDispatch()
    const routes = useSelector((s) => s.routes.tree)
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        const getRoute = (location) => {
            let path_to = location.pathname.split(`/`)
            if (path_to.length == 0) {
                path_to = path_to.splice(1, 1)
            } else {
                path_to = path_to.splice(1, path_to.length)
            }
            const path = location.pathname
            
            if(path === '/'){
                
                dispatch({
                    type: 'CHANGECURRENTPAGE',
                    payload: routes[0]
                })
                return
            }
            if (path_to.length < 2) {
                const index = routes[0].nodes.findIndex((e, i) => {
                    return e.route == path
                })
                if(index == -1){
                    navigate('/')
                    return 
                }
               
                dispatch({
                    type: 'CHANGECURRENTPAGE',
                    payload: routes[0].nodes[index]
                })
                return
            } else {

                let count = 0
                let need_path = [...routes[0].nodes]
                
                for (let j = 0; j < path_to.length; j++) {
                    
                    if (need_path == null) { return  }
                    if (count == 0) {
                        let index = need_path.findIndex((e, i) => {
                            
                            
                            return e.route == `/` + path_to[j]
                        }
                        )

                        

                        if (index == -1) {
                            navigate('/')
                            need_path = null
                        } else {
                            
                            need_path = { ...need_path[index] }
                            
                        }
                    } else {
                        let index = need_path.nodes.findIndex((e, i) => {
                            
                            
                            return e.route == `/` + path_to[j]
                        }
                        )

                        if (index == -1) {
                            navigate('/')
                            need_path = null
                        } else {
                            
                            need_path = { ...need_path.nodes[index] }
                        }
                    }

                    count += 1
                    if (count == path_to.length) {
                        
                        dispatch({
                            type: 'CHANGECURRENTPAGE',
                            payload: need_path
                        })
                        return need_path
                    }
                }

            }
        }
        getRoute(location)
    }, [location])

    return (
        <>
            <Routes>
                <Route path={location.pathname} exact element={<ViewPage />} />
            </Routes>
        </>
    )
}