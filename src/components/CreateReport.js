import React, {ReactDOM} from 'react';
import jwt_decode from "jwt-decode";
import '../App.css';


// var user="";

// if(localStorage.getItem("jwtToken") != null){
// var b = localStorage.getItem("jwtToken");
// //console.log(b);
// const decoded = jwt_decode(b);
// //console.log(decoded);
// user = decoded.name;
// // console.log(user);
// }else{
//   user="No Profile";  
// }


class CreateReport extends React.Component {
    constructor(props) {
      super(props);

      this.state = {first: '', second:'', results:[]};
  
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChangeSecond = this.handleChangeSecond.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirst(event) {
      this.setState({first: event.target.value});    
      
    }
    handleChangeSecond(event) {
        this.setState({second: event.target.value});    
        
    }

    // componentDidMount(){
    //     //alert(user);
    //   if(localStorage.getItem("jwtToken") == null){
    //     window.location.replace("/login");
    //   }
    // }

    async handleSubmit(event) {
     
      event.preventDefault();
     
      const result = await fetch('http://localhost:5000/reports/'+this.state.first+'/'+this.state.second
      
      );
        const b = await result.json();
        console.log(b); 
        
        for (let i = 0; i < 10; i++) {
          this.setState({
            results:b 
          }); 
        }
        this.state = { b };
    }
  
    render() {
      return (       
        <div className="custom-form">
          <form onSubmit={this.handleSubmit}>
            <label for="first" >First Date: </label>
            <input  id="first" type="text" value={this.state.first} onChange={this.handleChangeFirst} required />

            <label for="second" >Second Date: </label>
            <input  id="second" type="text" value={this.state.second} onChange={this.handleChangeSecond} required />
            
            <div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form> 
          <div id="results">
            
              {this.state.results.map((result, index) =>
                <p key={index}>You did {result.title} for {result.length} minutes on {result.date.toString().slice(0,10)}.</p>
              )}
          </div>
        </div>
      );
    }
  }

  export default CreateReport;
