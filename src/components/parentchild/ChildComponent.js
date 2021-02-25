import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('Child')}>Click</button>
        </div>
    )
}

export default ChildComponent
