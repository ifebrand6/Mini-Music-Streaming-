import React from "react";

function NavBar() {
  return <div>
   <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Mini Music Streaming App</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="../navbar/">Share Your Music</a></li>
          <li><a href="../navbar-fixed-top/">Listen To Music</a></li>
          <li><a href="../navbar-fixed-top/">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>;
}

export default NavBar;
