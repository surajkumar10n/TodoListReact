import { useState } from "react"
import InputBox from "./InputBox"
import "./mainbox.css"
import TodoList from "./TodoList";

const MainBox = () => {
    const [text, setText] = useState();
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null)

    const transferData = (data) => {
        if (editId) {
            const editItemData = list.map((data1) => data1.id === editId ? ({ ...data1, text: data }) : data1);
            setList(editItemData)
            setText("")
            setEditId(null)
        }
        else if (text !== "") {
            const objData = {
                text: data,
                id: new Date().getTime().toString(),
                status: false

            }
            setList([...list, objData])
            setText("")
            // setEditId(null)
        }


    }
    const deleteitem = (id) => {
        const deletedata = list.filter((data) => {
            return data.id !== id
        })
        setList(deletedata)

    }
    const edititem = (id) => {
        const editData = list.find((data) => data.id === id)
        console.log(id);
        setText(editData.text)
        setEditId(editData.id)

    }
    const handleCheckBox=(id)=>{
        const checkid=list.map((token)=>token.id===id?({...token,status:!token.status}):token);
        setList(checkid)
        setEditId(checkid)
        setEditId(null)

    }
    return (
        <div className="mainbox">
            <div >
                <InputBox text={text} setText={setText} transferData={transferData} editId={editId} />
                {list.map((items) => {
                    return (
                        <>
                            <div>
                                <TodoList {...items} key={items.key} deleteitem={deleteitem} edititem={edititem} handleCheckBox={handleCheckBox}></TodoList>
                                <br />
                            </div>

                        </>
                    )

                })}
            </div>
        </div>
    )
}
export default MainBox