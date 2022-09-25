import React from "react";
import {  useLocation } from "react-router-dom";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";
import classes from "./AboutMovie.module.css";

function AboutMovie() {
  const location = useLocation();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NavbarMinimal />
      </div>
      <div style={{ width: "90%", marginLeft: 160, marginTop: 60 }}>
        <>
          <div className={classes.movie}>
            <div className={classes.container}>
              <a href="#">
                <img
                  src={location.state.image}
                  alt="cover"
                  className={classes.cover}
                />
              </a>
              <div>
                <div className={classes.details}>
                  <div className={classes.title1}>{location.state.title}</div>
                  <div className={classes.title2}>
                    {location.state.fullTitle}
                  </div>
                  <fieldset className={classes.rating}>
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      defaultValue={5}
                    />
                    <label
                      className={classes.full}
                      htmlFor="star5"
                      title="Awesome - 5 stars"
                    />
                    <input
                      type="radio"
                      id="star4half"
                      name="rating"
                      defaultValue="4 and a half"
                    />
                    <label
                      className={classes.half}
                      htmlFor="star4half"
                      title="Pretty good - 4.5 stars"
                    />
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      defaultValue={4}
                      defaultChecked=""
                    />
                    <label
                      className={classes.full}
                      htmlFor="star4"
                      title="Pretty good - 4 stars"
                    />
                    <input
                      type="radio"
                      id="star3half"
                      name="rating"
                      defaultValue="3 and a half"
                    />
                    <label
                      className={classes.half}
                      htmlFor="star3half"
                      title="Meh - 3.5 stars"
                    />
                    <input
                      type="radio"
                      id="star3"
                      name="rating"
                      defaultValue={3}
                    />
                    <label
                      className={classes.full}
                      htmlFor="star3"
                      title="Meh - 3 stars"
                    />
                    <input
                      type="radio"
                      id="star2half"
                      name="rating"
                      defaultValue="2 and a half"
                    />
                    <label
                      className={classes.half}
                      htmlFor="star2half"
                      title="Kinda bad - 2.5 stars"
                    />
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      defaultValue={2}
                    />
                    <label
                      className={classes.half}
                      htmlFor="star2"
                      title="Kinda bad - 2 stars"
                    />
                    <input
                      type="radio"
                      id="star1half"
                      name="rating"
                      defaultValue="1 and a half"
                    />
                    <label
                      className={classes.half}
                      htmlFor="star1half"
                      title="Meh - 1.5 stars"
                    />
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      defaultValue={1}
                    />
                    <label
                      className={classes.full}
                      htmlFor="star1"
                      title="Sucks big time - 1 star"
                    />
                    <input
                      type="radio"
                      id="starhalf"
                      name="rating"
                      defaultValue="half"
                    />
                    <label
                      className={classes.half}
                      htmlFor="starhalf"
                      title="Sucks big time - 0.5 stars"
                    />
                  </fieldset>
                  <span className={classes.likes}>
                    {location.state.imDbRatingCount} likes
                  </span>
                </div>{" "}
                {/* end details */}
              </div>{" "}
              {/* end hero */}
              {/* end description */}
            </div>{" "}
            {/* end container */}
          </div>{" "}
          {/* end movie-card */}
        </>
      </div>
    </div>
  );
}

export default AboutMovie;
