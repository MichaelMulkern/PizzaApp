<template>
  <body id="page-top">
    <NavBar />
    <header class="masthead" id="top-of-page">
      <div class="container-fluid">
        <div class="masthead-subheading">Welcome to Pizza Pazza!</div>
        <div class="masthead-heading text-uppercase">Place YOUR Order Now!</div>
        <router-link
          v-bind:to="{ name: 'menu-view' }"
          class="btn btn-primary btn-xl text-uppercase"
          href="#whyus"
          >PLACE ORDER</router-link
        >
      </div>
    </header>
    <!-- Why us?-->
    <section class="page-section" id="whyus">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">WHY US?</h2>
          <h3 class="section-subheading text-white">
            Rated #1 Pizza in the Chicago area 3 years running!
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <div class="circle-icon">
              <img
                class="circle-icon-image"
                src="../assets/freshIngredients.jpg"
                alt="Ingredient Icon"
              />
            </div>
            <h4 class="my-3">The Freshest Ingredients</h4>
            <p class="text-white">
              We don't just pick ingredients from your local grocery store, we
              import the very best toppings, sauces, and oils from the Napoli
              region in Italy. Come and try it for yourself.
            </p>
          </div>
          <div class="col-md-4">
            <div class="circle-icon">
              <img
                class="circle-icon-image"
                src="../assets/Chef.jpg"
                alt="..."
              />
            </div>
            <h4 class="my-3">Top Notch Talent</h4>
            <p class="text-white">
              We don't just hire anybody, we hire the best! Our kitchen staff
              has many years of experience rolling dough, tossing dough, and
              putting in all the work and experience needed to build best pizza!
            </p>
          </div>
          <div class="col-md-4">
            <div class="circle-icon">
              <img
                class="circle-icon-image"
                src="../assets/family.jpg"
                alt="..."
              />
            </div>
            <h4 class="my-3">A Long Family History</h4>
            <p class="text-white">
              Established in 1918, Pizza Pazza has been a family business for
              generations now. The knowledge of pizza is not just in our blood,
              it's in our DNA. Our family has carried on the tradtion year after
              year.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- About-->
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">
            Learn the history of Chicago's best pizza.
          </h3>
        </div>
        <ul class="timeline">
          <li>
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="../assets/man.jpg"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>October 1919</h4>
                <h4 class="subheading">Our Humble Beginnings</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Great great grandfather, Sherwin McNeil, buys Pizza Pazza's
                  first propery on Randolph street in downtown Chicago. A prime
                  location with prime pizza to match. It was a winning recipe
                  for success from the start.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="../assets/restaurant.jpg"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>March 1982</h4>
                <h4 class="subheading">A New Agency is Born</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Our Randolph street location is retired and swapped out for a
                  bigger and brighter location. Now, located at our present
                  location on Jackson, you can go to work and grab a slice.
                  Conviniently located in the heart of downtown.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="../assets/man2.jpg"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>December 1986</h4>
                <h4 class="subheading">The Passing of a Titan</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Our founder and beloved great grandfather, Sherwin McNeil,
                  passes away leaving behind a legacy of amazing pizza but also
                  an amazing family. His son, Todd McNeil, takes over the family
                  business but making sure to stay true to their family values.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="../assets/pizza-pazza.jpg"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>June 2022</h4>
                <h4 class="subheading">Phase Two Expansion</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  We add on to our beautiful downtown property. With more
                  seating, more kitchen space, more ovens, that also means MORE
                  PIZZA! Our menu expands and we have more to offer you, the
                  customer. Try our signature BBQ pizza!
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4 class="final-circle">
                LET
                <br />
                YOUR TASTEBUDS
                <br />
                DECIDE!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- Contact-->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted" id="subtext">
            Have a question? Don't hesitate to reach out!
          </h3>
        </div>
        <!-- * * * * * * * * * * * * * * *-->
        <!-- * * SB Forms Contact Form * *-->
        <!-- * * * * * * * * * * * * * * *-->
        <!-- This form is pre-integrated with SB Forms.-->
        <!-- To make this form functional, sign up at-->
        <!-- https://startbootstrap.com/solution/contact-forms-->
        <!-- to get an API token!-->
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <!-- Name input-->
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                />
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-group">
                <!-- Email address input-->
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                />
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="form-group mb-md-0">
                <!-- Phone number input-->
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                />
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <!-- Message input-->
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          <!-- Submit success message-->
          <!---->
          <!-- This is what your users will see when the form-->
          <!-- has successfully submitted-->
          <div class="d-none" id="submitSuccessMessage">
            <div class="text-center text-white mb-3">
              <div class="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms"
                >https://startbootstrap.com/solution/contact-forms</a
              >
            </div>
          </div>
          <!-- Submit error message-->
          <!---->
          <!-- This is what your users will see when there is-->
          <!-- an error submitting the form-->
          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <!-- Submit Button-->
          <div class="text-center">
            <button
              class="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    <Footer :text="`Copyright © Pizza Pazza 2023`" />
  </body>
</template>

<script>
import "@/views/Home.css";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

window.addEventListener("DOMContentLoaded", () => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

export default {
  components: { NavBar, Footer },
  name: "home",
};
</script>

<style scoped>
.me-2 {
  height: 50%;
}
body {
  background-size: cover;
}
#about {
  background-image: url(https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg);
  background-size: cover;
  background-attachment: fixed;
  color: white;
}
#whyus.page-section,
.text-muted {
  color: white !important;
}
#whyus.page-section {
  background-image: url("https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80");
  color: white;
}
.timeline-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  padding: 1rem;
}

.timeline-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.final-circle {
  padding-bottom: 2rem;
}

.section-subheading {
  font-size: 2rem !important;
  color: white !important; /* Add this line to set the text color to white */
}
.btn-primary {
  --bs-btn-color: #fff !important;
  --bs-btn-bg: #ffc800 !important;
  --bs-btn-border-color: #ffc800 !important;
  --bs-btn-hover-color: #fff !important;
  --bs-btn-hover-bg: #d9aa00 !important;
  --bs-btn-hover-border-color: #cca000 !important;
  --bs-btn-focus-shadow-rgb: 255, 208, 38 !important;
  --bs-btn-active-color: #fff !important;
  --bs-btn-active-bg: #cca000 !important;
  --bs-btn-active-border-color: #bf9600 !important;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
  --bs-btn-disabled-color: #fff !important;
  --bs-btn-disabled-bg: #ffc800 !important;
  --bs-btn-disabled-border-color: #ffc800 !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
.page-section h3.section-subheading {
  color: white !important;
}
form {
  background-color: rgba(128, 128, 128, 0) !important;
}
.circle-icon {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #fff; /* Set a background color if needed */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.circle-icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
