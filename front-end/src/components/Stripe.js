import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LlFCwSGS1kWd4TgX4tRKZBgVeogZKDwHxIKGMpBeslRBKwjDXiPVzwm4tWZoWq9R17tgc0FVz5tgLgFqKe8vvhs00ZBiedfzT');

export function Stripe() {
  const secret = 'sk_test_51LlFCwSGS1kWd4Tg0sTmrisowAhM531Z72j0RLZoJFNOMQkO7TOBMSr5DrsWvJt8HlmCnoYiNgLrmb0yaaiS9YWT00VzQtef2A'
  const id = 'sk'
  const options = {
    // passing the client secret obtained from the server
    clientSecret: `${id}_secret_${secret}`,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};