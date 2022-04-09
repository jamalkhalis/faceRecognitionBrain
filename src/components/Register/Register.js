import React from 'react';

const Register = ({onRouteChange}) => {
	return (
		<div>
			<article
				style={{boxShadow: '0px 0px 4px 2px rgba( 250, 250, 250, 0.2 )'}} 
				className="br2 ba b--white mv4 w-100 w-50-m w-25-l mw5 center"
			>
				<main className="pa4  shadow-5">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent white w-100" type="text" name="name"  id="name" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent white w-100" type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent white w-100" type="password" name="password"  id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input
				      	onClick={() => onRouteChange("home")} 
				      	className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange("signin")} className="f6 link dim db white pointer">Sign in</p>
				    </div>
				  </form>
				</main>
			</article>
		</div>
	)
}

export default Register;