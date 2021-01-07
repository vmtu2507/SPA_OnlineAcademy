import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
  <div className="header">   	
    <div className="container">	
      <div className="logo">
        <a href="#"><img src={"/assets/images/det_pic.jpg"} className="img-responsive" alt /></a>
        <div className="clearfix"> </div>
      </div>
      <div className="header-right">
        <div className="navigation">
          <span className="menu"> </span>
          <ul>
            <li><a className="scroll" href="#about" title="ABOUT US"><span>ABOUT US</span></a></li>
            <li><a href="#" className="active" title="offerings"><span>OFFERINGS</span></a></li>
            <li><a className="scroll" href="#camps" title="CAMPS"><span>CAMPS</span></a></li>
            <li><a className="scroll" href="#blogs" title="BLOGS"><span>BLOGS</span></a></li>
            <li><a className="scroll" href="#contact" title="CONTACT US"><span>CONTACT US</span></a></li>
          </ul>
        </div>
        {/*script-nav */}	
        <div className="clearfix"> </div>
        {/* /script-nav */}
        <div className="top-icons">
          <span className="icon1"> </span>
          <span className="icon2"> </span>
          <span className="icon3"> </span>
        </div>	
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>			
  {/*/Header Ends Here*/}
  {/*Header Banner Start Here*/} 
  <div className="header-banner">
    <div className="corner">
      <h1>a comfort corner<br />for your child</h1>
      <a className="more wow swing animated" data-wow-delay="0.4s" href="#">LEARN MORE</a>
    </div>
  </div>
  <div className="clearfix"> </div>	
  {/*/Header Banners Ends Here*/}
  {/*Welcome to Kids Corner Start Here*/}
  <div id="about" className="welcome">
    <div className="container">	
      <h2>Welcome to Kids Corner</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse in laoreet purus. Phasellus turpis lacus, feugiat eu tincidunt a, 
        ultrices quis tellus. Ut eu justo a nunc gravida adipiscing. Aenean et lorem eget 
        nunc adipiscing dapibus. Nullam viverra tincidunt nisl, ut tincidunt orci. Nulla 
        facilisi. Etiam eu libero orci. Praesent sollicitudin risus nec auctor venenatis.
        Nunc sed iaculis diam. Duis tortor eros, convallis ultrices consequat id, congue quis justo.
        Curabitur ac tincidunt odio.</p>
      <h3>If you are a parent looking for a place where your child will grow the best,look no further, <span style={{color: '#70C6E7'}}>talk to us now.</span></h3>
    </div>
  </div>
  <div className="clearfix"> </div>
  {/*/Welcome to Kids Corner Ends Here*/}
  {/*our offerings Start Here*/}
  <div id="OFFERINGS" className="offerings">
    <div className="container">	
      <h3>our offerings</h3>
      <div className="grids">
        <div className="col-md-4 grid wow bounceIn" data-wow-delay="0.4s">
          <span className="icon1"> </span>
          <h2>School Pickups</h2>
          <p>Duis neque quam, auctor id sem sed, 
            semper eleifend ligula. Donec mollis arcu 
            vel sem ornare rutrum in in magna. Pellentesque
            in consectetur felis.</p>
        </div>
        <div className="col-md-4 grid wow bounceIn" data-wow-delay="0.4s">
          <span className="icon2"> </span>
          <h2>Extensive Labrary</h2>
          <p>Donec mollis arcu vel sem ornare rutrum in in magna.
            Pellentesque in consectetur felis. Phasellus ultricies, 
            massa sed varius scelerisque, orci arcu placerat nunc.</p>
        </div>
        <div className="col-md-4 grid wow bounceIn" data-wow-delay="0.4s">
          <span className="icon3"> </span>
          <h2>Outdoor Trips</h2>
          <p>Pellentesque in consectetur felis.
            Phasellus ultricies, massa sed varius scelerisque, 
            orci arcu placerat nunc, pretium cursus urna lacus non nibh.</p>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="food">
        <div className="col-md-4 services wow bounceIn" data-wow-delay="0.4s">
          <span className="icon1"> </span>
          <h2>School Pickups</h2>
          <p>Duis neque quam, auctor id sem sed, 
            semper eleifend ligula. Donec mollis arcu 
            vel sem ornare rutrum in in magna. Pellentesque
            in consectetur felis.</p>
        </div>
        <div className="col-md-4 services wow bounceIn" data-wow-delay="0.4s">
          <span className="icon2"> </span>s
          <h2>Extensive Labrary</h2>
          <p>Donec mollis arcu vel sem ornare rutrum in in magna.
            Pellentesque in consectetur felis. Phasellus ultricies, 
            massa sed varius scelerisque, orci arcu placerat nunc.</p>
        </div>
        <div className="col-md-4 services wow bounceIn" data-wow-delay="0.4s">
          <span className="icon3"> </span>
          <h2>Outdoor Trips</h2>
          <p>Pellentesque in consectetur felis.
            Phasellus ultricies, massa sed varius scelerisque, 
            orci arcu placerat nunc, pretium cursus urna lacus non nibh.</p>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*/our offerings Ends Here*/}
  {/*upcoming camps Start Here*/}
  <div id="camps" className="upcoming">
    <div className="container">	
      <div className="top-p1">
        <h3>upcoming camps</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse in laoreet purus. Phasellus turpis lacus, feugiat 
          eu tincidunt a, ultrices quis tellus. Ut eu justo a nunc gravida adipiscing.</p>
      </div>
      <div className="bootstrap-grids">			
        <div className="col-md-4 camps">
          <a href="#"><img className="img-responsive" src="images/01.jpg" alt /></a>
          <ul className="product_title titlelast">
            <li className="s_head"><h3>soccer camps</h3><p>15th February 2014</p></li>
            <li> <a href="#" className="fa-btn1 btn-2 btn-1e1">$35</a>
            </li>
          </ul>
          <div className="clearfix"> </div>
          <div className="Proin">
            <p>Proin luctus felis quis ipsum iaculis iaculis. 
              Fusce turpis nisl, ullamcorper nec nisi pulvinar, 
              ornare dapibus purus. Pellentesque lobortis semper
              egestas. Donec commodo nisl eu vulputate laoreet.</p>
            <a className="button wow swing" data-wow-delay="0.4s" href="#">ENROLL TODAY</a>
          </div>
        </div>
        <div className="col-md-4 camps">
          <a href="#"><img className="img-responsive" src="images/02.jpg" alt /></a>
          <ul className="product_title titlelast">
            <li className="s_head"><h3>soccer camps</h3>
              <p>3rd March 2014</p>
            </li>
            <li><a href="#" className="fa-btn1 btn-2 btn-1e1">$75</a>
            </li>
          </ul>
          <div className="clearfix"> </div>
          <div className="Proin">
            <p>Proin luctus felis quis ipsum iaculis iaculis. 
              Fusce turpis nisl, ullamcorper nec nisi pulvinar, 
              ornare dapibus purus. Pellentesque lobortis semper
              egestas. Donec commodo nisl eu vulputate laoreet.</p>
            <a className="button wow swing" data-wow-delay="0.4s" href="#">ENROLL TODAY</a>
          </div>
        </div>
        <div className="col-md-4 camps">
          <a href="#"><img className="img-responsive" src="images/03.jpg" alt /></a>
          <ul className="product_title titlelast">
            <li className="s_head"><h3>soccer camps</h3><p>31st March 2014</p></li>
            <li> <a href="#" className="fa-btn1 btn-2 btn-1e1">$25</a>
            </li>  
          </ul>
          <div className="clearfix"> </div>
          <div className="Proin">
            <p>Proin luctus felis quis ipsum iaculis iaculis. 
              Fusce turpis nisl, ullamcorper nec nisi pulvinar, 
              ornare dapibus purus. Pellentesque lobortis semper
              egestas. Donec commodo nisl eu vulputate laoreet.</p>
            <a className="button wow swing" data-wow-delay="0.4s" href="#">ENROLL TODAY</a>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>	
  {/*/upcoming camps Ends Here*/}
  {/*Scott Jhonson Start Here*/}
  <div className="content-middle">
    <div className="container">	
      {/* banner Slider starts Here */}
      {/*//End-slider-script*/}
      <div id="top" className="callbacks_container">
        <ul className="rslides" id="slider4">
          <li>
            <div className="slider-top">
              <img className="img-responsive" src="images/round.jpg" alt />
              <p>Since the day I started sending my son to Kids Corner,
                I have  seen him happy like never before. I can work worry free at office now.</p>
              <h2>Scott Jhonson</h2>
              <h3>Downtown, New York</h3>
            </div>
          </li>	
          <li>
            <div className="slider-top">
              <img className="img-responsive" src="images/round2.jpg" alt />
              <p>Since the day I started sending my son to Kids Corner,
                I have  seen him happy like never before. I can work worry free at office now.</p>
              <h2>Scott Jhonson</h2>
              <h3>Downtown, New York</h3>
            </div>
          </li>
          <li>
            <div className="slider-top">
              <img className="img-responsive" src="images/round3.jpg" alt />
              <p>Since the day I started sending my son to Kids Corner,
                I have  seen him happy like never before. I can work worry free at office now.</p>
              <h2>Scott Jhonson</h2>
              <h3>Downtown, New York</h3>
            </div>
          </li>
          <li>
            <div className="slider-top">
              <img className="img-responsive" src="images/round4.jpg" alt />
              <p>Since the day I started sending my son to Kids Corner,
                I have  seen him happy like never before. I can work worry free at office now.</p>
              <h2>Scott Jhonson</h2>
              <h3>Downtown, New York</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="clearfix"> </div>
    {/* banner Slider Ends Here */} 			  
  </div>
  <div className="clearfix"> </div>
  {/*/Scott Jhonson Ends Here*/}
  {/*Recent Blog Posts Start Here*/}
  <div className="justo">
    <div className="container">	
      <div id="blogs" className="recent">
        <div className="lacus">	
          <h2>Recent Blog Posts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse in laoreet purus. Phasellus turpis lacus, feugiat 
            eu tincidunt a, ultrices quis tellus. Ut eu justo a nunc gravida adipiscing.</p>
        </div>
        <div className="col-md-6 posts wow bounceIn" data-wow-delay="0.4s">
          <a href="#"><img className="img-responsive" src="images/br1.jpg" alt /></a>
          <span>February 14, 2014</span>
          <h2>Picnic to Rock Garden &amp; Sukhna</h2>
          <p>Vivamus laoreet vitae mi sit amet mattis. 
            Praesent sagittis libero dui, et adipiscing lorem pharetra non. 
            Vestibulum aliquam adipiscing magna ut adipiscing. Mauris sit amet ante nisl.</p>
        </div>
        <div className="col-md-6 magna wow bounceIn" data-wow-delay="0.4s">
          <div className="col-md-6 amet wow bounceIn" data-wow-delay="0.4s">
            <span>February 4, 2014</span>
            <a href="#"><img className="img-responsive" src="images/br2.jpg" alt /></a>
          </div>
          <div className="col-md-6 dui wow bounceIn" data-wow-delay="0.4s">
            <h2>New swings added</h2>
            <p>Vivamus laoreet vitae mi sit amet mattis. 
              Praesent sagittis libero dui, et adipiscing lorem pharetra non. 
              Vestibulum aliquam adipiscing. Vivamus laoreet vitae mi sit amet mattis. 
              Sent sagittis libero dui et adipiscing.</p>
          </div>
          <div className="col-md-6 amet wow bounceIn" data-wow-delay="0.4s">
            <span>February 4, 2014</span>
            <a href="#"><img className="img-responsive" src="images/br3.jpg" alt /></a>
          </div>
          <div className="col-md-6 dui wow bounceIn" data-wow-delay="0.4s">
            <h2>New swings added</h2>
            <p>Vivamus laoreet vitae mi sit amet mattis. 
              Praesent sagittis libero dui, et adipiscing lorem pharetra non. 
              Vestibulum aliquam adipiscing. Vivamus laoreet vitae mi sit amet mattis. 
              Sent sagittis libero dui et adipiscing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix"> </div>
  {/*/Recent Blog Posts Ends Here*/}
  {/*Get in Touch Start Here*/}
  <div id="contact" className="get">
    <div className="container">	
      <div className="vida">
        <div className="touch">
          <h5>Get in Touch</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse in laoreet purus. Phasellus turpis lacus, feugiat 
            eu tincidunt a, ultrices quis tellus. Ut eu justo a nunc gravida adipiscing.</p>
        </div>
        <div className="col-md-3 contant-grid">
          <h3>Contact Us</h3>	
          <div className="contact-top">
            <div className="col-md-3">
              <img src="images/ion1.png" alt />
            </div>	
            <div className="col-md-9 us-left">
              <p>4075,13-B,
                1 Finite Road,
                Chandigarh-160099
                India</p>
            </div>	
            <div className="clearfix"> </div>
            <div className="col-md-3">
              <img src="images/ion2.png" alt />
            </div>	
            <div className="col-md-9 us-left">
              <p>mail@thesector.com</p>
            </div>
            <div className="clearfix"> </div>
            <div className="col-md-3">
              <img src="images/ion3.png" alt />
            </div>	
            <div className="col-md-9 us-left-bottom">
              <p>+91-00-767612345</p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-9 contact-form">
          <form>
            <h4>Request a Quote</h4>
            <input type="text" className="text" defaultValue="Your Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Full Name';}" />
            <input type="text" className="text" defaultValue="Your Phone no:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email Adress';}" />
            <textarea rows={10} cols={70} onfocus="if(this.value == 'Your Message') this.value='';" onblur="if(this.value == '') this.value='Your Message';" defaultValue={"Your Message...."} />
            <input type="submit" defaultValue="SUBMIT" />
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*/Get in Touch Ends Here*/}
  {/*Footer Start Here*/}
  <div className="footer">
    <div className="container">	
      <div className="col-md-6 Reserved">
        <h4>Design by<a href="http://w3layouts.com" target="_blank"> w3layouts</a></h4>
      </div>
      <div className="col-md-6 bottom-icons">
        <span className="icon1"> </span>
        <span className="icon2"> </span>
        <span className="icon3"> </span>
      </div>														
    </div>
  </div>
</div>


        )
    }
}

export default Home;