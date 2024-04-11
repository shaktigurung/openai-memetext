"use client"
import React, {useState} from 'react'

const Generate = () => {
    const [text, setText] = useState("");
    const generateMemeText = async () => {
        try {
            const res = await fetch('/api/memetext');
            if(res.status !== 200){
                console.log('Error generating meme text')
            } else {
                const { memeText } = await res.json();
                setText(memeText)
            }
        } catch (error) {
            console.error(error);
        }
    }
  
    return (
        <div>
            <button onClick={generateMemeText}>Generate text</button>
            <p>
            {text}
            </p>
        </div>
    )
}

export default Generate
