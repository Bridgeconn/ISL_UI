import React from 'react'
import ReactPlayer from 'react-player'
import SignImg from '../../../Assets/React-App.jpeg'

const SignVideo = () => {
    return (    <div className='player-wrapper'>
    {/* <ReactPlayer
    className='react-player fixed-bottom'
    url= 'videos/React-App.jpeg'
    width='100%'
    height='100%'
    controls = {true}

    /> */}
    <img src={SignImg} alt='sign video'/>
</div> );
}
 
export default SignVideo;
