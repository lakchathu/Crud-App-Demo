import React, { Component } from 'react'
import Axios from 'axios'

export class ListEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[],
            error:'' 
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:8080/employee/findAll')
        .then(response=>{
           this.setState({
               employees:response.data
           })
        })
        .catch(error=>{
            this.setState({
                error:"this is error"
            })
        })
    }
    reDirectAddEmployee=()=>{
        this.props.history.push('/add-employee')
    }
    editForm=(id)=>{
        this.props.history.push(`/update-employee/${id}`)
    }
    deleteEmployee=(id)=>{
        Axios.delete('http://localhost:8080/employee/delete/'+id)
        .then(response=>{
            alert(response.data)
            this.setState({
                employees:this.state.employees.filter(employee=>employee.employee_ID!==id)
            })
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    render() {
        // const {employee_List}=this.state
        return (
            <div className="container">
                <h1 className="text-center">Employee List</h1>
                <button type="button" class="btn btn-info" style={{marginBottom:"10px"}} onClick={this.reDirectAddEmployee}>Add Employee</button>
                <div className="row">
                   <table className="table table-striped table-dark">
                       <thead>
                          <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Action</th>
                          </tr> 
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(employee=>(
                                   <tr key={employee.employee_ID}>
                                       <td>{employee.first_Name}</td>
                                       <td>{employee.last_Name}</td>
                                       <td>{employee.email}</td>
                                       <td>
                                           <button type="button" className="btn btn-warning m-1" onClick={()=>this.editForm(employee.employee_ID)}>Update</button>
                                           <button type="button" className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.employee_ID)}>Delete</button>
                                       </td>
                                      
                                   </tr>
                               ))
                           }
                       </tbody>
                   </table> 

                </div>

            </div>
        )
    }
}

export default ListEmployee
