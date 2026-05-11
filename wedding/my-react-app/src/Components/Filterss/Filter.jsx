import React, { useState } from "react";
import "../../assets/Style/Filterss.css";

const Filter = () => {
  const [startDate, setStartDate] = useState("2025-12-26");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("Any");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");

  const handleSearch = () => {
    const filters = { startDate, location, state, city, distance };
    console.log("Applied Filters:", filters);
  };

  const handleReset = () => {
    setStartDate("2025-12-26");
    setLocation("");
    setState("Any");
    setCity("");
    setDistance("");
  };

  return (
    <div className="filter-container mt-5 mb-5">
      <div className="filter-sidebar">
        <div className="card filter-card p-4 shadow-sm">
          <p className="mb-4">
            Use the starting date and location filters to narrow down the list
            of weddings.
          </p>

          <div className="mb-3">
            <label className="form-label">Starting date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control custom-input"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-select custom-input"
            >
              <option value="">Any location</option>
              <option value="India">India</option>
            </select>
          </div>

          {location && (
            <>
              <div className="info-box mb-3">
                <span className="info-icon">ℹ</span>
                <small>
                  Please select a city and specify how far you would like to
                  search for weddings from that city.
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label">State or union territory</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-select custom-input"
                >
                  <option>Any</option>
                  <option>Kerala</option>
                  <option>Tamil Nadu</option>
                  <option>Maharashtra</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-select custom-input"
                >
                  <option value="">Choose a city...</option>
                  <option>Kochi</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Maximum distance from city</label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="form-select custom-input"
                >
                  <option value="">Choose a distance...</option>
                  <option>25 km</option>
                  <option>50 km</option>
                  <option>100 km</option>
                </select>
              </div>
            </>
          )}

          <div className="d-flex gap-3">
            <button
              className="btn btn-success flex-fill"
              onClick={handleSearch}
            >
              Search Weddings
            </button>
            <button
              className="btn btn-outline-secondary flex-fill"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
