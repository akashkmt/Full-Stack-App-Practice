import React from 'react'
import './Todos.css'
import { useNavigate } from 'react-router-dom';

function Todos() {
    const [input,setInput] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [todos, setTodos] = React.useState([]);
    const navigate = useNavigate();

    const handleAddTodo = async () => {
        let body = {
            title: input,
            status: checked
        }
        let token = localStorage.getItem('token');
        try {
            // let res = 
            await fetch(`http://localhost:8080/createTodo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(body)
            });
            // let data = await res.json();
            // console.log(data);
            setInput('');
            setChecked(false);
            getAllTodes();
        } catch (error) {
            console.log(error);
        }
        // console.log(body);
    }

    const getAllTodes = async () => {
        let token = localStorage.getItem('token');
        try {
            let res = await fetch(`http://localhost:8080/getAllTodos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });
            let data = await res.json();
            // console.log(data);
            if(typeof data === 'array'){
                setTodos(data);
            }
            else{
                navigate('/')
            }
        } catch (error) {
            // console.log('called')
            console.log(error);
        }
    }
    
    React.useEffect(() => {
        getAllTodes();
    },[]);

  return (
    <div className='todo-box'>
        <div>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <input type="checkbox" checked={checked} onChange={(e)=>{setChecked(e.target.checked)}}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <div>
            {todos?.map((todo,index) => {
                return <div key={index}>
                    <p>{todo.title}</p>
                    <p>{todo.status? 'Completed': 'Not Completed'}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Todos