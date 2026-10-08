import { Link, useNavigate } from "react-router-dom";

function Bali() {
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
      <section className="destination-hero bali-page">
        <div>
          <p>INDONESIA • TROPICAL PARADISE</p>

          <h1>Explore Bali</h1>

          <span>
            Beaches • Temples • Culture • Adventure
          </span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="destination-content">

        <p className="orange-title">
          WELCOME TO BALI
        </p>

        <h2>
          A Tropical Escape Full of Magic 🌺
        </h2>

        <p>
          Explore beautiful beaches, peaceful temples,
          green rice terraces and exciting adventures
          across the magical island of Bali.
        </p>

        {/* PLACES */}
        <div className="place-grid">

          <div className="place-box">
            <span>🏝️</span>

            <h3>
              Nusa Dua
            </h3>

            <p>
              Relax on beautiful beaches and enjoy the
              peaceful tropical atmosphere.
            </p>
          </div>


          <div className="place-box">
            <span>🌾</span>

            <h3>
              Ubud
            </h3>

            <p>
              Discover beautiful rice terraces,
              art, culture and traditional Balinese life.
            </p>
          </div>


          <div className="place-box">
            <span>🛕</span>

            <h3>
              Tanah Lot
            </h3>

            <p>
              Visit one of Bali's most famous temples
              and enjoy a spectacular sunset.
            </p>
          </div>

        </div>

        {/* CONTACT BUTTON */}
        <button
          onClick={goToContact}
          className="destination-button"
        >
          Plan My Bali Trip →
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

export default Bali;