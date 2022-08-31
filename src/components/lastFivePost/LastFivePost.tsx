import React, { useEffect, useState } from "react";
import "./lastFivePost.css"

function LastFivePost ({info}:any){

    const [lastFive, setLastFive] = useState<any> ([])

    useEffect(()=>{
       setLastFive(info
        .sort((a : any,b :any) =>  b.addedTime - a.addedTime)
        .filter( (item :any , index : number) => {
            if(index <= 4){
                 return item;
            }
       })
        ) 
    },[info.length])

    return(
        <div className="last-five-container">
            {info.length === 0
             ? "no post" 
             : lastFive.map((c: any) => <div className="post-list" key={c.userName}>
                <img src={c.userAvatar} alt={c.userName}/>
                <div>
                    <h5>{c.userName}</h5>
                    <p>{c.postText}</p>
                </div>
                 </div>)} 
        </div>
    )
}

export default LastFivePost