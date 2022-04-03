import React from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import './App.css';
import  useClipboard  from "react-use-clipboard";

const  MemeGenerated = () => {

    const [copied,setCopied] = React.useState(false);

    const history = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    
    const [copy ,setCopy] = useClipboard(url);
 
    const copylink = () => {
        setCopy(url);
        setCopied(true);
    }

    return (
        <div  className="form">
            <button style={{backgroundColor:" #ff4000"}} onClick={() => history('/')}> Create More</button>
            {url && <img src={url} alt="meme-image" />}
            <button  style={{backgroundColor:"#0080ff"}} className="btn" onClick={copylink}>
                {copied ? "Link Copied" : "Copy Link"} 
            </button>
        </div>
    );
};

export default MemeGenerated;