import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="container-fluid">
            <div className="sidebar row">
                <ul>
                    <li>
                        <NavLink to='/upload-music'>
                        Upload <i class="fa fa-music" aria-hidden="true"></i>
                        </NavLink>
                    </li>
                    <li>
                        Music catalog
                    </li>
                    <li>
                        Openheart <i class="fa fa-heart" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
