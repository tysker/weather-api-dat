import React from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";

export default function Footer(){
    return(
      <footer>
        <div className="row">
          <div className="col span-1-of-2">
          <ul className="footer-nav">
            <li><a href="https://tysker.github.io/Datamatiker3Semester.io/">About us</a></li>
            <li><a href="https://tysker.github.io/Datamatiker3Semester.io/">Blog</a></li>
            <li><a href="https://tysker.github.io/Datamatiker3Semester.io/">Press</a></li>
            <li><a href="https://www.apple.com/dk/ios/app-store/">iOS App</a></li>
            <li><a href="https://play.google.com/store">Android App</a></li>
          </ul>
        </div>
  
        <div className="col span-1-of-2">
          <ul className="social-links">
            <li><a href="https://www.facebook.com/"><ion-icon name="logo-facebook" className="logo-facebook"></ion-icon></a></li>
            <li><a href="https://twitter.com/"><ion-icon name="logo-twitter" className="logo-twitter"></ion-icon></a></li>
            <li><a href="https://aboutme.google.com/"><ion-icon name="logo-googleplus" className="logo-googleplus"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/"><ion-icon name="logo-instagram" className="logo-instagram"></ion-icon></a></li>
          </ul>
        </div>
      </div>
        <div className="row">
          <p>Copyright &copy; 2019 by Code Geeks, Inc. All rights reserved.</p>
        </div>
      </footer>
  
    )
  }

  