import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/SmokeCity.css';

const Home = () => {
  return (
    <div>
      <div className="cover">
        <div className="music">
          <Navigation />
          <form className="search">
            <i className="fa fa-search" aria-hidden="true" id="gray"></i>
            <input type="search" placeholder="search name of artist,albums and songs" id="place" />
          </form>
        </div>
        <div className="explore">
          <h1 id="world">Explore the World Of Music With <span id="city">SmokeCity Music.</span></h1>
          <p id="stars">SmokeCity Music has been built to <br />help rising stars from allover the world who are 
          incapable to bring <br />there sound out to the world due to circumstances.</p>
          <Link to="/login"><button>Log In</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
      
      <div className="upload">
        <div className="sell">
          <h2 id="music">Upload and sell your music as an independent artist.</h2>
          <p id="share">Share and release as many singles,albums and Ep's and have <br />all your commissions and 
          royalties to yourself.</p>
          <button>Upload your music for free.</button>
        </div>
        <img 
          src="https://plus.unsplash.com/premium_photo-1674655563727-c02fd1030f38?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjB1cGxvYWR8ZW58MHx8MHx8fDA%3D" 
          id="image" 
          alt="Music Upload" 
        />
      </div>
      
      <div className="playlist1">
        <h3 id="song">Trending Songs</h3>
        <div className="playlist">
          <div>
            <img src="https://assets.audiomack.com/young-nudy/56c80c3663322b3222c78ef374cad08ebf23de55e561430baf44462d55ff525f.jpeg?width=600" id="mack" alt="Young Nudy" />
            <h3 className="feat">Young Nudy</h3>
            <h3 className="much">Okra(Trap)</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/thekidlaroi/7176a9ed8dcdfd1c89c55ebde8f46bef4ec2aedc01e103893fd2496e9a41115c.jpeg?width=600" id="mack" alt="The kid laroi" />
            <h3 className="feat">The kid laroi</h3>
            <h3 className="much">TOO MUCH</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/youngboy-never-broke-again/6409ff07ea19f112cdfd3603fc411494341e4f212e744184694799c33222dde3.jpeg?width=600" id="mack" alt="YoungBoy Never Broke Again" />
            <h3 className="feat">YoungBoy Never Broke Again</h3>
            <h3 className="much">Heard of Me</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/chris-brown/feba13bf60cb3c49f3c9f51407cbfda3e01a1d7e45b4960cefceca346743e239.jpeg?width=600" id="mack" alt="Chris Brown ft Davido and Lojay" />
            <h3 className="feat">Chris Brown ft Davido &amp; Lojay</h3>
            <h3 className="much">Sensational</h3>
          </div>
        </div>
        
        <h3 id="song">TRENDING ALBUMS</h3>
        <div className="playlist">
          <div>
            <img src="https://assets.audiomack.com/city-girls/3b51bfd68dd2da04560a48fd747a2ea3f71933657acb3871c40d4e3480a5e829.jpeg?width=600" id="mack" alt="City Girls" />
            <h3 className="feat">City Girls</h3>
            <h3 className="much">RAW</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/iammayorkun/006c0f33a0e04cfa49121be31e7ee711b7895dd282655bf6f983b75a9d1c1508.jpeg?width=600" id="mack" alt="Mayorkun" />
            <h3 className="feat">Mayorkun</h3>
            <h3 className="much">Love..For Free</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/ayox/40f1d6e567ff6315b1be8d9de85cfef6c10dde530376e41dfdcdf5ed62b0cb88.jpeg?width=600" id="mack" alt="Ayox" />
            <h3 className="feat">Ayox</h3>
            <h3 className="much">Last Son Of A Widow</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/reece_youngking/coverart.jpg?width=600" id="mack" alt="a-reece" />
            <h3 className="feat">a-reece</h3>
            <h3 className="much">P2:THE BIG HEARTED BAD.</h3>
          </div>
        </div>
        
        <h3 id="song">TOP TRENDING SONGS IN NIGERIA</h3>
        <div className="playlist">
          <div>
            <img src="https://assets.audiomack.com/mohbad/1bc8150cf40d3f49494d268353a858ca267d2382281b24d66ec2fd55597a6f87.jpeg?width=600" id="mack" alt="Mohbad" />
            <h3 className="feat">Mohbad</h3>
            <h3 className="much">Beast &amp; Peace</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/asakemusic/a7306b4bb0a6e0050f6f58f18ef36e710c146d2b235ba7195e49066e3050bba0.jpeg?width=600" id="mack" alt="ASAKE" />
            <h3 className="feat">ASAKE</h3>
            <h3 className="much">Work Of Art</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/kizzdaniel/fe568a10d9f7b908b1d1b0e1a598b323334faeb94656ec246b492693fe7198eb.jpeg?width=600" id="mack" alt="Kizz Daniel" />
            <h3 className="feat">Kizz Daniel</h3>
            <h3 className="much">Maverick</h3>
          </div>
          <div>
            <img src="https://assets.audiomack.com/burna-boy/5565c73ca7f22023b7ff412db9b251220ae9cdd5e93f6e6ff866c80ecf23ba9b.jpeg?width=600" id="mack" alt="Burna Boy" />
            <h3 className="feat">Burna Boy</h3>
            <h3 className="much">I Told Them</h3>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
