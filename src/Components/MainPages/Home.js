import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Home() {
    return (
      <div>
          <section className="slide fade-6 kenBurns">
          <div className="content">
            <div className="container">
              <div className="wrap">
                <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection">
                    <h1 className='wide fromCenter'>
                      <span className='ae-1'>get right </span> 
                      <span className='ae-5'>to the <br/> </span>
                      <span className='spanOrange ae-8'>good </span>
                      <span className='spanOrange ae-10'>parts</span>
                      </h1>
                      <h2 className='wide fromCenter ae-10'>Where parts are the trades, and quality <br/> is the merchandise.</h2>
                  </div>
                  {/* <div className="ae-10 fromCenter">
                    <h3>Head lines goes here</h3>
                  </div>
                  <p className="ae-10">
                    Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed
                  </p> */}
                </div>
              </div>
            </div>
                  <a href="#down" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <div
            className="background"
            style={{ backgroundImage: "url(assets/img/background/img-09.jpg)" }}
          /> */}
          {/* <div
            className="background"
            style={{ backgroundColor: "black" }}
          /> */}
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>

        
        <section className="slide fade-6 kenBurns fromLeft">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection">
                    <h1 className='wide fromLeft'>
                      <span className='ae-1'>Value is </span> 
                      <span className='ae-5'>what <br/> </span>
                      <span className='spanOrange ae-8'>you </span>
                      <span className='spanOrange ae-10'>get</span>
                      </h1>
                      <h2 className='wide fromLeft ae-10'>Supplying quality is our commitment,<br/>products grade is our promise.</h2>
                  </div>
                  {/* <div className="ae-10 fromCenter">
                    <h3>Head lines goes here</h3>
                  </div>
                  <p className="ae-10">
                    Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed
                  </p> */}
                </div>
              </div>
            </div>
                  <a href="#down" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <div
            className="background"
            style={{ backgroundImage: "url(assets/img/background/img-09.jpg)" }}
          /> */}
          {/* <div
            className="background"
            style={{ backgroundColor: "black" }}
          /> */}
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide fade-6 kenBurns fromRight">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>All Your <br/></span> 
                      <span className='spanOrange ae-5'>Veichle </span>
                      <span className='ae-8'>Needs </span>
                      </h1>
                      <h2 className='wide fromRight ae-10'>Is our dedication till parts fall<br/>into places.</h2>
                  </div>
                  {/* <div className="ae-10 fromCenter">
                    <h3>Head lines goes here</h3>
                  </div>
                  <p className="ae-10">
                    Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed
                  </p> */}
                </div>
              </div>
            </div>
                  <a href="#down" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <div
            className="background"
            style={{ backgroundImage: "url(assets/img/background/img-09.jpg)" }}
          /> */}
          {/* <div
            className="background"
            style={{ backgroundColor: "black" }}
          /> */}
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide fade-6 kenBurns fromCenter">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Our <span className='spanOrange ae-5'>Company</span></span> 
                      {/* <span className='spanOrange ae-5'>Veichle </span> */}
                      {/* <span className='ae-8'>Needs </span> */}
                      </h1>
                      <div className='row second-section'>
                        <div className='col-md-4'>
                          <h3 className='subtitle ae-1'>About Us</h3>
                          <p className='paragraph ae-3'>A leading company in dealing and importing vehicle spare parts, established in 1985, to begin reaching numerous accomplishments through contracting with the top-notch suppliers in Japan, Taiwan, and Korea.</p>
                          <a href='/' className='know-more ae-5'>Know More</a>
                        </div>
                        <div className='col-md-4 float-right'>
                          <h3 className='subtitle ae-1'>Our mission</h3>
                          <p className='paragraph ae-3'>To provide the Egyptian market with high-quality products to eliminate fraudulent and imitated products.
The company strives for the most qualified brands in the auto spare parts industry.</p>
                          <a href='/' className='know-more ae-5'>Know More</a>
                        </div>
                        <div className='col-md-7 margin-top'>
                          <h3 className='subtitle ae-7'>Our Vision</h3>
                          <p className='paragraph ae-9'>All-dimensions growth is our vision aim. <br/>
Ruling the Egyptian market is one vision, among leading the market internationally, through creating a trustworthy relationship between consumers and suppliers, administering the utmost quality of merchandise.</p>
                          <a href='/' className='know-more ae-10'>Know More</a>
                        </div>
                      </div>
                      {/* <h2 className='wide fromRight ae-10'>Is our dedication till parts fall<br/>into places.</h2> */}
                  </div>
                  {/* <div className="ae-10 fromCenter">
                    <h3>Head lines goes here</h3>
                  </div>
                  <p className="ae-10">
                    Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed
                  </p> */}
                </div>
              </div>
            </div>
            <a href="#down" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <div
            className="background"
            style={{ backgroundImage: "url(assets/img/background/img-09.jpg)" }}
          /> */}
          {/* <div
            className="background"
            style={{ backgroundColor: "black" }}
          /> */}
          <video autoPlay muted loop playsInline id="myVideoOrange">
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide fade-6 kenBurns fromCenter">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Our <span className='spanOrange ae-5'>Products</span></span> 
                      {/* <span className='spanOrange ae-5'>Veichle </span> */}
                      {/* <span className='ae-8'>Needs </span> */}
                      </h1>
                      <div className='row second-section'>
                        <div className='col-md-6'>
                          <h3 className='subtitle-product ae-1'>Daido Metal</h3>
                          <p className='paragraph-product ae-3'>Designed and manufactured among high standards.</p>
                          <p className='details'>- <br/>Japanese successful company</p>
                          <div className='row products-row'>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product1.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Main bearing</a></p>
                              </a>
                            </div>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product2.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Con-Rod Bearing</a></p>
                              </a>
                            </div>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product3.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Piston Pin Bushing</a></p>
                              </a>
                            </div>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product4.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Thrust Washer</a></p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 float-right'>
                          <h3 className='subtitle-product ae-1'>GMB</h3>
                          <p className='paragraph-product ae-3'>Premium technology.<br/></p>
                          <p className='details'>- <br/>Japanese excelling company</p>
                          <div className='row products-row'>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product4.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Water pump</a></p>
                              </a>
                            </div>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product5.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Fan clutch</a></p>
                              </a>
                            </div>
                            <div className='col-3'>
                              <a href='#'>
                              <img src='assets/gebriel-motors/product6.png'  className='pb-4'/>
                              <p className='product-name'><a href='#' className='product-a'>{">> "}&nbsp;Universal Joints</a></p>
                              </a>
                            </div>
                            </div>
                            
                        </div>
                      </div>
                      {/* <h2 className='wide fromRight ae-10'>Is our dedication till parts fall<br/>into places.</h2> */}
                  </div>
                  {/* <div className="ae-10 fromCenter">
                    <h3>Head lines goes here</h3>
                  </div>
                  <p className="ae-10">
                    Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed
                  </p> */}
                </div>
              </div>
            </div>
            <a href="#down" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <div
            className="background"
            style={{ backgroundImage: "url(assets/img/background/img-09.jpg)" }}
          /> */}
          {/* <div
            className="background"
            style={{ backgroundColor: "black" }}
          /> */}
          <video autoPlay muted loop playsInline id="myVideoOrange">
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
        </section>
      </div>
    )
  }
  
  export default Home;
  