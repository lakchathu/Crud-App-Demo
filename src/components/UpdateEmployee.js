import React, { Component } from 'react'
import Axios from 'axios'

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                employee_ID:this.props.match.params.id,
                first_Name:'',
                last_Name:'',
                email:''
            
        }
   }
   changefirstNameHandler=event=>{
       this.setState({
           first_Name:event.target.value
        })
   }
   changelastNameHandler=event=>{
       this.setState({
           last_Name:event.target.value
       })
   }
   changeemailHandler=event=>{
       this.setState({
           email:event.target.value
       })
   }

   cancelHandler=()=>{
       this.props.history.push('/employee')
   }
   changeUpdate=(event)=>{ 
       event.preventDefault()
       Axios.put('http://localhost:8080/employee/update/',this.state)
       .then(response=>{
           console.log(response)
           alert(response.data)
           this.props.history.push('/employee')
       })
       .catch(error=>{
           console.log(error)
       })
   }
   componentDidMount(){
       Axios.get(`http://localhost:8080/employee/find/${this.props.match.params.id}`)
       .then(response=>{
            this.setState({
                first_Name:response.data.first_Name,
                last_Name:response.data.last_Name,
                email:response.data.email
            })
       })
       .catch(error=>{
           console.log(error)
       })
   }

    render() {
        const style={
            marginLeft:"10px"
        }
        return (
            <div className="container">
            <h3>Update Employee</h3>
            <form> 
                <div className="form-group">
                    <label htmlFor="exampleInputFirstName">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" value={this.state.first_Name}
                    onChange={this.changefirstNameHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputLastName">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" value={this.state.last_Name}
                    onChange={this.changelastNameHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.changeemailHandler}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="button" className="btn btn-success"onClick={this.changeUpdate}>Update</button>
                <button type="button" className="btn btn-danger" style={style} onClick={this.cancelHandler}>Cancel</button> 
            </form>
        </div>
        )
    }
}

export default UpdateEmployee
