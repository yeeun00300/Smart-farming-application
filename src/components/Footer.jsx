import React from 'react'
import '../index.css'
const Footer=()=>{

    return(
<>
<div className="footer">
<footer className=" justify-content-center  border-bottom " >
<div className="text-center p-4 " >
    © 2022 Copyright:
    <span className="text-reset fw-bold" > Sapna Bisht  </span>
    <span>
        {/* <a href="https://instagram.com/vk_clicks._?igshid=YmMyMTA2M2Y=" className="mx-2"><img className="zoom" src={require("../photos/instagram.png")}  alt="instagram" /></a> */}
    </span>
    <span>
        <a href = "mailto: bishtsapna322@gmail.com"><img src={require("../photos/gmail.png")} className="gmail zoom" alt="gmail"/></a>
    </span>
  </div>
</footer>
</div>
</>

    );
}
export default Footer;