import React from "react";

const Help = () => {
  return (
    <div>
      <div className="mt-16 mb-28">
        <div class="max-w-screen-xl mx-auto px-5 py-10 bg-white min-h-sceen ">
          <div class="flex flex-col items-center">
            <h2 class="font-bold text-4xl mt-5 tracking-tight text-center">
              Help & Support
            </h2>
            <p class="text-neutral-500 text-xl mt-3 text-center">
              Let's take a step ahead and help you better.
            </p>
          </div>
          <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> What is Swiggy Customer Care Number?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We value our customer’s time and hence moved away from a
                  single customer care number to a comprehensive chat-based
                  support system for quick and easy resolution. You no longer
                  have to go through the maze of an IVRS call support. Just
                  search for your issue in the help section on this page and
                  initiate a chat with us. A customer care executive will be
                  assigned to you shortly. You can also email us your issue on
                  support@swiggy.in Note: We value your privacy and your
                  information is safe with us. Please do not reveal any personal
                  information, bank account number, OTP etc. to another person.
                  A Swiggy representative will never ask you for these details.
                  Please do not reveal these details to fraudsters and imposters
                  claiming to be calling on our behalf. Be vigilant and do not
                  entertain phishing calls or emails.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I edit my order?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Your order can be edited before it reaches the restaurant. You
                  could contact customer support team via chat or call to do so.
                  Once order is placed and restaurant starts preparing your
                  food, you may not edit its contents
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>I want to cancel my order</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We will do our best to accommodate your request if the order
                  is not placed to the restaurant (Customer service number:
                  080-67466729). Please note that we will have a right to charge
                  a cancellation fee up to full order value to compensate our
                  restaurant and delivery partners if your order has been
                  confirmed.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Is there a minimum order value?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We have no minimum order value and you can order for any
                  amount.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
