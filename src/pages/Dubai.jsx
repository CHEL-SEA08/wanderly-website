import { Link, useNavigate } from "react-router-dom";

function Dubai() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="destination-page">

      {/* HERO SECTION */}
      <section className="destination-hero dubai-page">
        <div>
          <p>UAE • CITY OF DREAMS</p>

          <h1>Explore Dubai</h1>

          <span>
            Luxury • Skyscrapers • Shopping • Adventure
          </span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="destination-content">

        <p className="orange-title">
          WELCOME TO DUBAI
        </p>

        <h2>
          Where the Future Meets Adventure ✨
        </h2>

        <p>
          Experience breathtaking skyscrapers, luxury
          shopping, desert adventures and unforgettable
          attractions in the heart of Dubai.
        </p>

        {/* PLACES */}
        <div className="place-grid">

          <div className="place-box">
            <span>🏙️</span>

            <h3>
              Burj Khalifa
            </h3>

            <p>
              Visit the world's iconic skyscraper and
              enjoy spectacular views of Dubai.
            </p>
          </div>


          <div className="place-box">
            <span>🏜️</span>

            <h3>
              Desert Safari
            </h3>

            <p>
              Experience an exciting desert adventure
              with beautiful golden landscapes.
            </p>
          </div>


          <div className="place-box">
            <span>🛍️</span>

            <h3>
              Dubai Mall
            </h3>

            <p>
              Explore one of the world's largest shopping
              destinations with entertainment and dining.
            </p>
          </div>

        </div>

        {/* CONTACT BUTTON */}
        <button
          onClick={goToContact}
          className="destination-button"
        >
          Plan My Dubai Trip →
        </button>

        <br />
        <br />

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="back-button"
        >
          ← Back to Wanderly
        </Link>

      </section>

    </div>
  );
}

export default Dubai;