import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { GoKey } from 'react-icons/go'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/userSlice'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state=>state.user.token)
    

    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    // useEffect(()=>{
    //     if (token) {
    //         navigate('/browse')
    //     }else{
    //         console.log('/');
    //     }

    // },[dispatch,token,navigate])



    return (
        <div className='login'>
            <div className="login_box">
                <div className="logo">
                    <div className="logo_img">
                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1421 53.1421C6.33166 45.3317 6.33165 32.6684 14.1421 24.8579L24.8579 14.1421C32.6683 6.33165 45.3317 6.33164 53.1421 14.1421L63.8579 24.8579C71.6684 32.6683 71.6684 45.3316 63.8579 53.1421L53.1422 63.8579C45.3317 71.6683 32.6684 71.6684 24.8579 63.8579L14.1421 53.1421Z" fill="url(#paint0_linear_894_24)" />
                            <path opacity="0.25" d="M15 35C15 23.9543 23.9543 15 35 15H50C61.0457 15 70 23.9543 70 35V50C70 61.0457 61.0457 70 50 70H35C23.9543 70 15 61.0457 15 50V35Z" fill="#FF334B" />
                            <path opacity="0.25" d="M8 28C8 16.9543 16.9543 8 28 8H43C54.0457 8 63 16.9543 63 28V43C63 54.0457 54.0457 63 43 63H28C16.9543 63 8 54.0457 8 43V28Z" fill="#3369FF" />
                            <path d="M51.2079 36.062C50.7587 35.9437 50.2969 36.2057 50.1765 36.6474L48.8147 41.6441C47.3741 46.9301 41.828 50.0781 36.4514 48.6618C31.0749 47.2454 27.8729 41.7926 29.3135 36.5067L30.6753 31.51C30.7957 31.0683 30.529 30.6143 30.0799 30.496C29.6306 30.3777 29.1689 30.6397 29.0485 31.0814L27.6867 36.0781C26.0791 41.9771 29.4269 48.0535 35.21 50.0179L34.0787 54.1691L29.8714 53.0607C29.4223 52.9424 28.9605 53.2044 28.8401 53.6461C28.7197 54.0878 28.9863 54.5418 29.4355 54.6601L39.4767 57.3053C39.9259 57.4237 40.3877 57.1616 40.5081 56.7199C40.6285 56.2782 40.3618 55.8243 39.9126 55.706L35.7054 54.5976L36.8368 50.4465C42.8442 51.5881 48.8337 47.9715 50.4414 42.0726L51.8032 37.0759C51.9237 36.6343 51.657 36.1803 51.2079 36.062Z" fill="white" />
                            <path d="M44.2819 22.0621L43.1978 21.7765C39.4794 20.7969 35.6438 22.9742 34.6474 26.6299L31.6334 37.6891C30.6371 41.3448 32.8516 45.1159 36.57 46.0955L37.654 46.3811C41.3724 47.3606 45.2081 45.1834 46.2044 41.5276L49.2185 30.4685C50.2148 26.8127 48.0003 23.0416 44.2819 22.0621ZM47.026 32.1157L44.0775 31.339C43.6283 31.2206 43.1666 31.4827 43.0462 31.9244C42.9258 32.3661 43.1924 32.82 43.6416 32.9383L46.5901 33.7151L45.9835 35.9411L43.035 35.1643C42.5857 35.046 42.124 35.308 42.0036 35.7497C41.8833 36.1914 42.1498 36.6454 42.5991 36.7637L45.5476 37.5405L44.9409 39.7666L41.9924 38.9898C41.5431 38.8715 41.0814 39.1335 40.9611 39.5752C40.8407 40.0169 41.1072 40.4708 41.5565 40.5892L44.4977 41.364C43.6339 43.977 40.8203 45.501 38.09 44.7818L37.0059 44.4962C34.2756 43.7769 32.614 41.074 33.1948 38.3864L36.136 39.1612C36.5853 39.2796 37.047 39.0175 37.1674 38.5758C37.2877 38.1341 37.0212 37.6802 36.5719 37.5619L33.6234 36.7851L34.2301 34.559L37.1786 35.3358C37.6279 35.4541 38.0896 35.192 38.2099 34.7503C38.3303 34.3086 38.0638 33.8547 37.6145 33.7364L34.666 32.9596L35.2727 30.7336L38.2212 31.5104C38.6704 31.6287 39.1321 31.3667 39.2525 30.925C39.3729 30.4833 39.1063 30.0294 38.6571 29.911L35.7086 29.1343L36.2743 27.0585C36.8176 25.065 38.4737 23.6509 40.4098 23.2889L39.7936 25.5498C39.6732 25.9915 39.9398 26.4454 40.389 26.5638C40.8382 26.6821 41.3 26.42 41.4204 25.9783L42.1626 23.2549C42.3623 23.2839 44.2389 23.7783 44.4267 23.8514L43.6845 26.5748C43.5641 27.0165 43.8306 27.4704 44.2799 27.5888C44.729 27.7071 45.1909 27.445 45.3112 27.0033L45.9274 24.7424C47.42 26.0077 48.1351 28.0463 47.5918 30.0399L47.026 32.1157V32.1157Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_894_24" x1="38.9535" y1="0.0465849" x2="38.9535" y2="78.0466" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF334B" />
                                    <stop offset="0.46875" stopColor="#C600F9" />
                                    <stop offset="1" stopColor="#3369FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="logo_text">
                        pcast
                    </div>
                </div>
                <div className="desc">
                    Episodic series of digital audio.
                </div>
                <form onSubmit={submitHandler}>
                    <div className="form_group">
                        <AiOutlineMail className='input_icon' />
                        <input type="email" name="email" placeholder='E-mail adress' onChange={(e)=>setFormData(prev=>({...prev, email:e.target.value}))}/>
                    </div>
                    <div className="form_group">
                        <GoKey className='input_icon' />
                        <input type="password" name="password" placeholder='Password' onChange={(e)=>setFormData(prev=>({...prev, password:e.target.value}))}/>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login