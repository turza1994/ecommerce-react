import React from 'react';

const Test = (props)=>{
    // console.log(props);
    return(
        <h1>This is {props.match.params.test} page</h1>
    )
}

export default Test