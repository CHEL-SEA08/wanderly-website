import { Link, useNavigate } from "react-router-dom";

function Goa() {
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
      <section className="destination-hero goa-page">
        <div>
          <p>INDIA • BEACH PARADISE</p>

          <h1>Explore Goa</h1>

          <span>
            Beaches • Sunsets • Adventure • Nightlife
          </span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="destination-content">

        <p className="orange-title">
          WELCOME TO GOA
        </p>

        <h2>
          Where Every Day Feels Like a Holiday 🌴
        </h2>

        <p>
          Discover golden beaches, beautiful sunsets,
          delicious food, exciting water sports and
          the vibrant atmosphere of Goa.
        </p>

        {/* PLACES */}
        <div className="place-grid">

          <div className="place-box">
            <span>🏖️</span>

            <h3>
              Baga Beach
            </h3>

            <p>
              Relax by the beach and enjoy water
              activities and beautiful sunsets.
            </p>
          </div>


          <div className="place-box">
            <span>🏰</span>

            <h3>
              Fort Aguada
            </h3>

            <p>
              Explore one of Goa's famous historic
              landmarks and enjoy the sea views.
            </p>
          </div>


          <div className="place-box">
            <span>💦</span>

            <h3>
              Dudhsagar Falls
            </h3>

            <p>
              Experience the spectacular waterfall
              surrounded by beautiful nature.
            </p>
          </div>

        </div>

        {/* CONTACT BUTTON */}
        <button
          onClick={goToContact}
          className="destination-button"
        >
          Plan My Goa Trip →
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

export default Goa;