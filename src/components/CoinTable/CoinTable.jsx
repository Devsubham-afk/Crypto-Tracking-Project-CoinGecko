import { useEffect, useState } from "react";

function CoinTable(){

    const [count,setCount] = useState(0);

    const [flag, setFlag] = useState(false);
;
    async function download() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    useEffect(()=>{
        //because the dependency array is empty,this effect will only run once 
        //when the compoent mounts
        download();
    },[count]);

    useEffect(()=>{
        //because the dependency array is empty,this effect will only run once 
        //when the compoent mounts
        console.log("Flag Changed");
    },[flag]);

    useEffect(()=>{
        //because the dependency array is empty,this effect will only run once 
        //when the compoent mounts
        console.log("Flag Changed Everytiem");
    });

    useEffect(()=>{
        //because the dependency array is empty,this effect will only run once 
        //when the compoent mounts
        console.log("Coount or Flag Changed");
    },[count,flag]);

    return(
        <>
            CoinTable;
            {count};
            <br />
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br />
            {flag && <div>Flag is true</div>}
            <br />
            <button onClick={()=>setFlag(!flag)}>Toggle</button>
        </>
    )
}
export default CoinTable;