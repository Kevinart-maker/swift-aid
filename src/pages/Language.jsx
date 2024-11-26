import React, { useState } from "react";
import Flag from "react-world-flags";

const Language = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [activeDiv, setActiveDiv] = useState();

  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
  ];

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Selected Country:", event.target.value);
  };

  const handleDivClick = (id) => {
    setActiveDiv(id); // Set the active div by its id
  };

  return (
    <div className="language-container">
        <h2><i className="fa-solid fa-arrow-left"></i> Select Your Country</h2>
        <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search" />
        </div>
      <form>
        {countries.map((country) => (
          <label key={country.code} style={{ display: "flex", alignItems: "center"}} className={`${selectedCountry === country.name ? 'active' : ''}`}>
            <Flag code={country.code} style={{ width: "30px", borderRadius: '5px'}} />
            <span className="code">{country.code}</span>
            <span>{country.name}</span>
            <input
              type="radio"
              name="country"
              value={country.name}
              checked={selectedCountry === country.name}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
          </label>
        ))}
      </form>
      {selectedCountry && (
        <div style={{ marginTop: "20px", color: "green" }}>
          {selectedCountry}
        </div>
      )}
      <div className="btn">Continue</div>
    </div>
  );
};

export default Language;