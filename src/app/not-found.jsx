import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>so sorry cant find the page</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
