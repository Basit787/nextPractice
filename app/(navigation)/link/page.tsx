import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>
        Though we perform the <i>Link</i> based navigation using{" "}
        <u>
          <i>
            <strong>"next/link"</strong>
          </i>
        </u>{" "}
        <br /> Tap below links to navigate diffrent pages
      </h1>
      1) <Link href="/about">About</Link>
      <br />
      2) <Link href="/about/profile">Profile</Link>
      <br />
      3) <Link href="/title">Title</Link>
      <br />
      4) <Link href="/dynamic">Dynamic</Link>
      <br />
      5) <Link href="/activeLinks">Active Links</Link>
      <br />
      s) <Link href="/login">Auth</Link>
    </div>
  );
};

export default page;
