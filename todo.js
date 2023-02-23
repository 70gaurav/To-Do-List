import { useState } from "react"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

export function Todo (){
    const [input,setinput] = useState("")
    const [list,setlist] = useState([])
    const [edit,setedit] = useState(false)
    function inputhandler (e) {
        setinput(e.target.value)
    }
    function submithandler (e) {
        e.preventDefault()
        
        if(edit === false){
            setlist([...list,input])
        setinput("")
        }
        else{
            list[edit] = input
            setlist(list)
            setinput("")
            setexitedit(false)
        }

    }
    function deletehandler (item,index) {
        setlist(
            list.filter((li,ind) => {
                return ind !== index
            })
        )
    }
    function edithandler (element,index) {
        setinput(element)
        setedit(index)
    }
    return(
        <>
        <form onSubmit= {submithandler}>
            <input type="text" value={input} placeholder="Enter to add" onChange={inputhandler} autoFocus required></input>
            <button type="submit">Add</button>
        </form>
        {
            list.map((element,index) => {
                return <li>{element} <RemoveCircleOutlineIcon onClick = {()=>deletehandler(element,index)}/>
                <EditIcon onClick = {() => edithandler(element,index)}/></li>
            })
        }
        </>
    )
}


