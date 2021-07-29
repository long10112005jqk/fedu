import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
const getDataLotrinh = () => axios.get('/Lotrinh').then((res) => res.data);
export default class lotrinh extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DataLotrinh:null,
			id:"lotrinh" + this.props.match.params.id,
		}
	}
	componentWillMount(state,props) {
		if (this.state.lotrinh1 == null) 
		{
			getDataLotrinh().then((dulieu) => {
				var id = this.state.id;
				
				if (dulieu[id] != null) 
				{
					this.setState({
						DataLotrinh:dulieu[id],
					})
				}
				
			})
		}
	}
	ShowData = () => {
		if (this.state.DataLotrinh != null) 
		{
			return this.state.DataLotrinh.map((value,key) => {
				return (
					<Link to ="/Lo-trinh" className="shadow" key={key}>
		              <div className="col-sm-12 ">
		                <img src="../Images/Header.jpg" alt=""/>
		                <div className="produce-content">
		                  <h4>{value.td}</h4>
		                </div>
		              </div>
		              </Link>
				)
			})
		}
	}
	render() {
		
		return (

			<div>
		        <div className="jumbotron">
		          <div className="container mt-5">
		            <h1 className="display-4 text-center">Lộ trình {this.props.match.params.id}</h1>
		            <hr className="my-4" />
		          </div>
		        </div>
		        <section className="produce mb-4">
		          <div className="container">
		            <div className="row">
		            {this.ShowData()} 
		            </div>
		          </div>
		        </section>
		    </div>
		)
	}
}