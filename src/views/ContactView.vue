<template>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="https://formspree.io/f/xdoqoqjz" class="contact-form" method="post">
          <h1 class="title">Contact us</h1>
          <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" name="name" placeholder="Name" required>
          </div>
          <div>
            <input type="email" class="form-control rounded border-white mb-3 form-input" id="email" name="email" placeholder="Email" required>
          </div>
          <div>
            <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" name="message" rows="5" cols="30" placeholder="Message" required></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" value="Submit">
          </div>
        </form>
      </div>
  </template>