import { Link, useNavigate } from "react-router-dom";

function Kashmir() {
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
      <section className="destination-hero kashmir-page">
        <div>
          <p>INDIA • PARADISE ON EARTH</p>

          <h1>Explore Kashmir</h1>

          <span>
            Mountains • Lakes • Snow • Nature
          </span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="destination-content">

        <p className="orange-title">
          WELCOME TO KASHMIR
        </p>

        <h2>
          Where Nature Looks Like a Dream 🏔️
        </h2>

        <p>
          Discover breathtaking mountains, peaceful
          lakes, beautiful valleys and unforgettable
          experiences in the heart of Kashmir.
        </p>

        {/* PLACES */}
        <div className="place-grid">

          <div className="place-box">
            <span>🏔️</span>

            <h3>
              Gulmarg
            </h3>

            <p>
              Enjoy the beautiful mountain scenery,
              snow activities and the famous gondola ride.
            </p>
          </div>


          <div className="place-box">
            <span>🚤</span>

            <h3>
              Dal Lake
            </h3>

            <p>
              Experience a peaceful Shikara ride and
              enjoy the stunning views around the lake.
            </p>
          </div>


          <div className="place-box">
            <span>🌲</span>

            <h3>
              Pahalgam
            </h3>

            <p>
              Explore beautiful valleys, rivers and
              peaceful landscapes surrounded by mountains.
            </p>
          </div>

        </div>

        {/* CONTACT BUTTON */}
        <button
          onClick={goToContact}
          className="destination-button"
        >
          Plan My Kashmir Trip →
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

export default Kashmir;