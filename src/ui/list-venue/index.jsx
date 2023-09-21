import { useState } from "react";
import { useLoad } from "../../hooks/storage";

export default function ListVenueForm(props) {

    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ media, setMedia ] = useState([]);
    const [ price, setPrice ] = useState(0);
    const [ maxGuests, setMaxGuests ] = useState(0);
    const [ rating, setRating ] = useState(0);

    const [ meta, setMeta ] = useState({})
    const [ wifi, setWifi ] = useState(false);
    const [ parking, setParking ] = useState(false);
    const [ breakfast, setBreakfast ] = useState(false);
    const [ pets, setPets ] = useState(false);

    const [ address, setAdress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ zip, setZip ] = useState("");
    const [ contry, setContry ] = useState("");
    const [ continent, setContinent ] = useState("");
    const [ lat, setLat ] = useState(0);
    const [ ing, setIng ] = useState(0);

    const user = useLoad("user")
    const options = props.children;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
        name: name,
        description: description,
        media: [media],
        price: parseFloat(price),
        maxGuests: parseInt(maxGuests),
        rating: parseInt(rating),
        meta: {
            wifi: wifi,
            parking: parking,
            breakfast: breakfast,
            pets: pets,
        },
        location: {
            address: address,
            city: city,
            zip: zip,
            contry: contry,
            continent: continent,
            lat: parseInt(lat),
            ing: parseInt(ing),
        }
    };
    const dataToSend = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
    }
    console.log(submitData);
    console.log(options);
    const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues`, dataToSend);
    const json = await response.json();
    console.log(json)
  };

  return (
    <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {}
      <div>
        <label htmlFor="media">Media (comma-separated):</label>
        <input
          type="text"
          id="media"
          name="media"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Max Guests:</label>
        <input
          type="number"
          id="maxGuests"
          name="maxGuests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <h2>Meta</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="wifi"
              onChange={() => {
                if(wifi === false) {
                    setWifi(true)
                } if(wifi === true) {
                    setWifi(false)
                }
              }}
            />{' '}
            Wi-Fi
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="parking"
              onChange={() => {
                if(parking === false) {
                    setParking(true)
                } if(parking === true) {
                    setParking(false)
                }
              }}
            />{' '}
            Parking
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="breakfast"
              onChange={() => {
                if(breakfast === false) {
                    setBreakfast(true)
                } if(breakfast === true) {
                    setBreakfast(false)
                }
              }}
            />{' '}
            Breakfast
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="pets"
              onChange={() => {
                if(pets === false) {
                    setPets(true)
                } if(pets === true) {
                    setPets(false)
                }
              }}
            />{' '}
            Pets
          </label>
        </div>
      </div>
      <div>
        <h2>Location</h2>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="zip">ZIP:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={contry}
            onChange={(e) => setContry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="continent">Continent:</label>
          <input
            type="text"
            id="continent"
            name="continent"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lat">Latitude:</label>
          <input
            type="number"
            id="lat"
            name="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lng">Longitude:</label>
          <input
            type="number"
            id="lng"
            name="lng"
            value={ing}
            onChange={(e) => setIng(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}