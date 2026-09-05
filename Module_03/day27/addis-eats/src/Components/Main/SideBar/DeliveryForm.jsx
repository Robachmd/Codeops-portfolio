import { useState } from "react";

function DeliveryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const phoneRegex =
    /^(\+2519|\+2517|09|07)\d{8}$/;

  function handleChange(event) {
    const { name, value, } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const isPhoneValid =
    phoneRegex.test(formData.phone);

  const isFormValid = formData.name.trim() !== "" && isPhoneValid && formData.area.trim() !== "";

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log(
      "Delivery information:",
      formData
    );

    alert("Order placed successfully!");

    setFormData({
      name: "",
      phone: "",
      area: "",
    });
  }

  return (
    <section className="delivery-form">
      <h2>Delivery Information</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="TeleBirr phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Delivery area"
          value={formData.area}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={!isFormValid}
        >
          Place Order
        </button>
      </form>
    </section>
  );
}

export default DeliveryForm;