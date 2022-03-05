import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layouts from '../Components/Layouts'

export default function GetFriends2() {
    //1.state/hook
    let param = useParams();
/* 
    const useNav = useNavigate()
    
    useEffect(()=>{
     if(!localStorage.getItem('jwt')){
       useNav('/login')
     }
    },[useNav]) */
    //2.functions

    //3.return statement
  return (
    <Layouts>
        <div>GetFriends {param.fri_id} {param.id} </div>
    </Layouts>
  )
}
