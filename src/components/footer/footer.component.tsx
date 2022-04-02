import './footer.styles.scss';
import { Link } from 'react-router-dom';
import {BsTwitter, BsFacebook, BsInstagram, BsPinterest,BsVimeo} from 'react-icons/bs'

export default function Footer(){
    return(
        <footer>
            <div className="footer__wrapper">
                <div className="footer__wrapper--flex-one">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, accusantium repellendus? Assumenda, earum.</p>

                    <div className="media-icons">
                    <BsTwitter />
                    <BsFacebook />
                    <BsInstagram />
                    <BsPinterest />
                    <BsVimeo />
                    </div>
                </div>
                <div className="footer__wrapper--flex-two">
                    <h2 className='title'>Sklep</h2>
                    <Link to="/wheels">Opony</Link>
                    <Link to="/oils">Oleje</Link>
                    <Link to="/suspension">Zawieszenia</Link>
                    <Link to="/care">Zadbaj o auto!</Link>
                </div>
                <div className="footer__wrapper--flex-three">
                    <h2 className='title'>Firma</h2>
                    <Link to="/login">Zaloguj się</Link>
                    <Link to="/register">Zarejestruj się</Link>
                    <Link to="/wishlist">Lista życzeń</Link>
                    <Link to="/our_products">Nasze pordukty</Link>
                </div>
                <div className="footer__wrapper--flex-four">
                    <h2 className='title'>Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo quo doloremque eius ut reprehenderit hic commodi officiis ea?</p>
                    <input type="text"
                        placeholder='Enter your email address'
                    />
                </div>    
            </div>
        </footer>
    )
}

