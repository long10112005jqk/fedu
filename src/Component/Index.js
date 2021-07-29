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
		            <h3 className="text-center mb-5">Các khóa học thiết kế đồ họa</h3>
		            <div className="row">
						{
							this.ShowDataDesign()
						}		              
		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem Tất Cả</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start Contents */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <h3 className="text-center mb-5">Các khóa học Frontend</h3>
		            <div className="row">

		              {this.ShowDataFontEnd()}

		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem Tất Cả</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start Contents */}
		        <div className="Content pt-5 pb-3">
		          <div className="container">
		            <h3 className="text-center mb-5">Các khóa học Backend</h3>
		            <div className="row">
		            	{this.ShowDataBackEnd()}
		            </div> {/* End row */}
		            <div className="text-center">
		              <Link to="/Course/All"><button className="btn btn-dark ShowFull">Xem Tất Cả</button></Link>
		            </div>
		          </div>
		        </div>
		        {/* End Content */}
		        {/* Start About */}
		        <section className="About pt-4 pb-4">
		          <div className="container">
		            <h3 className="text-center mb-3">Tại sao chọn chúng tôi?</h3>
		            <div className="row">
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">HỌC PHÍ RẺ BẰNG 1/10</h4>
		                    <p className="card-text">Tại Fedu đây, chỉ từ 270,000đ. Bạn có thể học được các khóa học chất lượng về tin học, lập trình và mỹ thuật đa phương tiện được giảng dạy bởi giảng viên chất lượng quốc tế.</p>
		                  </div>
		                </div>
		              </div>
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">HỌC MỌI LÚC - MỌI NƠI - KHÔNG GIỚI HẠN</h4>
		                    <p className="card-text">Bạn sẽ được học đi học lại nhiều lần nếu chưa hiểu. Lợi thế của các video bạn có thể thực hành và làm theo các bài giảng đã được quay sẵn</p>
		                  </div>
		                </div>
		              </div>
		              <div className="col-sm-4">
		                <div className="card text-center shadow">
		                  <img className="card-img-top" src="./Images/About1.png" alt="" />
		                  <div className="card-body">
		                    <h4 className="card-title">KIẾN THỨC THỰC TẾ</h4>
		                    <p className="card-text">Các bài giảng trong khóa học là những kiến thức thực tế được làm việc trong môi trường quốc tế, giúp học viên có thể làm được việc sau khóa học</p>
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
		            <h3 className="text-center mb-3">Cảm nhận của học viên</h3>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi học xong khóa thiết kế UI/ UX của thầy&gt; Nguyễn Đức Việt&gt; mình đã áp dụng được rất dễ dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ ích hơn nữa ạ&gt; &lt;3</p>
		              </div>
		            </div>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi học xong khóa thiết kế UI/ UX của thầy&gt; Nguyễn Đức Việt&gt; mình đã áp dụng được rất dễ dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ ích hơn nữa ạ&gt; &lt;3</p>
		              </div>
		            </div>
		            <div className="mt-3">
		              <div className="text-center">
		                <i className="fa fa-comments" aria-hidden="true" />
		                <p>Sau khi học xong khóa thiết kế UI/ UX của thầy&gt; Nguyễn Đức Việt&gt; mình đã áp dụng được rất dễ dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ ích hơn nữa ạ&gt; &lt;3</p>
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