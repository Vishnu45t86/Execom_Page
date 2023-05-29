import "./Footer_styles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <section>

            </section>
            <footer className="footer">
                <div className="container-1">
                    <div className="footer-main">
                        <h1 style={{ color: "#016ca1" }}>IEEE SB NITC</h1>
                        <img src="./Logo.svg" alt="IEEE SB NITC LOGO" className="logo" />
                        <p>Thank you for visiting our website!
                            "Prepare to embark on a captivating journey through the corridors of innovation.We warmly appreciates your visit and support</p>

                        <div className="social-media">
                            <a href="https://www.facebook.com/IeeeNitc/"  ><FacebookIcon fontSize="large" style={{ color: " rgb(1, 108, 169)" }} /> </a>
                            <a href="https://www.instagram.com/ieee_nitc/?hl=en" > <InstagramIcon fontSize="large" style={{ color: " rgb(1, 108, 169)" }} /> </a>
                            <a href="https://in.linkedin.com/company/ieee-sb-nitc" > <LinkedInIcon fontSize="large" style={{ color: " rgb(1, 108, 169)" }} /> </a>
                        </div>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>QUICK LINKS</h2></li>
                            <li><a href="#">IEEE.ORG</a> </li>
                            <li><a href="#">IEEE XTREME</a></li>
                            <li><a href="#">IEEE Xplore</a></li>
                            <li><a href="#">IEEE</a></li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>MEMBERSHIPS</h2></li>
                            <li><a href="#">Join IEEE</a> </li>
                            <li><a href="#">Join a Society</a></li>
                            <li><a href="#">Renew Membership</a></li>
                            <li><a href="#">Info</a></li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>SOCIETIES</h2></li>
                            <li><a href="#">IAS</a> </li>
                            <li><a href="#">EDS</a></li>
                            <li><a href="#">CS</a></li>
                            <li><a href="#">CAS</a></li>
                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>AFFINITY AND SPECIAL INTEREST GROUP</h2></li>
                            <li><a href="#">WIE</a> </li>
                            <li><a href="#">SIGHT</a></li>
                        </ul>

                    </div>


                </div>



                <div class="bottom-content">
                    <div className="container-2">
                        <hr style={{
                            backgroundColor: " #000000",
                            border: "0.2px solid #0000",
                            borderRadius: "7px 7px 7px 7px",
                            height: "0.2px"
                        }} />


                        <div class="bottom">
                            {`©️Copyright ${year} IEEE SB NITC.All rights reserved`}
                        </div>
                    </div>


                </div>


            </footer >
        </>
    )
}