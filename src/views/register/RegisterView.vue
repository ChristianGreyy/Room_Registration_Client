<script setup>
console.log("ok");
</script>
<template>
  <div class="content">
    <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
        <div class="col-md-8">
          <div class="form h-100">
            <h3>Đăng ký phòng học thực hành</h3>
            <form
              class="mb-5"
              method="post"
              id="contactForm"
              name="contactForm"
            >
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Tên giảng viên *</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Phòng học*</label>
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Tên phòng học"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Tiết bắt đầu</label>
                  <select name="subject" id="subject" class="form-control">
                    <option>Tiết 1</option>
                    <option>Tiết 2</option>
                    <option>Tiết 3</option>
                  </select>
                </div>
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Tiết kết thúc</label>
                  <select name="subject" id="subject" class="form-control">
                    <option>Tiết 1</option>
                    <option>Tiết 2</option>
                    <option>Tiết 3</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mb-5">
                  <label for="subject" class="col-form-label">Môn học *</label>
                  <select name="subject" id="subject" class="form-control">
                    <option>PHP</option>
                    <option>NodeJS</option>
                    <option>Python</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mb-5">
                  <label for="message" class="col-form-label"
                    >Ghi chú thêm *</label
                  >
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary rounded-0 py-2 px-4"
                  />
                  <span class="submitting"></span>
                </div>
              </div>
            </form>
            <div id="form-message-warning mt-4"></div>
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-info h-100">
            <h3>Contact Information</h3>
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, magnam!
            </p>
            <ul class="list-unstyled">
              <li class="d-flex">
                <span class="wrap-icon icon-room mr-3"></span>
                <span class="text"
                  >9757 Aspen Lane South Richmond Hill, NY 11419</span
                >
              </li>
              <li class="d-flex">
                <span class="wrap-icon icon-phone mr-3"></span>
                <span class="text">+1 (291) 939 9321</span>
              </li>
              <li class="d-flex">
                <span class="wrap-icon icon-envelope mr-3"></span>
                <span class="text"
                  ><a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="d0b9beb6bf90bda9a7b5b2a3b9a4b5feb3bfbd"
                    >[email&#160;protected]</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  line-height: 1.9;
  color: #8c8c8c;
  position: relative;
}
body:before {
  z-index: -1;
  position: absolute;
  height: 50vh;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  background: #8bbabb;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Roboto", sans-serif;
  color: #000;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

.text-black {
  color: #000;
}

.content {
  padding: 7rem 0;
}

.heading {
  font-size: 2.5rem;
  font-weight: 900;
}

.form-control {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  background: none;
}
.form-control:active,
.form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000;
}

.col-form-label {
  color: #000;
  font-size: 13px;
}

.btn,
.form-control,
.custom-select {
  height: 45px;
}

.custom-select:active,
.custom-select:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000;
}

.btn {
  border: none;
  border-radius: 0;
  font-size: 12px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}
.btn.btn-primary {
  background: #35477d;
  color: #fff;
  padding: 15px 20px;
}
.btn:hover {
  color: #fff;
}
.btn:active,
.btn:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.contact-wrap {
  -webkit-box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
}
.contact-wrap .col-form-label {
  font-size: 14px;
  color: #b3b3b3;
  margin: 0 0 10px 0;
  display: inline-block;
  padding: 0;
}
.contact-wrap .form,
.contact-wrap .contact-info {
  padding: 40px;
}
.contact-wrap .contact-info {
  color: rgba(255, 255, 255, 0.5);
}
.contact-wrap .contact-info ul li {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.5);
}
.contact-wrap .contact-info ul li .wrap-icon {
  font-size: 20px;
  color: #fff;
  margin-top: 5px;
}
.contact-wrap .form {
  background: #fff;
}
.contact-wrap .form h3 {
  color: #35477d;
  font-size: 20px;
  margin-bottom: 30px;
}
.contact-wrap .contact-info {
  background: #35477d;
}
.contact-wrap .contact-info h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 30px;
}

label.error {
  font-size: 12px;
  color: red;
}

#message {
  resize: vertical;
}

#form-message-warning,
#form-message-success {
  display: none;
}

#form-message-warning {
  color: #b90b0b;
}

#form-message-success {
  color: #55a44e;
  font-size: 18px;
  font-weight: bold;
}

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-weight: bold;
  font-size: 12px;
  color: #000;
}
</style>
