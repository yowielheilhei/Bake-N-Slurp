// ==========================================
// 1. Define the Global Navigation Header
// ==========================================
class BakeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo">
                <img src="assets/images/navigationbar/bakenslurplogoblack.png" alt="Bake 'n Slurp Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="Index.html">Home</a></li>
                    <li><a href="our-story.html">Our Story</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Connect with Us</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}
// Register the new HTML tag
customElements.define('bake-header', BakeHeader);

// ==========================================
// 2. Define the Global Footer
// ==========================================
class BakeFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container footer-grid">
                <div class="footer-logo">
                    <img src="assets/images/footer/bakanslurpwhite.png" alt="Bake 'n Slurp">
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="our-story.html">Our Story</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="services.html">Services</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>09202649380</li>
                        <li>iloveyoubebeko67@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h4>Address</h4>
                    <ul>
                        <li>Balisong, Taal, Batangas</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                &copy; 2026 Bake 'n Slurp. All Rights Reserved.
            </div>
        </footer>
        `;
    }
}
// Register the new HTML tag
customElements.define('bake-footer', BakeFooter);

window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    
    if (loader) {
        // Add the CSS class that fades the loader out
        loader.classList.add('loader-hidden');
    }
});