import React from "react";

export default function Logo() {
  return (
    <div>
      <img
        class="App-Logo container-bar"
        src="https://i2.wp.com/mogreenway.com/wp-content/uploads/2021/05/Screenshot-2021-05-19-1.30.53-PM.png?fit=612%2C259&ssl=1"
        alt="logo"
      />

      <p class="logo-text container-bar">
        A Life Full of Joy {"   "}
        <i
          class="em em-smiling_face_with_3_hearts"
          aria-role="presentation"
          aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"
        ></i>
      </p>
      <h2 className="menu">Our Cookies</h2>
    </div>
  );
}
