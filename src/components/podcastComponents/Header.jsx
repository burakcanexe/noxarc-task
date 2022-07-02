import React from 'react'

function Header() {
    return (
        <div className='header'>
            <h1 className='podcast_title'>About flow and our motivations</h1>
            <p className='podcast_author'>John Doe & Amanda Smith</p>
            <div className="player">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.77376 4.5H7.2V6.3H0.9V0H2.7V2.94331C4.2526 1.06426 6.47619 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9H1.8C1.8 12.9764 5.02355 16.2 9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C6.84574 1.8 4.99819 2.77083 3.77376 4.5Z" fill="white" />
                </svg>
                <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_108_1563)">
                        <circle cx="75.5" cy="70.5" r="25.5" fill="#09121C" />
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M75.5 96C61.4167 96 50 84.5833 50 70.5C50 56.4167 61.4167 45 75.5 45C89.5833 45 101 56.4167 101 70.5C101 84.5833 89.5833 96 75.5 96Z" fill="#FF334B" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M69 62C69 60.8954 69.8954 60 71 60V60C72.1046 60 73 60.8954 73 62V79C73 80.1046 72.1046 81 71 81V81C69.8954 81 69 80.1046 69 79V62Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M78 62C78 60.8954 78.8954 60 80 60V60C81.1046 60 82 60.8954 82 62V79C82 80.1046 81.1046 81 80 81V81C78.8954 81 78 80.1046 78 79V62Z" fill="white" />
                    <defs>
                        <filter id="filter0_d_108_1563" x="0" y="0" width="151" height="151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="25" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.296 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_1563" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_1563" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2262 4.5H10.8V6.3H17.1V0H15.3V2.94331C13.7474 1.06426 11.5238 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9H16.2C16.2 12.9764 12.9765 16.2 9 16.2C5.02355 16.2 1.8 12.9764 1.8 9C1.8 5.02355 5.02355 1.8 9 1.8C11.1543 1.8 13.0018 2.77083 14.2262 4.5Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Header