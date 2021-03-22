<template>
  <section class="services-area pt-90 pb-120">
    <div class="container">
      <div class="note">
        <h1 class="note-register">เข้าสู่ระบบ</h1>
      </div>

      <div class="form-content">
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <a href="" class="btn btn-block btn-twitter">
              <i class="fa fa-google" aria-hidden="true"></i>  Login via
              Google</a
            >
            <a href="" class="btn btn-block btn-facebook">
              <i class="fa fa-facebook-official" aria-hidden="true"></i> Login
              via facebook</a
            >
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <p class="divider-text">
              <span class="bg-light">OR</span>
            </p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Email address"
                type="email"
              />
            </div>
            <!-- form-group// -->

            <!-- form-group end.// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Password"
                type="password"
              />
            </div>

            <!-- form-group// -->
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                login
              </button>
            </div>
            <!-- form-group// -->
            <p class="text-center">
              Have not an account? <a href="/register">register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
</style>
