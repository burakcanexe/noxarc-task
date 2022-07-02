import React from 'react'
import author_img from '../../assets/img/podcast_author.png'

function PodcastList() {
    return (
        <div className='podcast_list'>
            <h2>Podcasts (2)</h2>
            <div className="podcast_item item_1">
                <div className="podcast_title">Tincidunt facilisis fermentum nec sed</div>
                <div className="podcast_date">23.05.2019 - 24:15:05</div>
                <div className="podcast_author">
                    <img src={author_img} alt="Author" />
                    <div className="author_name">Theresa Hawkins</div>
                </div>
                <button className='play_btn'>
                    <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_915_148)">
                            <circle cx="75.4999" cy="70.5" r="25.5" fill="#FF334B" />
                            <path d="M71.4999 78.4146V62.5854C71.4999 62.5609 71.5048 62.5532 71.5068 62.55C71.5069 62.5499 71.5069 62.5497 71.507 62.5496C71.5116 62.5422 71.5233 62.5284 71.5455 62.5162C71.5677 62.5041 71.5889 62.4999 71.6042 62.5C71.6145 62.5001 71.631 62.5016 71.6591 62.5189L84.4591 70.4335C84.4835 70.4486 84.4896 70.4596 84.4918 70.4638C84.4959 70.4713 84.4999 70.4837 84.4999 70.5C84.4999 70.5163 84.4959 70.5287 84.4918 70.5362C84.4896 70.5404 84.4835 70.5514 84.4591 70.5665L71.6591 78.4811C71.631 78.4984 71.6145 78.4999 71.6042 78.5C71.5889 78.5001 71.5677 78.4959 71.5455 78.4838C71.5233 78.4716 71.5116 78.4578 71.507 78.4504L71.5068 78.45C71.5048 78.4468 71.4999 78.4391 71.4999 78.4146Z" stroke="white" strokeWidth="3" />
                        </g>
                        <defs>
                            <filter id="filter0_d_915_148" x="-6.10352e-05" y="0" width="151" height="151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="5" />
                                <feGaussianBlur stdDeviation="25" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.296 0 0 0 0.7 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_915_148" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_915_148" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="podcast_item item_2">
                <div className="podcast_title">Nulla leo dictum pharetra ultricies</div>
                <div className="podcast_date">23.05.2019 - 24:15:05</div>
                <div className="podcast_author">
                    <img src={author_img} alt="Author" />
                    <div className="author_name">Wade Flores</div>
                </div>
                <button className='play_btn'>
                    <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_915_148)">
                            <circle cx="75.4999" cy="70.5" r="25.5" fill="#FF334B" />
                            <path d="M71.4999 78.4146V62.5854C71.4999 62.5609 71.5048 62.5532 71.5068 62.55C71.5069 62.5499 71.5069 62.5497 71.507 62.5496C71.5116 62.5422 71.5233 62.5284 71.5455 62.5162C71.5677 62.5041 71.5889 62.4999 71.6042 62.5C71.6145 62.5001 71.631 62.5016 71.6591 62.5189L84.4591 70.4335C84.4835 70.4486 84.4896 70.4596 84.4918 70.4638C84.4959 70.4713 84.4999 70.4837 84.4999 70.5C84.4999 70.5163 84.4959 70.5287 84.4918 70.5362C84.4896 70.5404 84.4835 70.5514 84.4591 70.5665L71.6591 78.4811C71.631 78.4984 71.6145 78.4999 71.6042 78.5C71.5889 78.5001 71.5677 78.4959 71.5455 78.4838C71.5233 78.4716 71.5116 78.4578 71.507 78.4504L71.5068 78.45C71.5048 78.4468 71.4999 78.4391 71.4999 78.4146Z" stroke="white" strokeWidth="3" />
                        </g>
                        <defs>
                            <filter id="filter0_d_915_148" x="-6.10352e-05" y="0" width="151" height="151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="5" />
                                <feGaussianBlur stdDeviation="25" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.296 0 0 0 0.7 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_915_148" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_915_148" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PodcastList