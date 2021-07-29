import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
const getDataLotrinh = () => axios.get('/Lotrinh').then((res) => res.data);
export default class Dieuhuonglotrinh extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DataLotrinh:null,
			stt:['Lộ Trình 1','Lộ Trình 2'],
		}
	}
	componentWillMount() {
		if (this.state.DataLotrinh == null) 
		{
			getDataLotrinh().then((value) => {
				this.setState({
					DataLotrinh:value,
				})
			})
		}
	}
	
	showLotrinh = () => {
		if (this.state.stt != null) 
		{
			return this.state.stt.map((value,key) => {
					return (
	              <div className="col-sm-4 mb-4" key = {key}>
	                <Link to={'/Lo-trinh.' + (key + 1)}>
	                  <div className="card shadow">
	                    <img className="card-img-top" src="./Images/Content1.jpg" alt="" />
	                    <div className="card-body">
	                      <h4 className="card-title">{value}</h4>
	                      <p className="card-text">Nguyễn Đức Việt</p>
	                      <p className="price text-right">
	                        <span className="price">800.000</span>
	                        <span className="pricesale">199.000</span>
	                      </p>
	                    </div>
	                  </div>
	                  </Link>
	              </div>
					)
			})
		}
			
		} 
		
	render() {
		return (
			<div>
					
	
					<div className="Search">
	          <div className="container">
	            <form>
	              <input type="text" name="" className="form-control inputsearch" />
	              <button className="btn btn-info">Tìm khiếm</button>
	            </form>
	          </div>
	        </div> 
	        <div className="Content pt-5 pb-3">
	          <div className="container">
	            <div className="row">
						{this.showLotrinh()}			
						</div>
	          </div>
	        </div>			


			</div>
		)
	}
}