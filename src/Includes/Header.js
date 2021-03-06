import React from 'react';
import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation();

    return (
      <div>
      <nav className="side pole">
  <div className="navigation">
    <ul />
  </div>
</nav>
      <nav className="panel top">
  <div className="sections desktop">
    <div className="left">
      <a href="/#home" title="Gebriel-Motors">
        {/* <svg style={{ width: 82, height: 24 }}>
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" />
        </svg> */}
        <img className="logo" src="assets/gebriel-motors/logo.png" role="..." alt="..."/>
      </a>
    </div>
    <div className="center">
    <ul className="menu trim">
      </ul>

    </div>
    {console.log(location.hash)}
    <div className="right">
      {location.hash === "#home" ? 
    <ul className="menu uppercase">
        <li>
          <a className="Selected" href="#home">Home</a>
        </li>
        <li>
          <a href="#our-company">Our Company</a>
        </li>
        <li>
          <a href="#products">Our Products</a>
        </li>
        <li>
          <a href="#why-us">Why Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li>
            <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
                <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
            </a>
        </li>
      </ul>
              : location.hash === "#home2" ? 
        
              <ul className="menu uppercase">
              <li>
                <a className="Selected" href="#home">Home</a>
              </li>
              <li>
                <a href="#our-company">Our Company</a>
              </li>
              <li>
                <a href="#products">Our Products</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                  <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
                      <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
                  </a>
              </li>
            </ul>
                    : location.hash === "#home3" ? 
        
                    <ul className="menu uppercase">
                    <li>
                      <a className="Selected" href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#our-company">Our Company</a>
                    </li>
                    <li>
                      <a href="#products">Our Products</a>
                    </li>
                    <li>
                      <a href="#why-us">Why Us</a>
                    </li>
                    <li>
                      <a href="#contact-us">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
                            <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
                        </a>
                    </li>
                  </ul>
                  : location.hash === "#" ? 
                  <ul className="menu uppercase">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#our-company">Our Company</a>
                    </li>
                    <li>
                      <a href="#products">Our Products</a>
                    </li>
                    <li>
                      <a href="#why-us">Why Us</a>
                    </li>
                    <li>
                        <a href="#contact-us">Contact Us</a>
                      </li>
                    <li>
                        <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
                            <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
                        </a>
                    </li>
                  </ul>
        : location.hash === "#our-company" ? 
        
        <ul className="menu uppercase">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a className="Selected" href="#our-company">Our Company</a>
        </li>
        <li>
          <a href="#products">Our Products</a>
        </li>
        <li>
          <a href="#why-us">Why Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li>
            <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
                <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
            </a>
        </li>
      </ul>
      : location.hash === "#products" ? 
      <ul className="menu uppercase">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#our-company">Our Company</a>
      </li>
      <li>
        <a className="Selected" href="#products">Our Products</a>
      </li>
      <li>
        <a href="#why-us">Why Us</a>
      </li>
      <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      <li>
          <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
              <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
          </a>
      </li>
    </ul>
    : location.hash === "#why-us" ? 
    <ul className="menu uppercase">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#our-company">Our Company</a>
      </li>
      <li>
        <a href="#products">Our Products</a>
      </li>
      <li>
        <a className="Selected" href="#why-us">Why Us</a>
      </li>
      <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      <li>
          <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
              <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
          </a>
      </li>
    </ul>
    : location.hash === "#contact-us" ? 
    <ul className="menu uppercase">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#our-company">Our Company</a>
      </li>
      <li>
        <a href="#products">Our Products</a>
      </li>
      <li>
        <a href="#why-us">Why Us</a>
      </li>
      <li>
          <a className="Selected" href="#contact-us">Contact Us</a>
        </li>
      <li>
          <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
              <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
          </a>
      </li>
    </ul>
    : location.pathname === "/our-company" ? 
        
    <ul className="menu uppercase">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="#our-company" className="Selected">Our Company</a>
    </li>
    <li>
      <a href="/#home">Our Products</a>
    </li>
    <li>
      <a href="/#home">Why Us</a>
    </li>
    <li>
      <a href="/#home">Contact Us</a>
    </li>
    <li>
        <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
            <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
        </a>
    </li>
  </ul>
  : location.pathname === "/why-us" ? 
        
  <ul className="menu uppercase">
  <li>
    <a href="/#home">Home</a>
  </li>
  <li>
    <a href="/#home">Our Company</a>
  </li>
  <li>
    <a href="/#home">Our Products</a>
  </li>
  <li>
    <a href="#" className="Selected">Why Us</a>
  </li>
  <li>
    <a href="/#home">Contact Us</a>
  </li>
  <li>
      <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
          <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
      </a>
  </li>
</ul>
    :
    <ul className="menu uppercase">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#our-company">Our Company</a>
      </li>
      <li>
        <a href="#products">Our Products</a>
      </li>
      <li>
        <a href="#why-us">Why Us</a>
      </li>
      <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      <li>
          <a href="#" className="desktopButton desktopActionButton sidebarTrigger" data-sidebar-id={1}>
              <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
          </a>
      </li>
    </ul>
    }
    </div>
  </div>
  <div className="sections compact hidden">
    <div className="left">
      <a href="#home" title="Gebriel-Motors">
        <img style={{ width: 112, height: 33 }} src="assets/gebriel-motors/logo.png" role="..." alt="..."/>
      </a>
    </div>
    <div className="right">
      <span className="button actionButton sidebarTrigger" data-sidebar-id={1}>
        <img src="assets/gebriel-motors/sidebar.png" alt="..." role="..."/>
      </span>
    </div>
  </div>
</nav>


 {/* Sidebar */}
 <nav className="sidebar" data-sidebar-id={1}>
    <div className="close">
      <svg>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
      </svg>
    </div>
    <div className="content">
      <a href="/" className="logo">
        <img style={{ width: 82, height: 24 }} src="assets/gebriel-motors/logo.png" role="..." alt="..."/>
      </a>
      <ul className="mainMenu margin-top-3">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#our-company">About Us</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#why-us">Why Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      
      <ul className="social opacity-8">
        <li>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#facebook"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#instagram"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>



      </div>
    )
  }
  
  export default Header;
  