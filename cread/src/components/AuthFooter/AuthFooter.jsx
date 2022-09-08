import React from 'react'
import './AuthFooter.scss';

const AuthFooter = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <ul>
                <li><a href="#">Meta</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Top Accounts</a></li>
                <li><a href="#">Hashtags</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Instagram Lite</a></li>
                <li><a href="#">Contact Uploading & Non-Users</a></li>
            </ul>
        </div>
        <div className="footer-buttom">
            <select name="" id="">
                <option value="">English</option>
                <option value="">Bangla</option>
                <option value="">Italiano</option>
                <option value="">Arabic</option>
            </select>
            <span className='copy-right-area'>© 2022 Instagram from Meta</span>
        </div>
    </div>
  )
}

export default AuthFooter











