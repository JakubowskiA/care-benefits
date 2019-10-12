import React, {Component, Fragment} from 'react';
import PrescriptionForm from './PrescriptionForm';


class PrescriptionPage extends Component{
    state={
        rxName:"",
        dose:"",
        time:"",
        specialInstructions:""

    }

    // Controls form inputs
    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    // Sends information to backend to add new entry to database
    submitEntry=(event, entry)=>{
        event.preventDefault()
        this.setState({submitted: true})
        console.log('entry',entry)
        fetch('http://localhost:3000/entries',{
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },body:JSON.stringify({
            prescription: {
                // pre_level: this.state.preLevel,
                // user_id: this.props.userId
            }
          })
        })
        .then(res=>res.json())
        .then(data => {
            console.log('Response Data', data);
            // this.setState({ user: data.user });
            // this.props.history.push('/welcome');
        })
      }

    render(){
        
    return(
        <Fragment>
        <h3>My Prescriptions</h3>
        <br/>
        <div>
            <h4>Dabigatron</h4>
            <p>Dose: 150mg</p>
            <p>When to take: Take one pill each morning.</p>
            <p>Special Instructions: Take with plenty of water.</p>
        </div>
        <div>
            <h4></h4>
            <p>Dose: </p>
            <p>When to take:</p>
            <p>Special Instructions:</p>
        </div>
        <br/>
        <h3>Add a new prescription</h3>
        <br/>
        <PrescriptionForm />
        </Fragment>
    )}
}

export default PrescriptionPage