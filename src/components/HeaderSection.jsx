import HeaderSectionImg from '../assets/images/HeaderSection/IMG.png';
import HeaderExplore from '../assets/images/HeaderSection/header-section-div.png';
import { Link } from 'react-router-dom';

function HeaderSection() {
  return (
    <>
      <div className='header-section'>
        <h2 className='header-title'>Estilo auténtico, <br />mirada <span>Naturel</span></h2>
        <div className='header-explore relative '>
          <img src={HeaderExplore} alt="Fondo Explorar" className="header-explore-img w-full max-w-screen-xl mx-auto" />
          <Link to="/" className="link-style">
            <p className="link-content text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Explora
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon ml-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </p>
          </Link>
        </div>
        <img src={HeaderSectionImg} alt="Header Section Img" className="header-img" />
      </div>
    </>
  );
}

export default HeaderSection;
