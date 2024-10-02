import React from "react";
import style from "./Footer.module.css";
import GetInTouchButton from "../GetInTouchButton/GetInTouchButton";

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <span className={style.purpleText}>Let's </span>Work
        </div>
        <div className={style.titleAltContainer}>
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.625 35.75C47.7529 35.75 39.75 27.7471 39.75 17.875V2C39.75 0.895431 38.8546 0 37.75 0C36.6454 0 35.75 0.895432 35.75 2V17.875C35.75 27.7471 27.7471 35.75 17.875 35.75H2C0.895431 35.75 0 36.6454 0 37.75C0 38.8546 0.895432 39.75 2 39.75H17.875C27.7471 39.75 35.75 47.7529 35.75 57.625V73.5C35.75 74.6046 36.6454 75.5 37.75 75.5C38.8546 75.5 39.75 74.6046 39.75 73.5V57.625C39.75 47.7529 47.7529 39.75 57.625 39.75H73.5C74.6046 39.75 75.5 38.8546 75.5 37.75C75.5 36.6454 74.6046 35.75 73.5 35.75H57.625Z"
              fill="url(#paint0_linear_4901_1348)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4901_1348"
                x1="30.2993"
                y1="1.28081e-06"
                x2="88.5833"
                y2="31.9373"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.14" stop-color="#FF82FE" />
                <stop offset="1" stop-color="#4E5DFE" />
              </linearGradient>
            </defs>
          </svg>
          <span className={style.titleALt}>Together</span>
        </div>
      </div>
      <GetInTouchButton />
      <div className={style.footerBottom}>
        <div className={style.bottomContainer}>
          <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp" />
          <p className={style.newsletter}>Newsletter</p>
          <p className={style.text}>
            Sign up to receive latest news and exclusive content.
          </p>
          <div className={style.emailContainer}>
            <input type="email" placeholder="Enter your email" />
            <div className={style.subsBtn}>Subscribe</div>
          </div>
        </div>
        <div className={style.footerMenu}>
          <div>
            <p className={style.header}>Menu</p>
            <p>Home V1</p>
            <p>Home V2</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Career</p>
          </div>
          <div>
            <p className={style.header}>Pages</p>
            <p>Service</p>
            <p>Service Single</p>
            <p>Project </p>
            <p>Project Single</p>
            <p>Pricing Single</p>
            <p>Blog Single</p>
            <p>Career Single</p>
          </div>
          <div>
            <p className={style.header}>Utility Pages</p>
            <p>Style Guide</p>
            <p>Changelog</p>
            <p>Licence</p>
            <p>404 Not Found</p>
            <p>Protect Password</p>
            <p>See More Templates</p>
          </div>
        </div>
      </div>
    </>
  );
}
