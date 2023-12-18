import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {


  return (
    <>
      <hr />
      <div className="footer">
        <p className="text-center text-gray-500">© 2023 Look Naturel. Todos los derechos reservados.</p>
        <div className='footer-icons'>
          <a href="https://www.instagram.com/looknaturel/" target="_blank" rel="noopener noreferrer" className="texto-footer-link text-gray-500">
            <InstagramIcon />
          </a><br />
          <a href="https://walink.co/b30bb9" target="_blank" rel="noopener noreferrer" className="texto-footer-link text-gray-500">
            <WhatsAppIcon />
          </a>
        </div>
      </div >
    </>
  )
}

export default Footer;
