/*import React, { useState } from 'react';

const TipForm = () => {
  const [amount, setAmount] = useState(1); // Initial tip amount

  const handleTip = async () => {
    const stripe = await stripePromise;

    // Create a PaymentIntent on your server and fetch its client secret
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }), // Send the tip amount to your server
    });

    const { clientSecret } = await response.json();

    // Use Stripe.js to confirm the payment on the client side
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: stripe.elements.getElement('cardElement'),
        billing_details: {
          name: 'Donor Name',
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Payment succeeded, handle success behavior here
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTip}>Donate</button>
    </div>
  );
};

export default TipForm;
*/