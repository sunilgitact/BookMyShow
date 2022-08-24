import { useEffect, useState  } from "react";
import axios from "axios"



export default function Employee()
{
    let [list, setList]=useState({})
    let [id,setId]= useState(1)
    let [button,setButton]= useState()


    useEffect(()=>
    {
        axios.get(`https://www.omdbapi.com/?s=${button}&apikey=3ff04be7`)
        .than((response)=>{
            setList(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    return(
        <div>


            <input type="text" placeholder="Search"/>
            <input placeholder="Search Id" onChange={(e)=>{setId(e.target.value)}}/>
            <button onClick={()=>{setId(setButton(id))}}>Submit</button>
            <h1>id: {list.id}</h1>
            <img src={list.avatar_url}/>
        </div>
    )
}