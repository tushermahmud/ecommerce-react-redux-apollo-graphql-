import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButtonComponent=({price})=>{
    const publishableKey="pk_test_51GzNQpIsMt34jfkwBHAutiwCP650TtIAUvcXm8XusKKvVVt9xtOmMIEeyCepbXJsYRnY7VgXCxaDaoMrikGfyzkM00tjXT3U5k";
    const onToken=token=>{
        console.log(token);
        alert("Payment Successful!");
    }
    return(
      <div>
            <StripeCheckout label="Pay Now"
                            name="Tusher Store Ltd."
                            billingAddress
                            shippingAddress
                            image="https://svgshare.com/i/CUz.svg"
                            description={`Your Total Is ${price}`}
                            amount={price}
                            panelLabel="Pay Now"
                            token={onToken}
                            stripeKey={publishableKey}/>
      </div>
    );
}
export default StripeButtonComponent;