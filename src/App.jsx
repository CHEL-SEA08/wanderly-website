import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Goa from "./pages/Goa";
import Kashmir from "./pages/Kashmir";
import Bali from "./pages/Bali";
import Dubai from "./pages/Dubai";

function Home() {

  // CONTACT FORM → WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const destination = formData.get("destination");
    const message = formData.get("message");

    // 🔴 REPLACE THIS WITH YOUR WHATSAPP NUMBER
    // India example: 919876543210
    // Do NOT use +, spaces or -
 const whatsappNumber = "919676208324";

    const whatsappMessage = `🌍 New Wanderly Travel Request

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

📍 Destination: ${destination}

📝 Travel Plans:
${message}

Thank you for choosing Wanderly! ✈️`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          Wanderly<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#experiences">Experiences</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        <div className="hero-overlay">

          <p className="hero-small">
            DISCOVER • EXPLORE • EXPERIENCE
          </p>

          <h1>
            Your Journey
            <br />
            Starts Here.
          </h1>

          <p className="hero-description">
            Discover beautiful destinations, unforgettable
            experiences and adventures around the world.
          </p>

          <a
            href="#destinations"
            className="hero-button"
          >
            Explore Destinations →
          </a>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section
        className="destinations-section"
        id="destinations"
      >

        <p className="orange-title">
          POPULAR DESTINATIONS
        </p>

        <h2>
          Where Will You Go Next?
        </h2>

        <p className="section-description">
          From peaceful beaches to breathtaking mountains,
          discover places that are waiting for you.
        </p>


        <div className="destination-grid">

          {/* GOA */}

          <Link
            to="/goa"
            className="destination-card"
          >

            <img
              src="/images/goa.jpg"
              alt="Goa"
            />

            <div className="destination-card-content">

              <span>INDIA</span>

              <h3>Goa</h3>

              <p>
                Beaches • Sunsets • Adventure
              </p>

              <strong>
                Explore Goa →
              </strong>

            </div>

          </Link>


          {/* KASHMIR */}

          <Link
            to="/kashmir"
            className="destination-card"
          >

            <img
              src="/images/kashmir.jpg"
              alt="Kashmir"
            />

            <div className="destination-card-content">

              <span>INDIA</span>

              <h3>Kashmir</h3>

              <p>
                Mountains • Snow • Nature
              </p>

              <strong>
                Explore Kashmir →
              </strong>

            </div>

          </Link>


          {/* BALI */}

          <Link
            to="/bali"
            className="destination-card"
          >

            <img
              src="/images/bali.jpg"
              alt="Bali"
            />

            <div className="destination-card-content">

              <span>INDONESIA</span>

              <h3>Bali</h3>

              <p>
                Beaches • Culture • Adventure
              </p>

              <strong>
                Explore Bali →
              </strong>

            </div>

          </Link>


          {/* DUBAI */}

          <Link
            to="/dubai"
            className="destination-card"
          >

            <img
              src="/images/dubai.jpg"
              alt="Dubai"
            />

            <div className="destination-card-content">

              <span>UAE</span>

              <h3>Dubai</h3>

              <p>
                Luxury • Shopping • Adventure
              </p>

              <strong>
                Explore Dubai →
              </strong>

            </div>

          </Link>

        </div>

      </section>


      {/* ================= TRAVEL BANNER ================= */}

      <section
        className="travel-banner"
        style={{
          backgroundImage:
            "url('/images/adventure.jpg')",
        }}
      >

        <div className="travel-banner-overlay">

          <p>
            LIFE IS SHORT
          </p>

          <h2>
            Make Your Memories
            <br />
            Around The World.
          </h2>

          <a
            href="#contact"
            className="banner-button"
          >
            Start Planning →
          </a>

        </div>

      </section>


      {/* ================= WHY WANDERLY ================= */}

      <section className="why-section">

        <p className="orange-title">
          WHY WANDERLY?
        </p>

        <h2>
          Travel Made Simple.
        </h2>

        <p className="section-description">
          We help you turn your travel dreams into
          unforgettable experiences.
        </p>


        <div className="why-grid">

          <div className="why-box">

            <div className="why-icon">
              🌍
            </div>

            <h3>
              Amazing Destinations
            </h3>

            <p>
              Discover beautiful places and hidden
              gems around the world.
            </p>

          </div>


          <div className="why-box">

            <div className="why-icon">
              ✈️
            </div>

            <h3>
              Easy Planning
            </h3>

            <p>
              Plan your perfect trip without
              complicated processes.
            </p>

          </div>


          <div className="why-box">

            <div className="why-icon">
              💙
            </div>

            <h3>
              Memorable Experiences
            </h3>

            <p>
              Create memories that you will
              remember forever.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PACKAGES ================= */}

      <section
        className="packages-section"
        id="packages"
      >

        <p className="orange-title">
          TRAVEL PACKAGES
        </p>

        <h2>
          Choose Your Perfect Escape
        </h2>

        <p className="section-description">
          Find a package that matches your
          travel style and budget.
        </p>


        <div className="packages-grid">

          <div className="package-card">

            <span className="package-icon">
              🏖️
            </span>

            <h3>
              Beach Escape
            </h3>

            <p>
              Relax by beautiful beaches and enjoy
              peaceful sunsets.
            </p>

            <h4>
              Starting from ₹15,999
            </h4>

          </div>


          <div className="package-card">

            <span className="package-icon">
              🏔️
            </span>

            <h3>
              Mountain Adventure
            </h3>

            <p>
              Explore breathtaking mountains,
              valleys and nature.
            </p>

            <h4>
              Starting from ₹18,999
            </h4>

          </div>


          <div className="package-card">

            <span className="package-icon">
              🌴
            </span>

            <h3>
              International Escape
            </h3>

            <p>
              Experience exciting international
              destinations and cultures.
            </p>

            <h4>
              Starting from ₹35,999
            </h4>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCES ================= */}

      <section
        className="experiences-section"
        id="experiences"
      >

        <p className="orange-title">
          TRAVEL EXPERIENCES
        </p>

        <h2>
          More Than Just A Trip
        </h2>

        <p className="section-description">
          Every journey should be filled with
          experiences worth remembering.
        </p>


        <div className="experience-grid">

          <div className="experience-box">

            <span>
              🌅
            </span>

            <h3>
              Beautiful Sunsets
            </h3>

            <p>
              Watch unforgettable sunsets
              from incredible destinations.
            </p>

          </div>


          <div className="experience-box">

            <span>
              🥾
            </span>

            <h3>
              Adventure
            </h3>

            <p>
              Add excitement to your trip
              with thrilling adventures.
            </p>

          </div>


          <div className="experience-box">

            <span>
              🍜
            </span>

            <h3>
              Local Culture
            </h3>

            <p>
              Taste local food and experience
              different cultures.
            </p>

          </div>


          <div className="experience-box">

            <span>
              📸
            </span>

            <h3>
              Memories
            </h3>

            <p>
              Capture beautiful moments
              that last forever.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-container">

          <div className="contact-text">

            <p className="orange-title">
              LET'S PLAN YOUR TRIP
            </p>

            <h2>
              Where Do You
              <br />
              Want To Go?
            </h2>

            <p>
              Tell us where you want to travel
              and we'll help you plan an
              unforgettable journey.
            </p>

            <div className="contact-info">

              <div>
                <span>📱</span>
                <p>
                  Quick WhatsApp Support
                </p>
              </div>

              <div>
                <span>✈️</span>
                <p>
                  Personalized Travel Planning
                </p>
              </div>

              <div>
                <span>🌍</span>
                <p>
                  Amazing Destinations
                </p>
              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

            </div>


            <div className="form-row">

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />


              <select
                name="destination"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Choose Destination
                </option>

                <option value="Goa">
                  Goa
                </option>

                <option value="Kashmir">
                  Kashmir
                </option>

                <option value="Bali">
                  Bali
                </option>

                <option value="Dubai">
                  Dubai
                </option>

              </select>

            </div>


            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your travel plans..."
              required
            ></textarea>


            <button
              type="submit"
              className="contact-button"
            >
              Send My Travel Request →
            </button>

          </form>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          Wanderly<span>.</span>
        </div>

        <p>
          Explore more. Travel more. Live more. 🌍
        </p>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#destinations">
            Destinations
          </a>

          <a href="#packages">
            Packages
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <p className="copyright">
          © 2026 Wanderly. All rights reserved.
        </p>

      </footer>

    </div>
  );
}


/* ================= ROUTES ================= */

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/goa"
        element={<Goa />}
      />

      <Route
        path="/kashmir"
        element={<Kashmir />}
      />

      <Route
        path="/bali"
        element={<Bali />}
      />

      <Route
        path="/dubai"
        element={<Dubai />}
      />

    </Routes>

  );
}

export default App;