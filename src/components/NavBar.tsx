import * as React from "react";
import {Link}  from "react-router-dom";

export const NavBar = () =>{ 
        return(
				<div className="col-sm-2">
					<div className="row">
								<div className="col-sm-12">
									<h5>Quick Actions</h5>
								</div>
				    </div>
					
					<div className="row">
						<div className="col-sm-12">
								<form method="post" action="">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Google Search"/>
									</div>
									<button type="submit" disabled={true} className="btn btn-primary">go</button>
								</form>
						</div>
				   </div>
				   				      		   		   
				   <div className="row marginTopmain">
							<div className="col-sm-12">
									<ul className="navbar-nav">
										<li className="nav-item">
											<Link className="nav-link" to={"/faq"}>Frequently asked questions</Link>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="https://github.com/" target="_blank">GitHub Profile</a>
										</li>
								   </ul>
						  </div>
		          </div>
		        </div>
		);
}
