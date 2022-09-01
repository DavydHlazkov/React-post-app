import React, {useState, useEffect} from "react";
import "./allList.css"

function AllList ({info}:any){
    

    const [allPost, setAllPost] = useState<any> ([])

    useEffect(()=>{
        setAllPost(info.sort((a : any,b :any) =>  a.addedTime - b.addedTime   )) 
    },[info.length])

    
    return (
        <div className ="all-list-containe">
            {info.length === 0 
            ? <div className="empty-list" >У Вас пока нет объявлений</div>
            : allPost.map((c: any) => <div className="post-list" key={c.userName}>
                <img src={c.userAvatar} alt={c.userName}/>
                <div>
                    <h5>{c.userName}</h5>
                    <p>{c.postText}</p>
                </div>
               
                 
                 </div>)}
        </div>
    )
}

export default AllList