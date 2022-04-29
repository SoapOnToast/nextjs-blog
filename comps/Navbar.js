import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div class="logo">
                <Link href="/">
                    <h1><a href="">Logo</a></h1>
                </Link>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/page1">
                <a>Page 1</a>
            </Link>
        </nav>
     );
}
 
export default Navbar;