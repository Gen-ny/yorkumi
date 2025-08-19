import React, { useState } from "react";
import { Link, useLocation  } from "react-router";

export default function PaymentAndDelivery() {

  const location = useLocation();
  const subtotal = location.state?.subtotal || 0;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "card",
    cardNumber: "",
    expiry: "",
    cvc: "",
    momoNetwork: "",
    momoNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_268f3b0f6562fa8da51210cd65e6f12c4c8273f4", 
      email: formData.email,
      amount: subtotal * 100 ,
      currency: "GHS",
      channels:
        formData.paymentMethod === "momo"
          ? ["mobile_money"]
          : ["card", "mobile_money", "bank", "ussd"],

      metadata: {
        custom_fields: [
          { display_name: "Full Name", variable_name: "full_name", value: formData.fullName },
          { display_name: "Phone Number", variable_name: "phone_number", value: formData.phone },
          { display_name: "Address", variable_name: "address", value: formData.address },
        ],
      },
      callback: function (response) {
        alert("Payment complete! Reference: " + response.reference);
        console.log("Payment success:", response);
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentMethod === "cash") {
      alert("Order placed with Cash on Delivery");
      console.log("Cash order details:", formData);
    } else {
      handlePaystackPayment();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1009] to-[#D0CBC8] py-8 px-4">
      <div className="max-w-4xl mx-auto bg-[#D0CBC8] shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Payment & Delivery Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Delivery Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <textarea
                name="address"
                placeholder="Full Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full col-span-1 md:col-span-2"
                rows="3"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Payment Method
            </h2>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="momo"
                  checked={formData.paymentMethod === "momo"}
                  onChange={handleChange}
                />
                Mobile Money
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full md:col-span-2"
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full"
                  required
                />
                <input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full"
                  required
                />
              </div>
            )}

            {formData.paymentMethod === "momo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <select
                  name="momoNetwork"
                  value={formData.momoNetwork}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full"
                  required
                >
                  <option value="">Select Network</option>
                  <option value="MTN">MTN</option>
                  <option value="Telecel">Telecel</option>
                  <option value="AirtelTigo">AirtelTigo</option>
                </select>
                <input
                  type="tel"
                  name="momoNumber"
                  placeholder="Mobile Money Number"
                  value={formData.momoNumber}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full"
                  required
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Complete Purchase
          </button>
          <Link to="/product"><p className="text-center  text-red-600">❌ Cancel <span className="cursor-pointer">Order</span></p></Link>
        </form>
      </div>
    </div>
  );
}