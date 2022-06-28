import headerLogo from '../images/header-logo.svg';

function Header() {
    return (
    <>
    <header className="header">
        <img className="header__logo" src={headerLogo} lang="en" alt="Mesto - Russia Logo"/>
    </header>
    </>
    );
}

export default Header;