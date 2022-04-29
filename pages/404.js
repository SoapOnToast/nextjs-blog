import Link from 'next/link'
import { useEffect, useState } from 'react';
import Countdown from './Countdown';

const NotFound = () => {
    const number = useState(10);
    
    return ( 
        <div className="not-found">
            <h1>Uh oh...</h1>
            <h2>That page can not be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
            {/* <p><Countdown count={number} /></p> */}
        </div>
     );
}
 
export default NotFound;