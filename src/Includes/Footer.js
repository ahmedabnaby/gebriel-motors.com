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
          },
          {
            title: '> customerservice@gebriel-motors.com',
            url: 'mailto:customerservice@gebriel-motors.com',
          },
        ]
      },
      {
        title: 'Quick Links',
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
        title: 'Egypt Branch',
        items:[
          {
            title: '(+20) 1027 4033 11',
            url: 'tel:+20 1027 4033 11',
          },
          {
            title: '8 Sengar St., Al Khalafawi, Shubra, Cairo Government, Egypt.',
            url: 'https://goo.gl/maps/5mdy5Z6kLcosEb3w9',
          },
        ]
      },
      {
        title: 'Dubai Branch',
        items:[
          {
            title: '(+971) 545 575 800',
            url: 'tel:+971 545 575 800',
          },
          {
            title: 'Office A615, Tower A, JAFAZA One Building, Dubai',
            url: 'https://goo.gl/maps/ZLk1Aq7XuS2hU4wR8',
          }
        ]
      },
    ]}
    bottom="Copyrights &copy; 2022 Gebriel-Motors"
  />
  
);
}
export default MyFooter;