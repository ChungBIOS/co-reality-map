import React, { Fragment } from "react";
import { useFirebase } from "react-redux-firebase";

export default function LockedSite() {
  const firebase = useFirebase();
  firebase.auth().signOut();

  return (
    <Fragment>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
            Roots to Rapture: Party in the Tree of Life
          </span>
        </nav>
      </header>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h2>Thanks For Attending the Tree of Life!</h2>
            <p>
              <a href="https://co-reality.co/">(Homepage)</a>
            </p>
            <p>Dear tree-climbing reveller,</p>
            <p>
              Thank you for coming to our Tree of Life party on Saturday 16th
              May. We hope you enjoyed your journey through the Rabbit Hole and
              your ascent from Roots to Rapture. Most of all we thank you for
              bringing your beautiful self - your presence helped co-create this
              experience for everyone.
            </p>
            <p>We have a favour to ask:</p>
            <p>We'd love your feedback about your experience:</p>
            <p>
              <a
                href="https://forms.gle/EXcPPEbYgsNy75CE7"
                target="_blank"
                rel="noopener noreferrer"
              >
                FEEDBACK FORM
              </a>
            </p>
            <p>
              We'll use any feedback you leave to help make future parties even
              better and to rationalise feasting on forest fruits.
            </p>
            <p>
              If you haven't already, please{" "}
              <a
                href="https://www.facebook.com/corealitycollective"
                target="_blank"
                rel="noopener noreferrer"
              >
                Like Us On Facebook
              </a>{" "}
              and join our community we can inform you about future events.
            </p>
            <p>
              As you know, all proceeds for this party go to artists-in-need or
              charities. If you'd like to donate to them, we welcome this too{" "}
              <a
                href="https://www.eventbrite.co.uk/e/roots-to-rapture-artist-and-charity-donations-tickets-105823599234"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>
              .
            </p>
            <p>We look forward to seeing more of you.</p>
            <p>With love,</p>
            <p>
              The Co-Reality Collective Team{" "}
              <span role="img" aria-label="Heart">
                ❤️
              </span>{" "}
              and woodland flora and fauna.
            </p>
            <p>PS: The forest misses you.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
