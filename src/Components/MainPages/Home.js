import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../Includes/Footer';
const responsive_products = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const responsive_contact = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide:1  // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Home() {
    return (
      <div>
        
        <section className="slide fade-6 kenBurns" id="home">
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
                </div>
              </div>
            </div>
                  <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>

        
        <section className="slide fade-6 kenBurns fromLeft" id="home2">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection">
                    <h1 className='wide fromLeft'>
                      <span className='spanOrange ae-1'>Value </span> 
                      <span className='ae-5'>is what <br/> </span>
                      <span className='ae-8'>you </span>
                      <span className='ae-10'>get</span>
                      </h1>
                      <h2 className='wide fromLeft ae-10'>Supplying quality is our commitment,<br/>products grade is our promise.</h2>
                  </div>
                </div>
              </div>
            </div>
                  <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide fade-6 kenBurns fromRight" id="home3">
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
                </div>
              </div>
            </div>
                  <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          <video autoPlay muted loop playsInline id="myVideo">
          <source src="assets/car-engine2.mp4" type="video/mp4" />
        </video>
        </section>
  
        <section className="slide kenBurns fromCenter" id="our-company">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-12 ">
                  <div className="fix-12-12 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Our <span className='spanOrange ae-5'>Company</span></span> 
                      </h1>
                      <div className='row second-section'>
                        <div className='col-md-4'>
                          <h3 className='subtitle ae-1'>About Us</h3>
                          <p className='paragraph ae-3'>A leading company in dealing and importing vehicle spare parts, established in 1985, to begin reaching numerous accomplishments through contracting with the top-notch suppliers in Japan, Taiwan, and Korea.</p>
                          <p className='know-more ae-5'><a href="/our-company" target={"_blank"}>Know More</a></p>
                        </div>
                        <div className='col-md-4 float-right'>
                          <h3 className='subtitle ae-1'>Our mission</h3>
                          <p className='paragraph ae-3'>To provide the Egyptian market with high-quality products to eliminate fraudulent and imitated products.
The company strives for the most qualified brands in the auto spare parts industry.</p>
                          <p className='know-more ae-5'><a href="/our-company" target={"_blank"}>Know More</a></p>
                        </div>
                        <div className='col-md-7'>
                          <h3 className='subtitle ae-7'>Our Vision</h3>
                          <p className='paragraph ae-9'>All-dimensions growth is our vision aim. <br/>
Ruling the Egyptian market is one vision, among leading the market internationally, through creating a trustworthy relationship between consumers and suppliers, administering the utmost quality of merchandise.</p>
                          <p className='know-more ae-5'><a href="/our-company" target={"_blank"}>Know More</a></p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          <video autoPlay muted loop playsInline id="myVideoOrange">
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide kenBurns fromCenter" id="products">
        <div className="content">
            <div className="container">
              <div className="wrap">
              <div className="fix-12-8 ">
                  <div className="fix-12-8 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Our <span className='spanOrange ae-5'>Products</span></span> 
                      </h1>
                      <Carousel responsive={responsive_products} className='second-section'>
                      <div className='col-md-12 fromBottomLeft'>
                          <h3 className='subtitle-product ae-1'>Daido Metal</h3>
                          <p className='paragraph-product ae-3'>Designed and manufactured among high standards.</p>
                          <p className='details ae-5'>- <br/>Japanese successful company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-6 a-products-hover'>
                              <img src='assets/gebriel-motors/product1.png' data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Main bearing</p>
                            </div>
                            <div className='col-3 ae-7 a-products-hover'>
                              <img src='assets/gebriel-motors/product2.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Con-Rod Bearing</p>
                            </div>
                            <div className='col-3 ae-8 a-products-hover'>
                              <img src='assets/gebriel-motors/product3.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Piston Pin Bushing</p>
                            </div>
                            <div className='col-3 ae-9 a-products-hover'>
                              <img src='assets/gebriel-motors/product4.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Thrust Washer</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12 fromBottomLeft'>
                          <h3 className='subtitle-product ae-1'>GMB</h3>
                          <p className='paragraph-product ae-3'>Premium technology.<br/></p>
                          <p className='details ae-5'>- <br/>Japanese excelling company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-6 a-products-hover'>
                              <img src='assets/gebriel-motors/product5.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Water pump</p>
                            </div>
                            <div className='col-3 ae-8 a-products-hover'>
                              <img src='assets/gebriel-motors/product6.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Fan clutch</p>
                            </div>
                            <div className='col-3 ae-10 a-products-hover'>
                              <img src='assets/gebriel-motors/product7.png'   data-action="zoom" className='shadow rounded ae-8 pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Universal Joints</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>FUJI OOZX</h3>
                          <p className='paragraph-product ae-3'>Innovative technologies.</p>
                          <p className='details ae-5'>- <br/>Japanese driving company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product8.png'   data-action="zoom" className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Engine Valves</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>RIKEN</h3>
                          <p className='paragraph-product ae-3'>Innovative pioneers.</p>
                          <p className='details ae-5'>- <br/>Japanese surpassing company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product9.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Piston Rings</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>ART</h3>
                          <p className='paragraph-product ae-3'>Distinguished advanced technologies.</p>
                          <p className='details ae-5'>- <br/>Japanese Leading Company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product10.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Piston Rings</p>
                            </div>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product11.png' className='pb-4'/>
                              {/* <p className='product-name'>{">> "}&nbsp;Piston Rings</p> */}
                            </div>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product12.png' className='pb-4'/>
                              {/* <p className='product-name'>{">> "}&nbsp;Piston Rings</p> */}
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>TPR</h3>
                          <p className='paragraph-product ae-3'>Great experience with advanced technology.</p>
                          <p className='details ae-5'>- <br/>Japanese auspicious Company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product13.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Piston Rings</p>
                            </div>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product14.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Cylinder Liners</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>MATSUE</h3>
                          <p className='paragraph-product ae-3'>One of our prime suppliers high-end cylinder liners.</p>
                          <p className='details ae-5'>- <br/>Exclusive Distributor</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product15.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Cylinder Liners</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>TBK</h3>
                          <p className='paragraph-product ae-3'>High technological products.</p>
                          <h5 className='paragraph-subtitle'>TBK water pumps are available upon request.</h5>
                          <p className='details ae-5'>- <br/>Japanese ruling company</p>
                          <div className='row products-row'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product16.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Oil Pumps</p>
                            </div>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product17.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Oil pump <br/> assembly cover</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product ae-1'>MAHLE IZUMI</h3>
                          <p className='paragraph-product ae-3'>Quality award-winning  |  One of our prime suppliers <br/> Our products are used within worldwide race tracks</p>
                          <p className='details-1 ae-5'>- <br/>Japanese Guiding Company</p>
                          <div className='row products-row'>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product18.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Piston set</p>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product19.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product20.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product21.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Cylinder Liners</p>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product22.png' className='pb-4'/>
                              <p className='product-name'>{">> "}&nbsp;Liner kit</p>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product23.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product24.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product25.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product26.png' className='pb-4'/>
                            </div>
                            <div className='col ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product27.png' className='pb-4'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>

                        </div>
                        <div className='col-md-12'>
                          <h3 className='subtitle-product margin-left ae-1'>KGK</h3>
                          <p className='paragraph-product margin-left ae-3'>One of our prime suppliers. <br/> Suppliers of high-performance products</p>
                          <p className='details-1 margin-left ae-5'>- <br/>Exclusive Distributor</p>
                          <div className='row products-row p-5 special'>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product28.png' className='pb-4'/>
                            </div>
                            <div className='col-3 ae-5 a-products-hover'>
                              <img src='assets/gebriel-motors/product29.png' className='pb-4'/>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                  {/* <a href='#' className='see-more ae-10'>See more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          {/* <video autoPlay muted loop playsInline id="myVideoOrange">
          <source src="assets/video.mp4" type="video/mp4" />
        </video> */}
        </section>

        <section className="slide kenBurns fromCenter" id="why-us">
        <div className="content">
            <div className="container">
              <div className="wrap">
                  <div className="fix-12-12 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Why <span className='spanOrange ae-5'>Us</span></span> 
                      </h1>
                      <div className='second-section'>
                        <div className='row'>
                        <div className='col-md-4'>
                          <h3 className='subtitle ae-1'>Our aspects</h3>
                          <p className='paragraph ae-3'>Gebriel Motors is a high-quality ruling company in the industry, founded among strict standpoint of promoting and providing only high-grade products through hiring top experts in the field.</p>
                          <p className='know-more ae-5'><a href="/why-us" target={"_blank"}>Know More</a></p>
                        </div>
                        <div className='col-md-8 mar-l'>
                          <h3 className='subtitle ae-7'>Our values</h3>
                          <p className='know-more ae-8'>—Honesty, equity, and integrity are the foundation of all our values</p>
                          <p className='paragraph ae-9'> {" >> "} &nbsp;&nbsp; Customer Eelationship</p>
                          <p className='paragraph ae-9'> {" >> "} &nbsp;&nbsp; Premium Quality</p>
                          <p className='paragraph ae-9'> {" >> "} &nbsp;&nbsp; Integrity</p>
                          <p className='know-more ae-10'><a href="/why-us" target={"_blank"}>Know More</a></p>
                        </div>
                        </div>
                        <div className='col-md-4 mt'>
                          <h3 className='subtitle ae-1'>Fully integrated system</h3>
                          <p className='paragraph ae-5'> {" >> "} &nbsp;&nbsp; +34 years of experience</p>
                          <p className='paragraph ae-9'> {" >> "} &nbsp;&nbsp; +45 world-class recognized partners</p>
                          <p className='know-more ae-10'><a href="/why-us" target={"_blank"}>Know More</a></p>
                        </div>
                      </div>
                  </div>
              </div>
                    {/* <img src="assets/gebriel-motors/why-us.png" className='why-us-img-padding'/> */}
            </div>
            <a href="#contact-us" className="contact-us">contact us <img src="assets/gebriel-motors/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          </div>
          <video autoPlay muted loop playsInline id="myVideoOrange">
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
        </section>

        <section className="slide kenBurns fromCenter" id="contact-us">
        <div className="content">
            <div className="container">
              <div className="wrap">
                  <div className="fix-12-12 mainSection2">
                    <h1 className='wide fromRight'>
                      <span className='ae-1'>Contact <span className='spanOrange ae-5'>Us</span></span> 
                      </h1>
                      <h3 className='wide fromRight'>
                      <span className='ae-1'>Don't <span className='spanOrange ae-5'>hesitate</span> to <span className='spanOrange ae-7'>contact us</span></span> 
                      </h3>
                      {/* <div className='second-section'>
                      <Carousel responsive={responsive_contact} className='second-section'>

                      <div className='row row-position'>
                        <h2>Egypt Branch:</h2>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Mobile</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>(+20) 1027 4033 11 </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Landline</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>(+20) 22051044 </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Email</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>info@gebriel-motors.com  </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Address</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>8 Sengar St., Al Khalafawi, Shubra, Cairo Government, Egypt. </a></p>
                        </div>
                        </div>
                        
                        <div className='row row-position'>
                        <h2>Dubai Branch:</h2>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Mobile</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>(+20) 1027 4033 11 </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Landline</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>(+20) 1027 4033 11 </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Email</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>info@gebriel-motors.com </a></p>
                        </div>
                        <div className='card col mx-2 pt-4 pb-4'>
                          <h3 className='subtitle text-center ae-1'>Address</h3>
                          <p className='paragraph text-center ae-3'><a href='#'>8 Sengar St., Al Khalafawi, Shubra, Cairo Government, Egypt. </a></p>
                        </div>
                        </div>
                        </Carousel>

                      </div> */}
                  </div>
              </div>
                    {/* <img src="assets/gebriel-motors/why-us.png" className='why-us-img-padding'/> */}
            </div>
          </div>
          {/* <div className="background" style={{backgroundImage:'url(assets/gebriel-motors/footerx.png)'}}></div> */}
            <Footer/>
        </section>
      </div>
    )
  }
  
  export default Home;
  