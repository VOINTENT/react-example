import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = props.totalUsersCount / props.pageSize;

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onFollow = (userId) => {
        props.follow(userId);
    };

    const onUnfollow = (userId) => {
        props.unfollow(userId);
    };

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage }
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt="tphoto" className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {onUnfollow(u.id)} }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {onFollow(u.id)} }>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                    <span>
                    <div>
                        {"u.location.city"}
                    </div>
                    <div>
                        {"u.location.country"}
                    </div>
                </span>
                </div>)
            }
        </div>
    );
};

export default Users;