import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {

	function openForm() {
		document.getElementById("myForm").style.display = "block";
	  }
	  
	  function closeForm() {
		document.getElementById("myForm").style.display = "none";
	  }
    return (
        <div className="footer">
	 <div className="container wrap">
		<div className="logo2">
			 <Link to="/"><img src="images/logo2.png" alt=""/></Link>
		</div>
		<div className="ftr-menu">
			 <ul>
				 <li><Link to="/">HOME</Link></li>
				 <li><Link to="/shop">SHOP</Link></li>
				 <li><Link to="/signin">LOG IN</Link></li>
				 <li><Link to="*">EXTRA</Link></li>
				 <li><div class="chat-popup" id="myForm">
						<form action="/action_page.php" class="form-container">
							<h1>Chat</h1>

							<label for="msg"><b>Message</b></label>
							<textarea placeholder="Type message.." name="msg" required></textarea>

							<button type="submit" class="btn">Send</button>
							<button type="button" class="btn cancel" onClick={closeForm}>Close</button>
						</form>
						</div></li>
			 </ul>
		</div>
		<div className="clearfix"></div>
	 </div>
</div>
    )
}
