import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, seCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name + " " + tel + " " + city);
      }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="tel"
          name="number"
          placeholder="Tel"
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          placeholder="City"
          defaultValue={city}
          onChange={(e) => {
            seCity(e.target.value);
          }}
        />
      </div>
      <button disabled={name.length === 0 || tel.length === 0}>Send</button>
    </form>
  );
};
