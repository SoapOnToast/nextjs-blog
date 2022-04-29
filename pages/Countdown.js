import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';


function Countdown() {
    const router = useRouter();
    const [count,setCount]=useState(10);
    useEffect(()=>{
            setInterval(()=>{
                if(count != 0){
                    setCount(count-1)
                }
                else {
                    router.push('/');
                }
            },1000)
    })
    return (
            <p>Being Redirected in {count}</p>
     );
}
 
export default Countdown;