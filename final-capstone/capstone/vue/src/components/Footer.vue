<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">
          {{ text }}
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter font-awesome"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f font-awesome"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in font-awesome"></i>
          </a>
        </div>
        <div class="col-lg-4 text-lg-end">
          <a class="link-dark text-decoration-none me-3" href="#!"
            >Privacy Policy</a
          >
          <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>