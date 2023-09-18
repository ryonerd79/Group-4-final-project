import React, { useState } from 'react';
import { CardElement, useStripe, useElements, loadStripe } from '@stripe/react-stripe-js';

// Replace with your actual publishable key
const stripePromise = loadStripe('pk_test_51Nr7aaHn4n6n07LMGep8yhJw5BAqswNoIMAtHsAiTpyK92NHJU7ftjLBv9sLNyPGJosLcKSH6QSPlOC1170XfUtl00Ir6Qj082');

const TipForm = () => {
  const [amount, setAmount] = useState(10); // Initial tip amount
  const stripe = useStripe();
  const elements = useElements();

  const handleDonation = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }), // Send the tip amount in cents to your server
      });

      const { clientSecret } = await response.json();

      // Confirm the payment using Stripe.js
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
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
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      <button onClick={handleDonation}>Tip</button>
    </div>
  );
};

export default TipForm;
