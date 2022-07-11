import { useState, useEffect } from 'react';

const Todo = props => {

    const [done, setDone] = useState(false);

    const clickHandler = () => {
        setDone(done => !done)
        props.onClick(done)
    }


    return (
        <div className="todo" onClick={clickHandler} style={{ backgroundColor: done ? 'green' : 'white' }}>
            <h2 style={{ opacity: done ? '0' : '1' }}>{props.todo}</h2>
        </div>
    );
}

export default Todo;