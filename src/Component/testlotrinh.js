import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export default class testlotrinh extends React.Component {
	render() {
		return (
			<div>
				{/* Start Search */}
		        <div className="Search">
		          <div className="container">
		            <form>
		              <input type="text" name className="form-control inputsearch" />
		              <button className="btn btn-info">Tìm khiếm</button>
		            </form>
		          </div>
		        </div> 
		        {/* End Search */}
		        {/* End form search */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-4 mb-4 mb-4">
		                <Link to="/lotrinh1">
		                  <div className="card shadow">
		                    <img className="card-img-top" src="./Images/Content1.jpg" alt="" />
		                    <div className="card-body">
		                      <h4 className="card-title">HỌC PHẦN 1 -KIẾN THỨC NỀN TẢNG THIẾT KẾ ĐỒ HỌA</h4>
		                      <p className="card-text">Nguyễn Đức Việt</p>
		                      <p className="price text-right">
		                        <span className="price">800.000</span>
		                        <span className="pricesale">199.000</span>
		                      </p>
		                    </div>
		                  </div>
		                  </Link>
		              </div>
		            </div>
		          </div>
		        </div>
			</div>
		)
	}
}