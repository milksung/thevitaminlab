<template>
  <section class="services-area pt-90 pb-120">
    <div class="container">
      <div class="note">
        <h1 class="note-register">สมัครสมาชิก</h1>
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
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Full name"
                type="text"
              />
            </div>
            <!-- form-group// -->
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
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <select class="custom-select" style="max-width: 120px">
                <option selected="">+971</option>
                <option value="1">+972</option>
                <option value="2">+198</option>
                <option value="3">+701</option>
              </select>
              <input
                name=""
                class="form-control"
                placeholder="Phone number"
                type="text"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select class="form-control">
                <option selected="">Select job type</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Accaunting</option>
              </select>
            </div>
            <!-- form-group end.// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Create Account
              </button>
            </div>
            <!-- form-group// -->
            <p class="text-center">
              Have an account? <a href="/Login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "register",
};
</script>

<style scoped>
</style>
