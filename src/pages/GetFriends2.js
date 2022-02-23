import React from 'react'
import { useParams } from 'react-router-dom'
import Layouts from '../Components/Layouts'

export default function GetFriends2() {
    //1.state/hook
    let param = useParams()

    //2.functions

    //3.return statement
  return (
    <Layouts>
        <div>GetFriends {param.fri_id} {param.id} </div>
    </Layouts>
  )
}
