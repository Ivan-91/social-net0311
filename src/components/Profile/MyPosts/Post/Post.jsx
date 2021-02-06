import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className= {s.item}>
            <img src = 'https://qph.fs.quoracdn.net/main-qimg-4981709faa24c748ed82b3670bf32bea'/>
            {props.message}
            <div>
                <span>
                    like {props.likecount}
                </span>
            </div>
        </div>
    )
    }

export default Post