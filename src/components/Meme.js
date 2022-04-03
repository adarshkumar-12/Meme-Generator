import React,{useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';
import troll from "../images/Troll Face.png";

const Meme = () => {
   const [idx,setIdx]=useState(0);
   const [memes,setMemes]=useState([]);
   const [captions,setCaptions]=useState([]);

   const history = useNavigate();

   useEffect(() =>{
       fetch("https://api.imgflip.com/get_memes")
             .then(res => res.json())
             .then(data => {  setMemes(data.data.memes)
             });
   },[]);

   useEffect(() => {
       
    if (memes.length) {
        setCaptions(Array(memes[idx].box_count).fill(''));
    }
   },[idx,memes]);

   useEffect(() => {
        handleClick();
    },[memes]);
    
    const handleClick = () => {
    const idx= Math.floor(Math.random() *memes.length);
    setIdx(idx);
    }
  
     const updateCaption = (e, index) => {
          const text = e.target.value || "";
          setCaptions(
            captions.map((c, i) => {
                if (i === index) return text;
                else return c;
            })
        )
     }

     const generateMeme = () => {
        const currentMeme = memes[idx];
        const formData = new FormData();

        formData.append('username', 'adarsh__kumar');
        formData.append('password', 'adarshkumar12');
        formData.append('template_id', currentMeme.id);

        captions.forEach((c, index) => {
            formData.append(`boxes[${index}][text]`, c);
        })

        fetch('https://api.imgflip.com/caption_image',{
            method: "POST",
            body:formData
            })
            .then(res => res.json())
            .then(res => history(`/generated?url=${res.data.url}`));

    }

    return (
        <div>
        <div className="form">
              <button style={{backgroundColor:"#ff4000"}} onClick={handleClick}>Get a new meme imgae</button>
              <button style={{backgroundColor:"	#0080ff"}} onClick={generateMeme}>Generate</button>
              {
                captions.map((c, index) => (
                    <input onChange={(e) => updateCaption(e, index)} key={index} />
                ))
              }
        </div>
        <div className="meme">
        {memes.length && <img src={memes[idx].url} alt="meme-here" />}
        </div>
        </div>
    );
};

export default Meme;