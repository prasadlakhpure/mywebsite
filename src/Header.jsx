
import "./Header.css";


const Header = () => {


    return (
        <>
            <header className="main-header  sticky-header">
                <div className="header-content">
                    <div className="center">
                        GlobalEdu
                    </div>
                    <ul className="left">
                        <li >Home</li>
                        <li >About</li>
                        <li>Categories</li>
                        <li>Search</li>
                    </ul>


                </div>
            </header>

        </>
    );
};

export default Header;