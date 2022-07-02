import React, { useEffect, useState } from 'react'
import './browse.css'
import { AiOutlineSearch } from 'react-icons/ai'
import HorizontalList from '../../components/browseComponents/HorizontalList'
import PodcastList from '../../components/browseComponents/PodcastList'
import Top from '../../components/browseComponents/Top'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { search } from '../../redux/searchSlice'

function Browse() {

    const [value, setValue] = useState('Tincidunt ')

    const token = useSelector(state => state.user.token)
    const items = useSelector(state => state.search.items)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/')
    //     }
    // }, [token, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(search(value))
    }

    return (
        <div className='browse'>
            <Top />
            <h1 className='title'>Browse</h1>
            <form className='search_form' onSubmit={submitHandler}>
                <div className="form_group">
                    <input type="text" name='search' placeholder='Search...' defaultValue={value} onChange={(e) => setValue(e.target.value)} />
                    <button><AiOutlineSearch /></button>
                </div>
            </form>
            <HorizontalList />
            <PodcastList />
        </div>
    )
}

export default Browse