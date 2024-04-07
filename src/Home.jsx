import React from 'react';
import logo from './images/logo.webp'
import hero_bg_img from './images/hero-bg-img1.webp'
import hero_img from './images/hero-img.webp' 
import about_img from './images/about-img.webp'

const Home = () => {

  // Scroll To Top

  const scrollToTop = ()=> {
    window.scroll({top: 0, behavior: "smooth"});
  }

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting ?
        document.body.classList.add("sticky") :
        document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>

      {/* Hero Section */}

      <section className="section-hero">
        <div className="overlay"></div>
        <div className="container">
          <header className={`header ${isActive ? 'active' : ''} grid grid-three-columns`}>
            <div className="logo">
              <img src={logo} alt="logo" loading='lazy'/>
              <h2>Body Blaze</h2>
            </div>
            <nav className="navbar">
              <ul>
                <li><a href="/" className='navlink'>Home</a></li>
                <li><a href="#program" className='navlink'>Program</a></li>
                <li><a href="#about" className='navlink'>About</a></li>
                <li><a href="#plans" className='navlink'>Plans</a></li>
                <li><a href="#contact" className='navlink'>Contact</a></li>
              </ul>
            </nav>
            <div className="join-btn">
              <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
                <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
              </div>
              <a href='#contact' className="btn join-now-btn">Join Now</a>
            </div>
          </header>

          <div className="section hero-content grid grid-two-columns">
              <div className="hero-data">
                <h3 className='hero-top-para'>Best Fitness In The Town&nbsp; <i className="fa-solid fa-dumbbell"></i></h3>
                <h1 className='hero-heading'><span>Make</span> Your Body Shape</h1>
                <p className='hero-para'><i className="fa-solid fa-quote-left hero-para-icon"></i>&nbsp; Body Blaze: Achieve peak fitness with personalized training, state-of-the-art equipment, expert guidance, and a motivating community atmosphere. &nbsp;<i className="fa-solid fa-quote-right hero-para-icon"></i></p>
                <div><a href='#program' className="btn hero-data-btn">Get Started</a></div>
              </div>
              <div className="hero-img">
                <img src={hero_img} alt="hero-img" loading='lazy'/>
              </div>
          </div>
        </div>
      </section>

      {/* Program Section */}

      <section className="section section-program" id='program'>
        <div className="container">
          <h2 className='common-heading program-heading'>Explore Our Latest Program&nbsp; <i className="fa-brands fa-pushed"></i></h2>
          <p className='program-para'>Body Blaze: Transform your fitness journey with our latest program! Dynamic workouts, expert guidance, and personalized plans for ultimate results.</p>
          <div className="program-boxes grid grid-four-columns">
            <div className="program-box">
              <div><i className="fa-solid fa-hand-fist program-box-icon"></i></div>
              <h3>Strength</h3>
              <p>Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.</p>
              <div><a href='#contact' className="btn program-box-btn">Join Now</a></div>
            </div>
            <div className="program-box">
              <div><i className="fa-solid fa-heart-pulse program-box-icon"></i></div>
              <h3>Physical Fitness</h3>
              <p>It encompasses a range of activities that improve health, strength, flexibility, and overall well being.</p>
              <div><a href='#contact' className="btn program-box-btn">Join Now</a></div>
            </div>
            <div className="program-box">
              <div><i className="fa-solid fa-person-running program-box-icon"></i></div>
              <h3>Fat Lose</h3>
              <p>Through a combination of workout routines and expert guidance, we`ll empower you to reach your goals.</p>
              <div><a href='#contact' className="btn program-box-btn">Join Now</a></div>
            </div>
            <div className="program-box">
              <div><i className="fa-solid fa-basket-shopping program-box-icon"></i></div>
              <h3>Weight Gain</h3>
              <p>Design for individuals, our program offers an effective approach to gaining weight in a sustainable manner.</p>
              <div><a href='#contact' className="btn program-box-btn">Join Now</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="section section-about" id='about'>
        <div className="container">
          <h2 className="common-heading about-heading">About Us&nbsp; <i className="fa-solid fa-user-tie"></i></h2>
          <p className="about-para">Your ultimate gym companion. Expert workouts, nutrition tips, personalized plans, and a supportive community for your fitness journey.</p>
          <div className="about-content grid grid-two-columns">
            <div className="about-img">
              <img src={about_img} alt="about-img" loading='lazy'/>
            </div>
            <div className="about-data">
              <h2>The Class You Will Get Here</h2>
              <p>Your go-to destination for fitness enthusiasts. Access expert workouts, personalized plans, nutrition guidance, and a vibrant community. Ignite your fitness journey with Body Blaze today.</p>
              <div><a href='#plans' className="btn about-data-btn">Buy Plans</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}

      <section className="section section-join-us">
        <div className="container">
          <h2 className="join-us-heading">Why Choose Us ?&nbsp; <i className="fa-regular fa-handshake"></i></h2>
          <p className="join-us-para"><i className="fa-solid fa-quote-left hero-para-icon"></i>&nbsp; Embark on your fitness journey with Body Blaze, where premier facilities, expert trainers, and diverse classes await. Our supportive community fosters motivation and accountability. With personalized guidance and exclusive perks, we`re dedicated to igniting your passion for fitness and helping you achieve your health goals. Join us today!&nbsp; <i className="fa-solid fa-quote-right hero-para-icon"></i></p>
          <div className="join-us-img">
            <img src={hero_bg_img} alt="join-us-img" />
          </div>
          <div className="join-us-boxes grid grid-three-columns">
            <div className="join-us-box">
              <i className="fa-solid fa-user-gear program-box-icon join-us-icon"></i>
              <div className="join-us-box-data">
                <h3>Personal Trainer</h3>
                <p>Unlock your potential with our expert Personal Trainers.</p>
              </div>
            </div>
            <div className="join-us-box">
              <i className="fa-solid fa-video program-box-icon join-us-icon"></i>
              <div className="join-us-box-data">
                <h3>Practice Sessions</h3>
                <p>Elevate your fitness with practice sessions.</p>
              </div>
            </div>
            <div className="join-us-box">
              <i className="fa-solid fa-building program-box-icon join-us-icon"></i>
              <div className="join-us-box-data">
                <h3>Good Management</h3>
                <p>Supportive management, for your fitness success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}

      <section className="section section-plans" id='plans'>
        <div className="container">
          <h2 className="plans-heading">Checkout Our Pricing Plans&nbsp; <i className="fa-solid fa-infinity"></i></h2>
          <p className='plans-para'>Discover new gym plans with personalized workouts, virtual training, nutritional guidance, and exclusive member perks for your fitness journey.</p>
          <div className="plans-boxes grid grid-three-columns">
            <div className="plans-box">
              <h3>Low Class</h3>
              <p className='plans-amount'>$ 16</p>
              <div className='line'></div>
              <div className='plans-box-para'>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Smart Workout Plan</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; At Home Workouts</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Best Trainers</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Online Training Sessions</p>
              </div>
              <a href="#contact" className="btn plans-btn">Join Now</a>
            </div>
            <div className="plans-box">
              <h3>Standard Class</h3>
              <p className='plans-amount'>$ 28</p>
              <div className='line'></div>
              <div className='plans-box-para'>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Pro Gyms</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Smart Workout Plan</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; At Home Workouts</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Best Trainers</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Online Training Sessions</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Include Swimming Practice</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Provide Best Protein Food</p>
              </div>
              <a href="#contact" className="btn plans-btn">Join Now</a>
            </div>
            <div className="plans-box">
              <h3>VIP Class</h3>
              <p className='plans-amount'>$ 45</p>
              <div className='line'></div>
              <div className='plans-box-para'>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Elite Gyms & Classes</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Pro Gyms</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Smart Workout Plan</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; At Home Workouts</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Best Trainers</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Online Training Sessions</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Include Swimming Practice</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Provide Best Protein Food</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; Include Boxing Club</p>
                <p><i className="fa-regular fa-circle-check plans-icon"></i>&nbsp; High Quality Training Equipments</p>
              </div>
              <a href="#contact" className="btn plans-btn">Join Now</a>
            </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}

      <section className="section section-contact" id='contact'>
        <div className="container">
          <h2 className="common-heading contact-heading">Get Touch With Us&nbsp; <i className="fa-solid fa-hand-holding-heart"></i></h2>
          <p className='contact-para'>Buy plans and connect with our team now.</p>
          <div className="contact-part grid grid-two-columns">
            <div className="contact-data">
              <h2>Be a part in our team</h2>
              <p>Choose your best plans</p>
              <h3>Connect with our best trainers</h3>
            </div>
            <div className="section-contact-main contact-container">
            <form action="https://formspree.io/f/mayrlnrn" method='POST'>
              <div className="grid grid-two-columns">
                <input className="input-here" id="name" name="Name" type="text" placeholder="Name 👤" required autoComplete="off" />
                <input className="input-here" id="email" name="Email" type="email" placeholder="Email 📩" required autoComplete="off" />
              </div>
              <div className='grid grid-two-columns'>
                <input className="input-here" id="phone" name="Phone Number" type="number" placeholder="Phone 📱" required autoComplete="off" />
                <select name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <select name="plans" id="plans">
                  <option value="low">Low Class</option>
                  <option value="standard">Standard Class</option>
                  <option value="vip">VIP Class</option>
                </select>
              </div>
              <div>
                <textarea className="input-here" id="message" name="message" cols="30" rows="4" placeholder="Message 💭" required autoComplete="off"></textarea>
              </div>
              <div>
                <input id="submit" name="submit" type="submit" className="btn submit-btn" value="Join Now 👈" />
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <section className="section section-footer" id='footer'>
        <div className="container grid grid-four-columns">
          <div className="f-main">
            <div className="logo footer-logo">
              <img src={logo} alt="logo" />
              <h2 className='hero-heading'>Body Blaze</h2>
            </div>
            <p>Take the first step towards healthier, stronger you with our unbeatable pricing plans. Let`s sweat, achieve and conquer together!</p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100084133414284" target='_blank'><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/ha.rshsharma135/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/harshvardhan-sharma-a3685a236/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="f-links">
            <h3>Links</h3>
            <ul>
              <li><a className='f-navlink' href="/">Home</a></li>
              <li><a className='f-navlink' href="#program">Program</a></li>
              <li><a className='f-navlink' href="#about">About</a></li>
              <li><a className='f-navlink' href="#plans">Plans</a></li>
              <li><a className='f-navlink' href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="f-about f-links">
            <h3>About</h3>
            <ul>
              <li><a className='f-navlink' href="#footer">Blogs</a></li>
              <li><a className='f-navlink' href="#footer">Security</a></li>
              <li><a className='f-navlink' href="#footer">Terms & Conditions</a></li>
              <li><a className='f-navlink' href="#footer">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="f-address f-links">
            <h3>Address</h3>
            <address className='f-address-part'>
              <div><p><i className="fa-solid fa-location-dot f-icon"></i>&nbsp; <span className='f-call'>Dehradun, Uttarakhand, India</span></p></div>
              <div><p><i className="fa-solid fa-phone f-icon"></i><a className='f-call' href="tel:+919149349278">+91 9149349278</a></p></div>
              <div><p><i className="fa-regular fa-envelope f-icon"></i>
              <a className='f-call' href="mailto:3469harshsharma@gmail.com">3469harshsharma@gmail.com</a></p></div>
            </address>
          </div>
        </div>
        <div className="container">
          <div className="f-credits">
            <p>Copyright <i className="fa-regular fa-copyright"></i> Body Blaze | 2024 All right reserved ✔️</p>
          </div>
        </div>
      </section>

      <div className="scroll-top-style">
        <i className="fa-solid fa-arrow-up scroll-top" onClick={scrollToTop}></i>
      </div>
      

    </>
  )
}

export default Home