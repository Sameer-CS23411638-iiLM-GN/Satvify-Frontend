import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <h2>Satvify</h2>
                    <p>Healthy vegan and satvik meals delivered fresh daily.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                © 2026 Satvify. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;