import {useState} from 'react';
const Visible=()=>{
    const [isVisible,setVisible]=useState(true);
    return (
        <div>
            <button onClick={()=>setVisible(!isVisible)}>{isVisible?'Hide':'show'}</button>
            {isVisible && (<p>Hello cooper family</p>)}
        </div>
    )
}
export default Visible;