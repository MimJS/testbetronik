import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import './styles/view_page.scss'
import './styles/view_page_mobile.scss'
import link from './imgs/link.png'
import arrow from './imgs/arrow.png'
import { useState } from "react"

const ViewPage = () => {

    let location = useLocation();
    const navigate = useNavigate();
    const currentPage = useSelector((s) => s.routes.currentPage);
    const [form_data, set_form_data] = useState({
        title: '',
        path: ''
    })
    const dispatch = useDispatch()

    const back = () => {
        let newpath = location.pathname.split('/')
        if (newpath.length == 2) {
            return navigate('/')
        }
        newpath = newpath.splice(0, newpath.length - 1)
        newpath = newpath.join('/')
        navigate(newpath)
    }

    const insertPath = (e) => {
        e.preventDefault()
        dispatch({
            type: 'INSERTNEWPATH',
            payload: {
                title: form_data.title,
                path: form_data.path,
                currentPath: location,
                navigate: navigate
            }
        })
        set_form_data({
            title:'',
            path:''
        })
    }

    return (
        <>
            {Object.keys(currentPage).length > 0 &&
                <div className='view_page' scheme={currentPage.nodes.length > 0 ? `wa` : `fb`}>
                    <div className='header'>
                        <span className='header_title'>{currentPage.title}</span>
                        {location.pathname != '/' && <button className='header_button' onClick={back}>Перейти к родительскому узлу</button>}
                    </div>
                    <div className='main_content'>
                        <div className='container'>
                            <div className='new_tree'>
                                <span className='title'>Добавление узла</span>
                                <form onSubmit={insertPath}>
                                    <input autoComplete={`off`} value={form_data.title} onChange={(e) => set_form_data({...form_data, title:e.currentTarget.value.replace(/[^a-zA-Zа-яА-ЯЁё0-9 \W]/g,'')})} required name='title' className='input_title' type='text' placeholder='Название' />
                                    <input autoComplete={`off`} value={form_data.path} onChange={(e) => set_form_data({...form_data, path:e.currentTarget.value.replace(/[^a-zA-Z0-9_-]/g,'')})} required name='path' className='input_path' type='text' placeholder='Путь ( без / )' />
                                    <input className='create' type='submit' value='Создать' />
                                </form>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='url_list'>
                                <span className='title'>Дочерние узлы</span>
                                {currentPage.nodes.length > 0 ?
                                    currentPage.nodes.map((v) => (
                                        <Link to={location.pathname == '/' ? v.route : location.pathname + v.route}>
                                            <div className='block'>
                                                <div className='block_before'><img src={link} /></div>
                                                <div className='block_content'>
                                                    <span className='block_content_main'>{v.title}</span>
                                                    <span className='block_content_desc'>Путь : {v.route}</span>
                                                </div>
                                                <div className='block_after'><img src={arrow} /></div>
                                            </div>
                                        </Link>
                                    ))
                                    :
                                    <span className='url_no_found'>Дочерние узлы не найдены</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ViewPage