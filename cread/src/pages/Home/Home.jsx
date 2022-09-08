import React from 'react'
import cookie from 'js-cookie';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import TopBar from '../../components/TopBar/TopBar';

const Home = () => {

  const navigate = useNavigate();

  // use context 

  const { dispatch , user } = useContext(AuthContext);


     //  use loader context

     const { loaderDispatch } = useContext(LoaderContext);


  //  handle user logout

  const handleUserLogout = () => {

    cookie.remove('token');
    dispatch({type : 'LOG_OUT'})
    loaderDispatch({type : 'LOADER_START'});
    navigate('/login');

  }
  return (

   <>
   
   {/* // <AuthTamp/> */}

      <TopBar/>

      <div className="home-container">
        <div className="home-wraper">
          <div className="time-line">
           <div className="post-card">
            <div className="post-card-header">
              <div className="post-user-info">
             
                  <img src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__340.jpg" alt="" />
          
                <div className="user-detail">
                  <a className='username' href="#">{user.userName}</a>
                  <span className='location'>Jessore</span>
                </div>
              </div>
              <div className="post-opt-btn">
                <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
              </div>
            </div>
            <div className="post-img">
              <img src="https://media.istockphoto.com/photos/modern-building-in-paris-picture-id1048358188?k=20&m=1048358188&s=612x612&w=0&h=98k1bheJhFcFpOJxu8QwmI59hYURaJtTSYabJFRJsrk=" alt="" />
            </div>
            <div className="time-line-icons">
              <div className="time-line-icon-left">
                <a href="#"><svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>

                <a href="#"><svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>

                <a href="#"><svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
              </div>

              <div className="time-line-icon-right">
                <a href="#"><svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
              </div>
            </div>
            <div className="post-details">
              <span className="likes">102 likes</span>
              <div className="post-content">
                <a href="#">{user.userName}</a> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum nulla exercitationem perferendis voluptatem ab beatae pariatur obcaecati, odio itaque culpa vero ex aperiam reprehenderit numquam, rem quae tempora ullam.
              </div>
              <div className="post-comments">
              <span>View all 30 comments</span>
              </div>
              <div className="post-time">
              <span>1 DAY AGO</span>
            </div>
            </div>
            <div className="comment-area">
              <a href="#"><svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg></a>

              <input type="text" placeholder='Add a comment.....' />
              <button>Post</button>
            </div>
           </div>
          </div>
          <div className="user-info">
           <div className="user-detail-info">
            <img src={`${user.photo ? user.photo : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG.png'}`} alt="" />
              <div className="user-name">
              <span className='username'>{user.userName}</span>
              <span className='name'>{user.name}</span>
              <button onClick={handleUserLogout}>Log out</button>
              </div>
           </div>
          </div>
        </div>
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
   </>
    
  )
}

export default Home