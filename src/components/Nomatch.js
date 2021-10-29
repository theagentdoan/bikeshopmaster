import React from 'react';
import {Link} from "react-router-dom";

export default function Nomatch() {
    return (
        <div className="404-page">
  <div className="container">
    <div className="error-head">
      <h1>4<label>0</label>4</h1>
      <span>ERROR</span>
      <h2>Ooops....!This page is not found.</h2>
      <Link to="index.html">Go Back</Link>
    </div>
  </div>
</div>

    )
}
