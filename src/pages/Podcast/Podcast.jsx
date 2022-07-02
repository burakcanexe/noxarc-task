import React, { useEffect } from 'react'
import Bottom from '../../components/podcastComponents/Bottom'
import Header from '../../components/podcastComponents/Header'
import Top from '../../components/podcastComponents/Top'
import './podcast.css'
import IMG1 from '../../assets/img/podcast_head_item1.png'
import IMG2 from '../../assets/img/podcast_head_item2.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Podcast() {
  const token = useSelector(state => state.user.token)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/')
  //   }
  // }, [token, navigate])
  
  return (
    <div className='podcast'>
      <div className="head">
        <Top />
        <Header />
        <img className='item_1' src={IMG1} alt="item 1" />
        <img className='item_2' src={IMG2} alt="item 2" />
      </div>
      <Bottom />
    </div>
  )
}

export default Podcast