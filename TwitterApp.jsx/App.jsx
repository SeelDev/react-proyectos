import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import {useState} from 'react'
// name <- children
export function App() {
    
    return(
        <section className="App">
        
        <TwitterFollowCard initialIsFollowing userName="selenita"> 
            Sel 
        </TwitterFollowCard>
        
        <TwitterFollowCard initialIsFollowing={false} userName="elonmusk">
             Elon Musk
         </TwitterFollowCard>
         
        </section>
    )
}
