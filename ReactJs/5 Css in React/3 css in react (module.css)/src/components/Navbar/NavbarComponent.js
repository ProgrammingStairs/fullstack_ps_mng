import navbarStyles from './navbar.module.css';
function NavbarComponent(){
    return (<>
           <div className={navbarStyles.nav}>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Product &#9662;</a>
                    <ul>
                        <li><a href="">Product 1</a></li>
                        <hr className={navbarStyles.line}/>
                        <li><a href="">Product 2</a></li>
                        <hr className={navbarStyles.line}/>
                        <li><a href="">Product 3</a></li>
                        <hr className={navbarStyles.line}/>
                        <li><a href="">Product 4</a></li>
                        <hr className={navbarStyles.line}/>
                        <li><a href="">Product 5</a></li>
                        <hr className={navbarStyles.line}/>
                        <li><a href="">Product 6</a></li>
                    </ul>
                </li>
                <li><a href="">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="account.html">Account</a></li>
            </ul>
        </div>
    </>);
}

export default NavbarComponent;