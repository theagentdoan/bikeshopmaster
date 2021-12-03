import React, {useState} from 'react';


export default function Signin() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  // const [count, setCount] = useState(0);

  function inputInfo (event) {
   
    event.preventDefault();
    if (document.querySelector('.remember').checked){
      let info = JSON.parse(localStorage.getItem('info'));
  
      if (info == null) info = [{email: document.getElementById('email').value, pass: document.getElementById('pass').value}];
      else 
      // if ((email != '') && (pass != '')) 
      info.push({email: document.getElementById('email').value, pass: document.getElementById('pass').value});
      localStorage.setItem('info', JSON.stringify(info));
    }
    return;
    
    
  };

//   function click(){
// let btn = document.getElementById("btn");
// btn.innerHTML = parseInt(btn.innerHTML) + 1;
//   }

    return (
        <div className="sign-in-form" >
  <h2 className="sign-in">PLEASE LOG IN HERE</h2>
  <form className="form-horizontal" action="/action_page.php"  >
    <div className="form-group">
      <label className="control-label col-sm-8" htmlFor="email">Email:</label>
      <div className="col-sm-10">
        <input id="email" key="1" value={email}  type="email" className="form-control" placeholder="Enter email" name="email" required/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-8" htmlFor="pwd">Password:</label>
      <div className="col-sm-10">          
        <input id="pass" key="2" value={pass}  type="password" className="form-control" placeholder="Enter password" name="pwd" required/>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <div className="checkbox">
          <label><input type="checkbox" name="remember" className="remember"/> Remember me</label>
          <button onClick = {(event) => inputInfo(event)} type="submit" className="btn btn-default">Log in</button>

        </div>
      </div>
    </div>
    
  </form>
  {/* <button id="btn" onClick={() => setCount(count+1)} >{count}</button> */}
</div>

    )
}
