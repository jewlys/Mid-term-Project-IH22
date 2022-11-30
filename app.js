const button = document.getElementById("getintouch");
if (getintouch) {
    getintouch.addEventListener("click", function (e) {
    });
  }

  const hamburger = document.querySelector("");
  const navMenu = document.querySelector("");
  const navBar = document.querySelector("");
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navBar.classList.remove("active");
  })

const createContactForm = () => {
  return `
        <h1 class="bold-60 color-dark-grey text-center md:text-left mb-8 md:ml-3 md:mb-12">Contact Us</h1>
        <form action="/" method="get" class="w-auto m-4 md:grid md:grid-cols-2">
            <label for="name" class="regular-20 color-medium-grey w-full md:col-span-2 md:order-1">Full Name *</label>
            <input type="text" id="name" placeholder="Enter your full name" required class="mb-8 mt-2 bg-medium-grey-op1 color-medium-grey w-full regular-17 p-2 md:p-4 md:col-span-2 md:order-2">
            <label for="email" class="regular-20 color-medium-grey w-full md:order-3">Email</label>
            <input type="email" id="email" placeholder="Enter your email address" class="mb-8 mt-2 bg-medium-grey-op1 color-medium-grey w-full regular-17 p-2 md:p-4 md:order-5 md:w-11/12">
            <label for="phone" class="regular-20 color-medium-grey w-full md:order-4">Phone</label>
            <input type="text" id="phone" placeholder="Enter your phone number" class="mb-8 mt-2 bg-medium-grey-op1 color-medium-grey w-full regular-17 p-2 md:p-4 md:order-6">
            <label for="message" class="regular-20 color-medium-grey w-full md:col-span-2 md:order-7">Message</label>
            <textarea id="message" cols="30" rows="10" placeholder="Write your message here ..." class="mb-8 mt-2 bg-medium-grey-op1 color-medium-grey w-full regular-17 p-2 md:p-4 md:col-span-2 md:order-8"></textarea>
            <button class="bg-dark-blue medium-17 color-white w-full py-2 md:order-9 md:col-span-2 md:py-4">Submit</button>
        </form>
    
    `
}