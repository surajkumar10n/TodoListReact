import { useState } from "react"

const InputBox=({text,setText,transferData,editId})=>{
    const [ isTrue, setIsTrue] = useState(false);

    const handlechange=(e)=>{
        setText(e.target.value);
        if(editId){
            setIsTrue(true)
        }
    }
    const handleOnAdd=()=>{
        transferData(text);
    }
    return(
        <>
        <div className="inputboxdiv">
            <h3>Manage Your Todos</h3>
            <input id="inputbox" type="text" value={text} placeholder="Write Todo...." onChange={handlechange} />
            <button id="addbtn" onClick={handleOnAdd}>{editId && isTrue?"Save ":"Add"}</button>
        </div>

        
        </>
    )

}
export default InputBox