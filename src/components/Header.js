function Header(props) {
  return (
    <header className='header'>
      <img className='header__logo' src={props.logo} lang='en' alt='Mesto - Russia Logo'/>
    </header>
  );
}

export default Header;