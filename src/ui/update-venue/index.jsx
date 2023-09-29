import { useState } from "react";
import { useLoad } from "../../hooks/storage";
import { InputLabelWrap, StyledForm, SubmitBtn } from "./style";

export default function UpdateVenueForm(props) {

    const [
      updateVenue,
      setUpdateVisible,
      setInitialVenues,
    ] = props.children;

    const [ name, setName ] = useState(updateVenue.name);
    const [ description, setDescription ] = useState(updateVenue.description);
    const [ media, setMedia ] = useState(updateVenue.media);
    const [ price, setPrice ] = useState(updateVenue.price);
    const [ maxGuests, setMaxGuests ] = useState(updateVenue.maxGuests);
    const [ rating, setRating ] = useState(updateVenue.rating);

    const [ wifi, setWifi ] = useState(false);
    const [ parking, setParking ] = useState(false);
    const [ breakfast, setBreakfast ] = useState(false);
    const [ pets, setPets ] = useState(false);

    const [ address, setAdress ] = useState(updateVenue.location.address);
    const [ city, setCity ] = useState(updateVenue.location.city);
    const [ zip, setZip ] = useState(updateVenue.location.zip);
    const [ country, setCountry ] = useState(updateVenue.location.country);
    const [ continent, setContinent ] = useState(updateVenue.location.continent);
    const [ lat, setLat ] = useState(updateVenue.location.lat);
    const [ ing, setIng ] = useState(updateVenue.location.ing);

    const [ userFeedBack, setUserFeedBack ] = useState("");
    const user = useLoad("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserFeedBack("Loading . . .")

    const submitData = {
        name: name,
        description: description,
        media: media,
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
            country: country,
            continent: continent,
            lat: parseInt(lat),
            ing: parseInt(ing),
        }
    };
    submitData.media = submitData.media.filter(
      (mediaUrl) => mediaUrl.trim() !== ""
    );

    if (submitData.media.length === 0) {
      delete submitData.media;
    }
    const dataToSend = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
    }

    const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${updateVenue.id}?_venue=true`, dataToSend);
    const json = await response.json();
    console.log(json)
    if(response.ok) {
      setUpdateVisible(false);
      setInitialVenues((state) => [
        {
          bookings: [],
          created: json.created,
          description: json.description,
          id: json.id,
          location: json.location,
          maxGuests: json.maxGuests,
          media: json.media,
          meta: json.meta,
          name: json.name,
          price: json.price,
          rating: json.rating,
          updated: json.updated,
        }, ...state
      ]);
    } if(!response.ok) { 
      setUserFeedBack("Something went wrong when we where trying to send your data. Please try again later.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>{userFeedBack}</div>
      <div>
        <h2>Update venue <i className="fa-solid fa-pen-to-square"></i></h2>
        <h3>Description</h3>
        <InputLabelWrap>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </InputLabelWrap>
        {}
        <InputLabelWrap>
          <label htmlFor="media">Media (comma-separated)</label>
          <textarea
            type="text"
            id="media"
            name="media"
            placeholder="url1,url2"
            value={media}
            pattern=""
            onChange={(e) => setMedia(e.target.value.split(","))}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="maxGuests">Max Guests:</label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            value={maxGuests}
            onChange={(e) => setMaxGuests(e.target.value)}
            required
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </InputLabelWrap>
      </div>
      <div>
        <h3>Meta</h3>
        <InputLabelWrap>
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
        </InputLabelWrap>
        <InputLabelWrap>
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
        </InputLabelWrap>
        <InputLabelWrap>
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
        </InputLabelWrap>
        <InputLabelWrap>
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
        </InputLabelWrap>
      </div>
      <div>
        <h3>Location</h3>
        <InputLabelWrap>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="zip">ZIP:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="continent">Continent:</label>
          <input
            type="text"
            id="continent"
            name="continent"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="lat">Latitude:</label>
          <input
            type="number"
            id="lat"
            name="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </InputLabelWrap>
        <InputLabelWrap>
          <label htmlFor="lng">Longitude:</label>
          <input
            type="number"
            id="lng"
            name="lng"
            value={ing}
            onChange={(e) => setIng(e.target.value)}
          />
        </InputLabelWrap>
      </div>
      <div>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </div>
    </StyledForm>
  );
}