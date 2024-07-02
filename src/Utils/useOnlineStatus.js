
import {useState,useEffect}  from 'react'


export default  useOnlineStatus = () =>{
    
    
    const [onlineStatus , setOnlineStatus] = useState(true)
    
    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })
        
        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })
        
        
        return ()=>{
           window.removeEventListener('online',()=>{
               console.log("removed")
           })
        }
    },[])
    
    
    return onlineStatus;
}