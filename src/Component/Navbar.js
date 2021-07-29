import React from 'react';
import {Link} from "react-router-dom";
export default class Navbar extends React.Component {
	render() {
		return (
			<div>
				{/* Start Menu */}
			      <div className="menu">
			        <nav className="navbar navbar-expand-lg fixed-top">
			          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			            <span className="navbar-toggler-icon">toggler</span>
			          </button>
			          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			            <ul className="nav navbar-nav">
			              <li className="nav-item active">
			                <Link to="/" className="nav-link">Trang Chủ</Link>
			              </li>
			              <li className="nav-item">
			                <Link to="/Lo-trinh" className="nav-link">Lộ Trình Học</Link>
			              </li>
			              <li className="nav-item">
			                <Link to="/Course" className="nav-link">Khóa Học</Link>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="./Course.html">Kích Hoạt Hóa Học</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="./Course.html">Đăng Nhập</a>
			              </li>
			            </ul>
			          </div>
			        </nav>
			      </div>
			      {/* End Menu */}
			</div>
		)
	}
}