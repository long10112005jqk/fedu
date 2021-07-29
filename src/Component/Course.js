import React from 'react'
import {Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
const getAllData = () => axios.get('/All').then((res) => res.data);
const getDataDesign = () => axios.get('/getDataDesign').then((res) => res.data);
const getDataFontend = () => axios.get('/getDataFontend').then((res) => res.data);
const getDataBackEndWordPress = () => axios.get('/BackEndWordPress').then((res) => res.data);
const getDataBackEndPHP = () => axios.get('/BackEndPHP').then((res) => res.data);
const getDataBackEndNodeJsReactJs = () => axios.get('/BackEndNodeJsReactJs').then((res) => res.data);
export default class Course extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			AllData:null,
			DataDesign:null,
			DataFontEnd:null,
			DataBackEndWordPress:null,
			DataBackEndPHP:null,
			DataBackEndNodeJsReactJs:null,
		}
	}
	componentWillMount() {
		if (this.state.AllData === null) 
		{
			getAllData().then((dulieu) => {
				this.setState({
					AllData:dulieu,
				})
			})
		}
		if (this.state.DataDesign === null) 
		{
			getDataDesign().then((dulieu) => {
				this.setState({
					DataDesign:dulieu,
				})
			})
		}
		if (this.state.DataFontEnd === null) 
		{
			getDataFontend().then((dulieu) => {
				this.setState({
					DataFontEnd:dulieu,
				})
			})
		}
		if (this.state.DataBackEndWordPress === null) 
		{
			getDataBackEndWordPress().then((dulieu) => {
				this.setState({
					DataBackEndWordPress:dulieu,
				})
			})
		}
		if (this.state.DataBackEndPHP === null) 
		{
			getDataBackEndPHP().then((dulieu) => {
				this.setState({
					DataBackEndPHP:dulieu,
				})
			})
		}
		if (this.state.DataBackEndNodeJsReactJs === null) 
		{
			getDataBackEndNodeJsReactJs().then((dulieu) => {
				this.setState({
					DataBackEndNodeJsReactJs:dulieu,
				})
			})
		}
	}
	Course = () => {
		if (this.state.AllData != null) 
		{
			return this.state.AllData.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	}
	Course_All = () => {
		if (this.state.AllData != null) 
		{
			return this.state.AllData.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	}
	Course_Design = () => {
		if (this.state.DataDesign != null) 
		{
			return this.state.DataDesign.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	}
	Course_FontEnd = () => {
		if (this.state.DataFontEnd != null) 
		{
			return this.state.DataFontEnd.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	}
	Course_BackEnd_WordPress = () => {
		if (this.state.DataBackEndWordPress != null) 
		{
			return this.state.DataBackEndWordPress.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	} 
	Course_BackEnd_PHP = () => {
		if (this.state.DataBackEndPHP != null) 
		{
			return this.state.DataBackEndPHP.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	} 
	Course_BackEnd_NodeJsReactJs = () => {
		if (this.state.DataBackEndNodeJsReactJs != null) 
		{
			return this.state.DataBackEndNodeJsReactJs.map((value,key) => 
				 (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
	                <div className="card">
	                  <img className="card-img-top" src="../Images/Content1.jpg" alt="" />
	                  <div className="card-body">
	                    <h4 className="card-title">{value.td}</h4>
	                    <p className="card-text">{value.author}</p>
	                    <p className="price text-right">
	                      <span className="price">{value.priceold}</span>
	                      <span className="pricesale">{value.price}</span>
	                    </p>
	                  </div>
	                </div>
	              </div>
				)
			)
		}
	} 
	render() {
		return (
			<div>
				 <div className="bodycourse">
		        <div className="container">
		          <div className="row">
		            <div className="col-sm-4">
		              <div className="d-block shadow">
		                <ul className="list-unstyled">
		                  <li><Link to="/Course/All">Tất Cả Khóa Học</Link></li>
		                  <li><Link to="/Course/Design">Thiết Kế Đồ Họa</Link></li>
		                  <li><Link to="/Course/FontEnd">Fontend</Link></li>
		                  <li><Link to="/Course/BackEnd_WordPress">BackEnd Dùng Wordpess</Link></li>
		                  <li><Link to="/Course/BackEnd_PHP">BackEnd dùng PHP</Link></li>
		                  <li><Link to="/Course/BackEnd_NodeJsReactJs">BackEnd dùng Node js + React js</Link></li>
		                </ul>
		              </div>
		            </div>
		            <div className="col-sm-8">
		              <div className="input-group mb-3">
		                <input type="text" className="form-control" placeholder="Search" />
		                <div className="input-group-append">
		                  <button className="btn btn-success" type="submit">Go</button>
		                </div>
		              </div>
		              <div className="dropdown">
		                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  Lọc Theo Tên Tác Giả
		                </button>
		                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                  <a className="dropdown-item" href="lotrinh.html">Action</a>
		                  <a className="dropdown-item" href="lotrinh.html">Another action</a>
		                  <a className="dropdown-item" href="lotrinh.html">Something else here</a>
		                </div>
		              </div>
		              <div className="Content pt-5 pb-3">
		                <div className="row">
		                <Switch>
		                <Route exact path="/Course">
		                  {this.Course()}
		                  </Route>
		                  <Route  path="/Course/All">
		                  	{this.Course_All()}
		                  </Route>
		                  <Route path="/Course/Design">
		                  	{this.Course_Design()}
		                  </Route>
		                  <Route path="/Course/FontEnd">
		                  	{this.Course_FontEnd()}
		                  </Route>
		                  <Route path="/Course/BackEnd_WordPress">
		                  	{this.Course_BackEnd_WordPress()}
		                  </Route>
		                  <Route path="/Course/BackEnd_PHP">
		                  	{this.Course_BackEnd_PHP()}
		                  </Route>
		                  <Route path="/Course/BackEnd_NodeJsReactJs">
		                  	{this.Course_BackEnd_NodeJsReactJs()}
		                  </Route>
		                 </Switch>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
			</div>
		)
	}
}