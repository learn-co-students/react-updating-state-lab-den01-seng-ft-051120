// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state={
            errors: [],
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            },
            user: null
        }
    }

    setBitrate = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    setResolution = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.setBitrate}>Bitrate!</button>
                <button className='resolution' onClick={this.setResolution}>Resolution!</button>
            </div>
        )
    }
        
    
}