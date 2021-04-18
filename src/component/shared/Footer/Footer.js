import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Main practice areas of the firm include Admiralty, Maritime and Ship Arrest, Arbitration, Mediation and ADRs, Aviation Matters, Banking, Finance & Investment, Capital Market, Commercial Litigation, Commercial Transactions, International Trade, Construction & Engineering., Foreign Investment and Business Set-Up. firm include Admiralty, Maritime and Ship Arrest, Arbitration"}
        
    ]
    const ourAddress = [
        {name: "14/A, Brown Tower, NewYork, US" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Facial & Therophy" , link: "/Facial & Therophy"},
        {name: "Parlar & Beauty" , link: "/Parlar & Beauty"},
        {name: "Eye & Shadow" , link: "/Eye & Shadow"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both bg-color">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+3025552225</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;