import { useState } from "react";

export default function ListVenueForm(props) {

    // const [ name, setName ] = useState("");
    // const [ description, setDescription ] = useState("");
    // const [ media, setMedia ] = useState([]);
    // const [ price, setPrice ] = useState(0);
    // const [ maxGuests, setMaxGuests ] = useState(0);
    // const [ rating, setRating ] = useState(0);

    // const [ meta, setMeta ] = useState({})
    // const [ wifi, setWifi ] = useState(false);
    // const [ parking, setParking ] = useState(false);
    // const [ breakfast, setBreakfast ] = useState(false);
    // const [ pets, setPets ] = useState(false);
    // return(
    //     <div>form</div>
    // )


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    media: [''],
    price: 0,
    maxGuests: 0,
    rating: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: 'Unknown',
      city: 'Unknown',
      zip: 'Unknown',
      country: 'Unknown',
      continent: 'Unknown',
      lat: 0,
      lng: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMetaChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      meta: {
        ...formData.meta,
        [name]: checked,
      },
    });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your API or perform any other actions here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="media">Media (comma-separated):</label>
        <input
          type="text"
          id="media"
          name="media"
          value={formData.media.join(',')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Max Guests:</label>
        <input
          type="number"
          id="maxGuests"
          name="maxGuests"
          value={formData.maxGuests}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <h2>Meta</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="wifi"
              checked={formData.meta.wifi}
              onChange={handleMetaChange}
            />{' '}
            Wi-Fi
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="parking"
              checked={formData.meta.parking}
              onChange={handleMetaChange}
            />{' '}
            Parking
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="breakfast"
              checked={formData.meta.breakfast}
              onChange={handleMetaChange}
            />{' '}
            Breakfast
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="pets"
              checked={formData.meta.pets}
              onChange={handleMetaChange}
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
            value={formData.location.address}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.location.city}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="zip">ZIP:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.location.zip}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.location.country}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="continent">Continent:</label>
          <input
            type="text"
            id="continent"
            name="continent"
            value={formData.location.continent}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="lat">Latitude:</label>
          <input
            type="number"
            id="lat"
            name="lat"
            value={formData.location.lat}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="lng">Longitude:</label>
          <input
            type="number"
            id="lng"
            name="lng"
            value={formData.location.lng}
            onChange={handleLocationChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}