import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 

function MyFooter()
{
return(
  <Footer
  className='footer'
    columns={[
      {
        title: <img src="assets/gebriel-motors/logo.png" alt="..." className='footer-logo'/>,
        items:[
          {
            description:'GET RIGHT TO THE GOOD PARTS. ',
          }
        ]
      },
      {
        title: 'Gebriel Motors',
        items:[
          {
            title: '> Our Company',
            url: '#our-company',
          },
          {
            title: '> Why Us',
            url: '#why-us',
          }
        ]
      },
      {
        title: 'Quick Links',
        items:[
          {
            title: '> Home',
            url: '#home',
          },
          {
            title: '> Products',
            url: '#products',
          },
        ]
      },
      {
        title: 'Contact Us',
        items:[
          {
            title: '(+971) 545 575 800',
            url: '#home',
          },
          {
            title: 'Office A615, Tower A, JAFAZA One Building, Dubai',
            url: '#home',
          },
          {
            title: '(+20) 1027 4033 11',
            url: '#home',
          },
          {
            title: '8 Sengar St., Al Khalafawi, Shubra, Cairo Government, Egypt.',
            url: '#home',
          },
        ]
      },
    ]}
    bottom="Copyrights &copy; 2022 Gebriel-Motors"
  />
  
);
}
export default MyFooter;