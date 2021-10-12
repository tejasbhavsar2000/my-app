import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { add, selectshops } from "./features/counter/counterSlice";
import ShopCard from "./components/ShopCard";

function App() {
  const shops = useSelector(selectshops);

  const dispatch = useDispatch();
  const [shop, setShop] = React.useState({
    name: "",
    area: "default",
    category: "default",
    start: "",
    end: "",
  });

  function checkDate(start, end) {
    if (Date.parse(start) < Date.parse(end)) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setShop({ ...shop, [name]: value });
    console.log(shop);
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
            style={{ border: "solid 0.2em black", margin: "1em" }}
            required
          />

          <label style={{ margin: "1em" }}>Area</label>
          <select
            onChange={handleChange}
            placeholder="Select Area"
            id="area"
            name="area"
            style={{ border: "solid 0.2em black", margin: "1em" }}
            required
          >
            <option value="default" selected>
              Select Area
            </option>
            <option value="thane">Thane</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai Suburban</option>
            <option value="nashik">Nashik</option>
            <option value="nagpur">Nagpur</option>
            <option value="ahmed">Ahmednagar</option>
            <option value="solapur">Solapur</option>
          </select>

          <label style={{ margin: "1em" }}>Category</label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            style={{ border: "solid 0.2em black", margin: "1em" }}
            required
          >
            <option value="default">Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="butcher">Buthcer</option>
            <option value="baker">Baker</option>
            <option value="chemist">Chemist</option>
            <option value="stationery">Stationery Shop</option>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {console.log(shops)}
          {shops.map((item) => {
            return (
              <ShopCard
                name={item.name}
                area={item.area}
                category={item.category}
                startDate={item.start}
                endDate={item.end}
              >
                {" "}
              </ShopCard>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
