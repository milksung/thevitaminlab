<template>
  <section class="product-2-area product-page">
    <div class="cart-wrap col-lg-12">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="main-heading">Shopping Cart</div>
            <div class="table-cart table-responsive">
              <table class="">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="display-flex align-center">
                        <div class="img-product">
                          <img
                            src="assets/images/product/detail_product1.png"
                            alt=""
                            class="mCS_img_loaded"
                          />
                        </div>
                        <div class="name-product">
                          3C COMPLEX
                          <br />30 เม็ด
                        </div>
                        <div class="price">990 ฿</div>
                      </div>
                    </td>
                    <td class="product-count">
                      <form action="#" class="count-inlineflex">
                        <div class="qtyminus">-</div>
                        <input
                          type="text"
                          name="quantity"
                          value="1"
                          class="qty"
                        />
                        <div class="qtyplus">+</div>
                      </form>
                    </td>
                    <td>
                      <div class="total">990.00 ฿</div>
                    </td>
                    <td>
                      <a href="#" title="">
                        <img
                          src="assets/images/icons/delete.png"
                          alt=""
                          class="mCS_img_loaded"
                          width="32px"
                          height="32px"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="display-flex align-center">
                        <div class="img-product">
                          <img
                            src="assets/images/product/detail_product1.png"
                            alt=""
                            class="mCS_img_loaded"
                          />
                        </div>
                        <div class="name-product">
                          3C COMPLEX
                          <br />30 เม็ด
                        </div>
                        <div class="price">990 ฿</div>
                      </div>
                    </td>
                    <td class="product-count">
                      <form action="#" class="count-inlineflex">
                        <div class="qtyminus">-</div>
                        <input
                          type="text"
                          name="quantity"
                          value="1"
                          class="qty"
                        />
                        <div class="qtyplus">+</div>
                      </form>
                    </td>
                    <td>
                      <div class="total">990.00 ฿</div>
                    </td>
                    <td>
                      <a href="#" title="">
                        <img
                          src="assets/images/icons/delete.png"
                          alt=""
                          class="mCS_img_loaded"
                          width="32px"
                          height="32px"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="coupon-box">
                <form action="#" method="get" accept-charset="utf-8">
                  <div class="coupon-input">
                    <input
                      type="text"
                      name="coupon code"
                      placeholder="Coupon Code"
                    />
                    <button type="submit" class="round-black-btn">
                      Apply Coupon
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- /.table-cart -->
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-lg-4">
            <div class="cart-totals">
              <h3>Cart Totals</h3>
              <form action="#" method="get" accept-charset="utf-8">
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td class="subtotal">1,980.00 ฿</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td class="free-shipping">Free Shipping</td>
                    </tr>
                    <tr class="total-row">
                      <td>Total</td>
                      <td class="price-total">1,980.00 ฿</td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn-cart-totals">
                  <a href="/product" class="update round-black-btn" title=""
                    >Update Cart</a
                  >
                  <a href="/payment" class="checkout round-black-btn" title=""
                    >Proceed to Checkout</a
                  >
                </div>
                <!-- /.btn-cart-totals -->
              </form>
              <!-- /form -->
            </div>
            <!-- /.cart-totals -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>
</style>
