<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>Checkout form</h2>
      <p class="lead">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </div>

    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li
            class="list-group-item d-flex justify-content-between lh-condensed"
          >
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$12</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between lh-condensed"
          >
            <div>
              <h6 class="my-0">Second product</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$8</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between lh-condensed"
          >
            <div>
              <h6 class="my-0">Third item</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">-$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-secondary">Redeem</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-8 order-md-1">
        <div class="card-body p-5">
          <ul
            class="nav bg-light nav-pills rounded nav-fill mb-3"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="pill"
                href="#nav-tab-card"
              >
                <i class="fa fa-credit-card"></i> Credit Card</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                <i class="fa fa-paypal" aria-hidden="true"></i> Paypal</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                <i class="fa fa-university"></i> Bank Transfer</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="nav-tab-card">
              <p class="alert alert-success">Some text success or error</p>
              <form role="form" action="/Receipt">
                <div class="form-group">
                  <label for="username">Full name (on the card)</label>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder=""
                  />
                </div>
                <!-- form-group.// -->

                <div class="form-group">
                  <label for="cardNumber">Card number</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      name="cardNumber"
                      placeholder=""
                    />
                    <div class="input-group-append">
                      <span class="input-group-text text-muted">
                        <i class="fa fa-cc-visa" aria-hidden="true"></i> &nbsp;
                        <i class="fa fa-cc-amex" aria-hidden="true"></i> &nbsp;
                        <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- form-group.// -->

                <div class="row">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label><span class="hidden-xs">Expiration</span> </label>
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="MM"
                          name=""
                        />
                        <input
                          type="number"
                          class="form-control"
                          placeholder="YY"
                          name=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label
                        data-toggle="tooltip"
                        title=""
                        data-original-title="3 digits code on back side of the card"
                        >CVV
                        <i class="fa fa-question-circle" aria-hidden="true"></i
                      ></label>
                      <input type="number" class="form-control" />
                    </div>
                    <!-- form-group.// -->
                  </div>
                </div>
                <!-- row.// -->
                <button
                  class="subscribe btn btn-primary btn-block"
                  type="submit"
                >
                  Confirm
                </button>
              </form>
            </div>
            <!-- tab-pane.// -->
            <div class="tab-pane fade" id="nav-tab-paypal">
              <p>Paypal is easiest way to pay online</p>
              <p>
                <button type="button" class="btn btn-primary">
                  <i class="fa fa-paypal"></i> Log in my Paypal
                </button>
              </p>
              <p>
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-tab-bank">
              <p>Bank accaunt details</p>
              <dl class="param">
                <dt>BANK:</dt>
                <dd>THE WORLD BANK</dd>
              </dl>
              <dl class="param">
                <dt>Accaunt number:</dt>
                <dd>12345678912345</dd>
              </dl>
              <dl class="param">
                <dt>IBAN:</dt>
                <dd>123456789</dd>
              </dl>
              <p>
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <!-- tab-pane.// -->
          </div>
          <!-- tab-content .// -->
        </div>
        <!-- card-body.// -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetail",
};
</script>

<style scoped>
</style>
