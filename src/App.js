import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { add, selectshops } from "./features/shop/shopSlice";
import ShopCard from "./components/ShopCard";

function App() {
  const shops = useSelector(selectshops);

  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState({
    area: "All",
    category: "All",
    status: "Open",
  });

  const [shop, setShop] = React.useState({
    name: "",
    area: "default",
    category: "default",
    start: "",
    end: "",
  });
  function checkDate(start, end) {
    console.log(start);
    if (Date.parse(start) < Date.parse(end)) {
      return true;
    } else {
      return false;
    }
  }
  function validateDate(start, end) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;

    if (
      Date.parse(start) < Date.parse(fullDate) &&
      Date.parse(end) > Date.parse(fullDate)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  }
  function handleFilterChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  }

  return (
    <div className="App">
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          marginTop: "1em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <label style={{ margin: "1em" }}>Add shop</label>
          <input
            type="text"
            pattern="[a-zA-Z]*"
            onChange={handleChange}
            name="name"
            value={shop.name}
            placeholder="Shop Name"
            style={{ border: "solid 0.1em black", margin: "1em" }}
            required
          />

          <label style={{ margin: "1em" }}>Area</label>
          <select
            onChange={handleChange}
            placeholder="Select Area"
            id="area"
            name="area"
            style={{ border: "solid 0.1em black", margin: "1em" }}
            required
          >
            <option value="default" selected>
              Select Area
            </option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>

          <label style={{ margin: "1em" }}>Category</label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            style={{ border: "solid 0.1em black", margin: "1em" }}
            required
          >
            <option value="default">Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationery Shop">Stationery Shop</option>
          </select>

          <label style={{ margin: "1em" }}>Start Date</label>
          <input name="start" type="date" onChange={handleChange} required />
          <label style={{ margin: "1em" }}>End Date</label>
          <input name="end" type="date" onChange={handleChange} required />
          <button
            onClick={() => {
              if (
                checkDate(shop.start, shop.end) &&
                shop.name !== "" &&
                shop.area !== "default" &&
                shop.category !== "default"
              ) {
                dispatch(add(shop));
              } else {
                alert("Some error occurred please revalidate form.");
              }
            }}
            style={{
              background: "yellow",
              border: "0.01rem solid black",
              height: "2em",
              borderRadius: "1em",
              padding: "0 1em",
            }}
          >
            Submit
          </button>
        </div>

        {/* For Filter */}
        <div
          style={{
            border: "solid 1px black",
            margin: "0 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ margin: "0 15px" }}>Filter</span>
          <div>
            Area{" "}
            <select
              name="area"
              onChange={handleFilterChange}
              style={{ border: "solid 0.1em black", margin: "1em" }}
            >
              <option value="All">All</option>
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select>
          </div>
          <div>
            Category
            <select
              name="category"
              onChange={handleFilterChange}
              style={{ border: "solid 0.1em black", margin: "1em" }}
            >
              {" "}
              <option value="All">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery Shop">Stationery Shop</option>
            </select>
          </div>

          <div>
            Status
            <select
              name="status"
              onChange={handleFilterChange}
              style={{ border: "solid 0.1em black", margin: "1em" }}
            >
              {" "}
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {console.log(shops)}
          {shops.map((item, index) => {
            if (
              (item.area == filter.area || filter.area == "All") &&
              (item.category == filter.category || filter.category == "All") &&
              filter.status == "Open"
            ) {
              console.log("open");
              if (validateDate(item.start, item.end)) {
                return (
                  <ShopCard
                    id={index}
                    key={index}
                    name={item.name}
                    area={item.area}
                    category={item.category}
                    startDate={item.start}
                    endDate={item.end}
                  ></ShopCard>
                );
              }
            } else if (
              (item.area == filter.area || filter.area == "All") &&
              (item.category == filter.category || filter.category == "All") &&
              filter.status == "Closed"
            ) {
              console.log("close");
              if (!validateDate(item.start, item.end)) {
                return (
                  <ShopCard
                    id={index}
                    key={index}
                    name={item.name}
                    area={item.area}
                    category={item.category}
                    startDate={item.start}
                    endDate={item.end}
                  ></ShopCard>
                );
              }
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
