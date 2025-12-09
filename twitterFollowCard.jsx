import { useState } from "react"


export function TwitterFollowCard ({formatUserName, userName = 'unknown', children, initialIsFollowing}){
   
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
   
    const imageSrc = `https://unavatar.io/${userName}`
   
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'tw-follow-card-boton is-following' : 'tw-follow-card-boton'
   
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    //lo que quiero rendizar
    return(
          <article className="tw-follow-card">   
            <header className="tw-follow-card-header">
                <img src={imageSrc} alt="logo del usuario" className="tw-follow-card-imagen" />
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span  className="tw-follow-card-infoUserName" >@{userName}</span>
                </div>
            </header>
            <aside> 
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>

    )
}
