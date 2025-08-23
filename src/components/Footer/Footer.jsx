import React from "react";
import "./Footer.css";
import { assets } from "../../assets/admin_assets/assets.js";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="logo-container">
                        <img src={assets.logo} alt="E-Gitsawe Logo" />
                        <div className="logo-text">
                            <span className="amharic-title">ኢ-ግጻዌ</span>
                            <span className="amharic-subtitle">እና ስንክሳር</span>
                        </div>
                    </div>
                    <p className="footer-description">
                        የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የዲጂታል መጽሐፍት 
                        ቤት። የሊተርጂካል የቀን መቁጠሪያ፣ የቅዱሳን ዜመናት፣ 
                        የጸሎት ሰዓታት እና መፅሐፍ ቅዱሳዊ ምንጮች።
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://web.facebook.com/hailemariam.eyayu.3/"><img src={assets.facebook_icon} alt="Facebook" /></a>
                        <a href="https://twitter.com/Hailemariam1994"><img src={assets.twitter_icon} alt="Twitter" /></a>
                        <a href="https://wa.me/251938169557"><img src={assets.WhatsApp} alt="WhatsApp" /></a>
                        <a href="https://t.me/HaileEden"><img src={assets.telegram_icon} alt="Telegram" /></a>
                        <a href="https://www.linkedin.com/in/hailemariam-eyayu/"><img src={assets.linkedin_icon} alt="Linkedin" /></a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2 className="section-title">ፈጣን አገናኞች</h2>
                    <ul>
                        <li><a href="#">መግቢያ</a></li>
                        <li><a href="#">ስለ እኛ</a></li>
                        <li><a href="#">ጸሎቶች</a></li>
                        <li><a href="#">የጥበቃ መመሪያ</a></li>
                        <li><a href="#">የአገልግሎት ውሎች</a></li>
                    </ul>
                </div>

                <div className="footer-content-center">
                    <h2 className="section-title">መርጃዎች</h2>
                    <ul>
                        <li><a href="#">የሊተርጂካል የቀን መቁጠሪያ</a></li>
                        <li><a href="#">ዕለታዊ ንባቦች</a></li>
                        <li><a href="#">የጸሎት ሰዓታት</a></li>
                        <li><a href="#">የዕለት ቅዱሳን</a></li>
                        <li><a href="#">መንፈሳዊ ማጠናከሪያ</a></li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2 className="section-title">አግኙን</h2>
                    <ul className="contact-info">
                        <li>
                            <img src={assets.phone_icon} alt="Phone" />
                            <span>+251-938169557</span>
                        </li>
                        <li>
                            <img src={assets.email_icon} alt="Email" />
                            <span>hailemariameyayu2012@gmail.com</span>
                        </li>
                        <li>
                            <img src={assets.location_icon} alt="Location" />
                            <span>አዲስ አበባ, ኢትዮጵያ</span>
                        </li>
                    </ul>
                    <div className="prayer-request">
                        <h3>በጸሎት አስቡኝ</h3>
                        <p> ገብረ ጊዮርጊስ!</p>
                        <button className="prayer-button">አትርሱኝ</button>
                    </div>
                </div>
            </div>
            
            <div className="footer-divider">
                <div className="cross-icon">✝</div>
            </div>
            
            <div className="footer-bottom">
                <p className="footer-copyright">
                    መብቱ በህግ የተጠበቀ © 2017 ዓ.ም ኢ-ግጻዌ_እና_ስንክሳር.ግጻዌ.ሁሉም መብቶች የተጠበቁ ናቸው
                </p>
                <div className="footer-blessing">
                    <span>ተዘከረነ እግዚኦ በውስተ መንግሥትከ።</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;