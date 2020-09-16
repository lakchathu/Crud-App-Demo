import React, { Component } from 'react'
import Axios from 'axios'

 class AddEmployee extends Component {
    constructor(props) {
         super(props)
     
         this.state = {
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
    changeSubmit=(event)=>{
        event.preventDefault()
        Axios.post('http://localhost:8080/employee/save',this.state)
        .then(response=>{
            console.log(response)
            alert(response.data)
            this.props.history.push('/employee')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const style={
            marginLeft:"10px"
        }
        const styles={
            marginTop: "25px"
        }
        return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3" style={styles}>
                <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
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
                        <button type="button" className="btn btn-success"onClick={this.changeSubmit}>Submit</button>
                        <button type="button" className="btn btn-danger" style={style} onClick={this.cancelHandler}>Cancel</button> 
                    </form>
                    </div>
                </div>
            </div>
        </div>
            
            
        )
    }
}

export default AddEmployee
