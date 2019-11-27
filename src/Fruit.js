import React from 'react'

 const Fruit = (props)=> {
    return (
        <div style={{backgroundColor: props.color}}>
            
            {props.someProps}
        </div>
    )
}
export default Fruit;