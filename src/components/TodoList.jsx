const TodoList = ({ id, text, status, deleteitem,edititem,handleCheckBox}) => {
   
    return (
        <>
            <div className={`listItems ${status ? 'doneBackground' : ''}`}>
                <div className="checkdata">
                    <input type="checkbox"onChange={()=>handleCheckBox(id)}></input>
                    <p className={status?"Done":"NotDone"} >{text}</p>
                </div>
                <div className="buttons">
                    <button id="editbtn" onClick={()=>{edititem(id)}}><i class="fa-regular fa-pen-to-square fa-beat"></i></button>
                    <button id="delbtn" onClick={() => { deleteitem(id) }}><i class="fa-solid fa-trash fa-shake"></i></button>
                </div>
            </div>

        </>
    )

}
export default TodoList