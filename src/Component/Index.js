import React from 'react';
import axios from 'axios';
// import * as api from '../api/index.js';
import {Link} from "react-router-dom";
const cors = require('cors');

const URL = 'https://projectfedu.herokuapp.com';
const getDataDesign = () => axios.get('https://projectfedu.herokuapp.com/getDataDesign').then((res) => res.data);
const getDataFontEnd = () => axios.get('https://projectfedu.herokuapp.com/getDataFontend').then((res) => res.data);
const getDataBackEnd = () => axios.get('https://projectfedu.herokuapp.com/AllBackEnd').then((res) => res.data);
class Index extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	      DataDesign:null,
	      DataFontEnd:null,
	      DataBackEnd:null,
	    }
	  }
	componentWillMount() {
		if (this.state.DataDesign === null) 
	    {
	      getDataDesign().then((dulieu) => {
	        this.setState({
	          DataDesign:dulieu,
	        });
	      })
	    }
	    if (this.state.DataFontEnd === null) 
	    {
	      getDataFontEnd().then((dulieu) => {
	        this.setState({
	          DataFontEnd:dulieu,
	        });
	      })
	    }
	    if (this.state.DataBackEnd === null) 
	    {
	      getDataBackEnd().then((dulieu) => {
	        this.setState({
	          DataBackEnd:dulieu,
	        });
	      })
	    }
	}
	ShowDataDesign = () => {
		if (this.state.DataDesign != null ) 
		{
			return this.state.DataDesign.map((value,key) => {
				if (key <= 5 ) 
				{
					return (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
		                <div className="card">
		                  <img className="card-img-top" src="./Images/Content1.jpg" alt="" />
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
				);
				}
				return null;
			})
		}
	} 
	ShowDataFontEnd = () => {
		if (this.state.DataFontEnd != null ) 
		{
			return this.state.DataFontEnd.map((value,key) => {
				if (key <= 5 ) 
				{
					return (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
		                <div className="card">
		                  <img className="card-img-top" src="./Images/Content1.jpg" alt="" />
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
				);
				}
				return null;
			})
		}
	}
	ShowDataBackEnd = () => {
		if (this.state.DataBackEnd != null ) 
		{
			return this.state.DataBackEnd.map((value,key) => {
				if (key <= 5 ) 
				{
					return (
					<div className="col-sm-4 mb-4 mb-4 shadow" key={key}>
		                <div className="card">
		                  <img className="card-img-top" src="./Images/Content1.jpg" alt="" />
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
				);
				}
				return null;
			})
		}
	} 
	render() {
		return (
			<section >
				{/* Start Header */}
		        <div className="Header" style={{backgroundImage: 'url("Images/Header.jpg")',height:'680px'}}>
		        </div>
		        {/* End Header */}
		        {/* Start Contents */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <h3 className="text-center mb-5">C??c kh??a h???c thi???t k??? ????? h???a</h3>
		            <div className="row">
						{
							this.ShowDataDesign()
						}		              
		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem T???t C???</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start Contents */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <h3 className="text-center mb-5">C??c kh??a h???c Frontend</h3>
		            <div className="row">

		              {this.ShowDataFontEnd()}

		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem T???t C???</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start Contents */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <h3 className="text-center mb-5">C??c kh??a h???c Backend</h3>
		            <div className="row">
		            	{this.ShowDataBackEnd()}
		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem T???t C???</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start About */}
		        <section className="About pt-4 pb-4">
		          <div className="container">
		            <h3 className="text-center mb-3">T???i sao ch???n ch??ng t??i?</h3>
		            <div className="row">
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">H???C PH?? R??? B???NG 1/10</h4>
		                    <p className="card-text">T???i Fedu ????y, ch??? t??? 270,000??. B???n c?? th??? h???c ???????c c??c kh??a h???c ch???t l?????ng v??? tin h???c, l???p tr??nh v?? m??? thu???t ??a ph????ng ti???n ???????c gi???ng d???y b???i gi???ng vi??n ch???t l?????ng qu???c t???.</p>
		                  </div>
		                </div>
		              </div>
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">H???C M???I L??C - M???I N??I - KH??NG GI???I H???N</h4>
		                    <p className="card-text">B???n s??? ???????c h???c ??i h???c l???i nhi???u l???n n???u ch??a hi???u. L???i th??? c???a c??c video b???n c?? th??? th???c h??nh v?? l??m theo c??c b??i gi???ng ???? ???????c quay s???n</p>
		                  </div>
		                </div>
		              </div>
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">KI???N TH???C TH???C T???</h4>
		                    <p className="card-text">C??c b??i gi???ng trong kh??a h???c l?? nh???ng ki???n th???c th???c t??? ???????c l??m vi???c trong m??i tr?????ng qu???c t???, gi??p h???c vi??n c?? th??? l??m ???????c vi???c sau kh??a h???c</p>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </section>
		        {/* End About */}
		        {/* Start Comment */}
		        <section className="Comment pb-3">
		          <div className="container">
		            <h3 className="text-center mb-3">C???m nh???n c???a h???c vi??n</h3>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi h???c xong kh??a thi???t k??? UI/ UX c???a th???y&gt; Nguy???n ?????c Vi???t&gt; m??nh ???? ??p d???ng ???????c r???t d??? d??ng, c??ch truy???n ?????t c???a th???y r???t d??? hi???u, gi???ng n??i d??? nghe v?? vui t??nh ^^ b???n n??o c?? ?? ?????nh h???c v??? c??i n??y th?? n??n ????ng k?? kh??a h???c n??y nh??, c???c d??? hi???u lu??n. Mong th???y t???o ra nhi???u kh??a h???c b??? ??ch h??n n???a ???&gt; &lt;3</p>
		              </div>
		            </div>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi h???c xong kh??a thi???t k??? UI/ UX c???a th???y&gt; Nguy???n ?????c Vi???t&gt; m??nh ???? ??p d???ng ???????c r???t d??? d??ng, c??ch truy???n ?????t c???a th???y r???t d??? hi???u, gi???ng n??i d??? nghe v?? vui t??nh ^^ b???n n??o c?? ?? ?????nh h???c v??? c??i n??y th?? n??n ????ng k?? kh??a h???c n??y nh??, c???c d??? hi???u lu??n. Mong th???y t???o ra nhi???u kh??a h???c b??? ??ch h??n n???a ???&gt; &lt;3</p>
		              </div>
		            </div>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi h???c xong kh??a thi???t k??? UI/ UX c???a th???y&gt; Nguy???n ?????c Vi???t&gt; m??nh ???? ??p d???ng ???????c r???t d??? d??ng, c??ch truy???n ?????t c???a th???y r???t d??? hi???u, gi???ng n??i d??? nghe v?? vui t??nh ^^ b???n n??o c?? ?? ?????nh h???c v??? c??i n??y th?? n??n ????ng k?? kh??a h???c n??y nh??, c???c d??? hi???u lu??n. Mong th???y t???o ra nhi???u kh??a h???c b??? ??ch h??n n???a ???&gt; &lt;3</p>
		              </div>
		            </div>
		          </div>
		        </section>
		        {/* End Comment */}
			</section>
		)
	}
}
export default Index;