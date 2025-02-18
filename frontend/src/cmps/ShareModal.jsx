import { useState } from "react"
import { useSelector } from "react-redux"
import { userService } from "../services/user"
import { updateBoard } from "../store/store"



export function ShareModal({onSetShowShare}) {
    const board = useSelector(state => state.boardModule.board)
    const [showUserPicker, setShowUserPicker] = useState(null)
    const [pickedUser, setPickedUser] = useState(null)
    const [userFilter, setUserFilter] = useState('')
    const [users, SetUsers] = useState([])
    function onSetShowUserPicker() {
        setShowUserPicker(!showUserPicker)
    }
    function onSetPickedUser(user) {
        setPickedUser(user)
        setUserFilter(user.fullname)
    }

    async function onUserFilter({ target }) {
        if (!target.value) {
            setShowUserPicker(false)
        } else {
            setUserFilter(target.value)
            const newUsers = await userService.getUsers()
            SetUsers(newUsers)
            setShowUserPicker(true)
        }
    }
    function addMember() {
        if (!pickedUser) return

        board.members.push(pickedUser)
        updateBoard(board)
    }

    return (
        <div className="sharemodal-container">
            <div className="sharemodal">
                <header>
                    <span className="title">Share board</span>
                    <svg onClick={onSetShowShare} width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg>
                </header>
                <div className="content">
                    <div className="mid">
                        <input value={userFilter} onChange={onUserFilter} type="text" />
                        <button className="member">Member<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M8.292 10.293a1.01 1.01 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0"></path></svg></button>
                        <button onClick={addMember} className="share">Share</button>
                    </div>
                    <div className="low">
                        <span className="active">Board members</span>
                        <span>Join request</span>
                    </div>
                    <div className="footer">
                        <div className="footer-list">

                            {board.members.map(member => {
                                return (
                                    <div className="user-item">
                                        <div className="user">

                                            <img src={member.imgUrl|| "user-defult-img.png"} alt="" />
                                            <span>{member.fullname}</span>
                                        </div>
                                        <button className="admin">Admin <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M8.292 10.293a1.01 1.01 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0"></path></svg></button>
                                    </div>

                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>
            {showUserPicker && <div className="userpicker">
                <section className="userlist">
                    {users.map(user => {
                        return (
                            <div onClick={() => { onSetPickedUser(user); setShowUserPicker(false) }} className="user-item">
                                <div className="user">

                                    <img src={user.imgUrl} alt="" />
                                    <span>{user.fullname}</span>
                                </div>

                            </div>

                        )
                    })}
                </section>

            </div>}

        </div>
    )
}




