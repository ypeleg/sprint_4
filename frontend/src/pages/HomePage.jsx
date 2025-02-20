

import { useNavigate } from 'react-router'
import { useState } from 'react'


export function HomePage() {
    const navigate = useNavigate()

    const [cardToShow, setCardToShow] = useState(1)

    return (
        <div className="home">
            <header className="home-header full">
                <div className="home-menu">
                    <span className="roi">
                        {/*<svg fill="currentColor" height="30" width="30" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4579 5H2.21854C1.63014 5 1.06585 5.23374 0.649794 5.64979C0.233738 6.06585 0 6.63014 0 7.21854V21.4669C0 22.0553 0.233738 22.6196 0.649794 23.0356C1.06585 23.4517 1.63014 23.6854 2.21854 23.6854H16.4579C17.0463 23.6854 17.6106 23.4517 18.0266 23.0356C18.4427 22.6196 18.6764 22.0553 18.6764 21.4669V7.22452C18.6772 6.93268 18.6204 6.64354 18.5093 6.37369C18.3981 6.10383 18.2348 5.85855 18.0287 5.65191C17.8227 5.44527 17.5778 5.28131 17.3083 5.16945C17.0387 5.05758 16.7497 5 16.4579 5V5ZM8.04481 18.4729C8.04481 18.6685 7.96731 18.8561 7.82927 18.9947C7.69123 19.1333 7.50391 19.2116 7.30829 19.2124H4.18558C3.98969 19.2116 3.80205 19.1334 3.66353 18.9949C3.52502 18.8564 3.44685 18.6688 3.44607 18.4729V9.19157C3.44685 8.99568 3.52502 8.80804 3.66353 8.66952C3.80205 8.53101 3.98969 8.45284 4.18558 8.45205H7.30829C7.50391 8.45285 7.69123 8.53111 7.82927 8.66971C7.96731 8.80831 8.04481 8.99595 8.04481 9.19157V18.4729ZM15.2304 14.2185C15.2296 14.4143 15.1514 14.602 15.0129 14.7405C14.8744 14.879 14.6867 14.9572 14.4908 14.958H11.3681C11.1725 14.9572 10.9852 14.8789 10.8471 14.7403C10.7091 14.6017 10.6316 14.4141 10.6316 14.2185V9.19157C10.6316 8.99595 10.7091 8.80831 10.8471 8.66971C10.9852 8.53111 11.1725 8.45285 11.3681 8.45205H14.4908C14.6867 8.45284 14.8744 8.53101 15.0129 8.66952C15.1514 8.80804 15.2296 8.99568 15.2304 9.19157V14.2185Z"></path></svg><span>Trello</span></span>*/}
                        <svg aria-label="Atlassian Trello" height="37.5" role="img" viewBox="0 0 312 105" width="111.42857142857143" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="Logo-sc-1anfgcw-0 gguOta">
                        <linearGradient id="trello-logo-gradient-defaultMJFtCCgVhXrVl7v9HA7EH" x1="49.992%" x2="49.992%" y1="100%" y2=".016%">
                            <stop offset="0" stop-color="#0052cc"></stop>
                            <stop offset="1" stop-color="#2684ff"></stop>
                        </linearGradient>
                        <path d="m55.3 40.6h-47.5c-4.1 0-7.4 3.3-7.4 7.4v47.6c0 4.1 3.3 7.4 7.4 7.4h47.5c4.1 0 7.4-3.3 7.4-7.4v-47.6c0-4.1-3.3-7.4-7.4-7.4zm-28.1 44.9c0 1.4-1.1 2.5-2.5 2.5h-10.4c-1.4 0-2.5-1.1-2.5-2.5v-30.9c0-1.4 1.1-2.5 2.5-2.5h10.4c1.4 0 2.5 1.1 2.5 2.5zm24-14.2c0 1.4-1.1 2.5-2.4 2.5h-10.5c-1.4 0-2.5-1.1-2.5-2.5v-16.7c0-1.4 1.1-2.5 2.5-2.5h10.4c1.4 0 2.5 1.1 2.5 2.5z" fill="url(#trello-logo-gradient-defaultMJFtCCgVhXrVl7v9HA7EH)"></path>
                        <g fill="#253858" transform="translate(87 40)"><path d="m42.6 5.2v12.1h-14.3v45.7h-13.8v-45.8h-14.3v-12z"></path><path d="m60.2 63h-12.7v-45h12.7v8.6c2.4-6.1 6.3-9.7 13.2-9.2v13.3c-9-.7-13.2 1.5-13.2 8.7z"></path><path d="m143 63.4c-8.4 0-13.6-4-13.6-13.5v-49.3h12.8v47.5c0 2.7 1.8 3.7 4 3.7.6 0 1.3 0 1.9-.1v11.1c-1.7.4-3.4.6-5.1.6z"></path><path d="m169.8 63.4c-8.4 0-13.6-4-13.6-13.5v-49.3h12.8v47.5c0 2.7 1.8 3.7 4 3.7.6 0 1.3 0 1.9-.1v11.1c-1.7.4-3.4.6-5.1.6z"></path><path d="m181 40.5c0-13.9 8-23.4 21.8-23.4s21.6 9.5 21.6 23.4-7.9 23.6-21.6 23.6-21.8-9.8-21.8-23.6zm12.5 0c0 6.8 2.8 12.1 9.3 12.1s9.1-5.4 9.1-12.1-2.8-12-9.1-12-9.3 5.2-9.3 12z"></path>
                            <path d="m90.6 44.6c3.6.4 7.2.6 10.7.6 9.8 0 18-2.6 18-12.1 0-9.2-8.5-16.1-18.7-16.1-13.7 0-22.5 10-22.5 23.8 0 14.4 7.6 23 24.7 23 5.1.1 10.1-.8 14.9-2.6v-10.8c-4.4 1.4-9.4 2.8-14.4 2.8-6.8.1-11.5-2.2-12.7-8.6zm9.8-17.7c3.6 0 6.5 2.4 6.5 5.8 0 4.3-4.6 5.7-9.8 5.7-2.2 0-4.5-.2-6.7-.5.2-2.1.8-4.1 1.8-6 1.6-3.1 4.8-5 8.2-5z"></path></g>
                        <g fill="#0052cc" transform="translate(94)"><path d="m98.9 16.7c0-4-2.6-5.8-7.4-7-3-.8-3.7-1.4-3.7-2.4 0-1.2 1.1-1.8 3.1-1.8 2.4.1 4.8.7 7 1.8v-5c-2.1-1-4.5-1.5-6.8-1.5-5.3 0-8.2 2.5-8.2 6.6 0 3.9 2.6 5.9 7 6.9 3.1.7 4 1.2 4 2.5 0 1-.7 1.8-3 1.8-2.8-.1-5.6-.9-8.1-2.3v5.3c2.5 1.2 5.2 1.9 8 1.9 5.4 0 8.1-2.7 8.1-6.8z"></path><path d="m159.3 1.2v22h4.7v-16.8l2 4.4 6.6 12.3h5.9v-22h-4.7v14.2l-1.8-4.1-5.3-10.1h-7.4z"></path><path d="m129.6 1.2h-5.1v22h5.1z"></path><path d="m43.2 1.2v22h10.5l1.6-4.8h-7v-17.2z"></path><path d="m22.4 1.2v4.8h5.7v17.2h5.1v-17.2h6.1v-4.8z"></path><path d="m15 1.2h-6.7l-7.7 22h5.9l1.1-3.7c1.3.4 2.7.6 4.1.6s2.8-.2 4.1-.6l1.1 3.7h5.9zm-3.4 14.3c-1 0-1.9-.1-2.8-.4l2.8-9.6 2.8 9.6c-.9.3-1.8.4-2.8.4z"></path><path d="m71.7 1.2h-6.7l-7.7 22h5.9l1.1-3.7c1.3.4 2.7.6 4.1.6s2.8-.2 4.1-.6l1.1 3.7h5.9zm-3.3 14.3c-1 0-1.9-.1-2.8-.4l2.8-9.6 2.8 9.6c-.9.3-1.9.4-2.8.4z"></path>
                            <path d="m148 1.2h-6.7l-7.7 22h5.9l1.1-3.7c1.3.4 2.7.6 4.1.6s2.8-.2 4.1-.6l1.1 3.7h5.9zm-3.4 14.3c-1 0-1.9-.1-2.8-.4l2.8-9.6 2.8 9.6c-.9.3-1.8.4-2.8.4z"></path><path d="m119.2 16.7c0-4-2.6-5.8-7.4-7-3-.8-3.7-1.4-3.7-2.4 0-1.2 1.1-1.8 3-1.8 2.4.1 4.8.7 7 1.8v-5c-2.2-1-4.5-1.5-6.9-1.5-5.3 0-8.2 2.5-8.2 6.6 0 3.9 2.6 5.9 7 6.9 3.1.7 4 1.2 4 2.5 0 1-.7 1.8-3 1.8-2.8-.1-5.6-.9-8.1-2.3v5.3c2.5 1.2 5.2 1.9 8 1.9 5.7 0 8.3-2.7 8.3-6.8z"></path></g>
                        </svg>
                    </span>
                    <span className="opt"><span className="name">Featuers</span><svg fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path></svg></span> <span className="opt"><span className="name">Solutions</span><svg fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path></svg></span>
                    <span className="opt"><span className="name">Plans</span><svg fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path></svg></span> <span className="opt"><span className="name">Resoursces</span><svg fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path></svg></span>
                </div>
                <div className="join">
                    <button className="login" onClick={() => navigate('/login')}>Log in</button>
                    <button className="guest" onClick={() => navigate('/login')}>Get Trello for free</button>
                </div>
            </header>
            <main className="home-main">
                <section className="hero">
                    <div className="hero-content">
                        <div className="right">
                            <h1 className="hero-title">Trello brings all your tasks, teammates, and tools together</h1>
                            <p className="subtitle">Keep everything in the same place—even if your team isn’t.</p>
                            <button className="second-signin" onClick={() => navigate('/login')}>Sign in as guest</button>
                        </div>
                        <div className="img-container">

                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=960&fm=webp" alt=""/>
                        </div>
                    </div>
                </section>

                <section className="padded-home-section homepage-titles">
                    <h5>TRELLO 101</h5>
                    <h1>A productivity powerhouse</h1>
                    <p>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a onClick={() => navigate('/getting_started')}> guide for getting started.</a></p>
                </section>

                <section className="section-3 padded-home-section cards-and-img">
                    <div className="cards-and-img-cards">

                        <article className={`home-card ${(cardToShow === 1) ? 'active' : ''}`} onClick={() => {
                            setCardToShow(1)
                        }}>
                            <div>
                                <h4>Boards</h4>
                                Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                            </div>
                        </article>

                        <article className={`home-card ${(cardToShow === 2) ? 'active' : ''}`} onClick={() => {
                            setCardToShow(2)
                        }}>
                            <div>
                                <h4>Lists</h4>
                                The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.
                            </div>
                        </article>


                        <article className={`home-card ${(cardToShow === 3) ? 'active' : ''}`} onClick={() => {
                            setCardToShow(3)
                        }}>
                            <div>
                                <h4>Cards</h4>
                                Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.
                            </div>
                        </article>

                    </div>
                    <div className="cards-and-img-img">
                        <div className="img-container">
                            {(cardToShow === 1) && <img src="img/home_c1.webp" />}
                            {(cardToShow === 2) && <img src="img/home_c2.webp" />}
                            {(cardToShow === 3) && <img src="img/home_c3.webp" />}
                        </div>
                    </div>
                </section>

                <section className="seework">
                    <div className='seework-content'>
                        <div className='head'>

                            <h1>See work in a whole new way</h1>
                            <h5>View your team’s projects from every angle and bring a fresh perspective to the task at hand.</h5>
                            <button className='discover' onClick={() => navigate('/login')}>Discover all trello views</button>
                        </div>
                        <article className='card'>
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=960&fm=webp" alt="" />
                            <div className='text'>
                                <div className='card-header'>
                                    <svg fill="currentColor" height="32" width="32" aria-hidden="true" viewBox="0 0 32 32"><path d="M6 5.333h9.333a3.333 3.333 0 0 1 0 6.667H6a3.333 3.333 0 0 1 0-6.667Zm9.333 4a.667.667 0 0 0 0-1.333H6a.667.667 0 0 0 0 1.333h9.333Zm-6.666 4H18A3.333 3.333 0 1 1 18 20H8.667a3.333 3.333 0 0 1 0-6.667Zm9.333 4A.667.667 0 0 0 18 16H8.667a.667.667 0 0 0 0 1.333H18Zm6.667 4h-9.334a3.333 3.333 0 1 0 0 6.667h9.334a3.333 3.333 0 0 0 0-6.667Zm-9.334 4a.667.667 0 0 1 0-1.333h9.334a.667.667 0 1 1 0 1.333h-9.334Zm8-20H26A3.333 3.333 0 1 1 26 12h-2.667a3.333 3.333 0 1 1 0-6.667Zm2.667 4A.667.667 0 1 0 26 8h-2.667a.667.667 0 1 0 0 1.333H26Z"></path></svg>
                                    <h4>Hit deadlines every time</h4>
                                </div>
                                <p>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                            </div>
                        </article>
                        <article className='card last'>
                            
                            <div className='text'>
                                <div className='card-header'>
                                    <svg fill="currentColor" height="32" width="32" aria-hidden="true" viewBox="0 0 32 32"><path d="M6 5.333h9.333a3.333 3.333 0 0 1 0 6.667H6a3.333 3.333 0 0 1 0-6.667Zm9.333 4a.667.667 0 0 0 0-1.333H6a.667.667 0 0 0 0 1.333h9.333Zm-6.666 4H18A3.333 3.333 0 1 1 18 20H8.667a3.333 3.333 0 0 1 0-6.667Zm9.333 4A.667.667 0 0 0 18 16H8.667a.667.667 0 0 0 0 1.333H18Zm6.667 4h-9.334a3.333 3.333 0 1 0 0 6.667h9.334a3.333 3.333 0 0 0 0-6.667Zm-9.334 4a.667.667 0 0 1 0-1.333h9.334a.667.667 0 1 1 0 1.333h-9.334Zm8-20H26A3.333 3.333 0 1 1 26 12h-2.667a3.333 3.333 0 1 1 0-6.667Zm2.667 4A.667.667 0 1 0 26 8h-2.667a.667.667 0 1 0 0 1.333H26Z"></path></svg>
                                    <h4>Stay on top of tasks</h4>
                                </div>
                                <p>Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
                            </div>
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=960&fm=webp" alt="" />
                        </article>
                    </div>
                </section>

            </main>






        </div>
    )
}
