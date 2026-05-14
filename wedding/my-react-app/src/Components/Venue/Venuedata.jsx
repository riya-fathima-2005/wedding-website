import React, { useState } from "react";
import "../../assets/Style/Venuedata.css";

function Venuedata() {

  // VENUE DATA

  const VenueData = [

    {
      id: 1,
      name: "Royal Palace Wedding Hall",
      location: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",
      description:
        "Luxury royal wedding venue with traditional Indian architecture.",
    },

    {
      id: 2,
      name: "Sea Breeze Resort",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      description:
        "Beautiful beachside destination wedding venue.",
    },

    {
      id: 3,
      name: "Lake View Garden",
      location: "Kerala",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",
      description:
        "Peaceful lakeside wedding venue surrounded by nature.",
    },

    {
      id: 4,
      name: "Golden Lotus Resort",
      location: "Udaipur",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
      description:
        "Elegant lakeside venue perfect for luxury destination weddings.",
    },

    {
      id: 5,
      name: "Palm Shore Venue",
      location: "Kerala",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200",
      description:
        "Romantic tropical wedding venue surrounded by palm trees.",
    },

    {
      id: 6,
      name: "Grand Celebration Palace",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200",
      description:
        "Spacious luxury venue ideal for grand Indian wedding celebrations.",
    },

  ];

  // SEARCH STATE

  const [search, setSearch] = useState("");

  // FILTER

  const filteredVenues = VenueData.filter(
    (venue) =>
      venue.location.toLowerCase().includes(search.toLowerCase()) ||
      venue.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <section className="venues-section">

      <div className="container">

        {/* HEADING */}

        <h1>
          Find Your Wedding Venue
        </h1>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search by location or venue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* GRID */}

        <div className="venue-grid">

          {filteredVenues.map((venue) => (

            <div className="venue-card" key={venue.id}>

              {/* IMAGE */}

              <img
                src={venue.image}
                alt={venue.name}
              />

              {/* CONTENT */}

              <div className="venue-content">

                <h3>{venue.name}</h3>

                <h5>{venue.location}</h5>

                <p>{venue.description}</p>

                <button>
                  View Venue
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Venuedata;