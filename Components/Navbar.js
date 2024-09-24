class Header extends HTMLElement {
  constructor(){
    super();

    connectedCallback() {
        this.innerHTML = `

         <div id="nav">
            <div id="navtitle" class="navtitle">
                <p>LGNY Web Designs</p>
            </div>
            <div class="dropdown">
                <button class="dropbtn">≡</button>
                <div class="dropdown-content">
                    <a href="index.html">Home</a>
                    <a href="about.html">Services</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
   ` ;
    }
}
}
customElements.define('header-comp', Header);