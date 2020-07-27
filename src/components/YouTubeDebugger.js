// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    
    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }
    
    render(){
        console.log(this.state.settings.bitrate)
        return(
            <div>
                <button onClick={this.handleBitrate} className='bitrate'>Bitrate Setting</button>
                <button onClick={this.handleResolution} className='resoultion'>Resolution Setting</button>
            </div>
        )
    }
}