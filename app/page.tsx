import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      This is the main page
      <br />
      <Link href="/link">Go to Link Page</Link>
    </div>
  );
};

export default Home;
