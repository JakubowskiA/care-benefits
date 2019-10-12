import React, {Component, Fragment} from 'react';
import PrescriptionForm from './PrescriptionForm';

class PrescriptionPage extends Component{

    // Controls form inputs
    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    // Sends information to backend to add new entry to database
    // submitEntry=(event, entry)=>{
    //     event.preventDefault()
    //     this.setState({submitted: true})
    //     console.log('entry',entry)
    //     fetch('http://localhost:3000/entries',{
    //       method: 'POST',
    //       headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       },body:JSON.stringify({
    //         prescription: {
    //             // pre_level: this.state.preLevel,
    //             // user_id: this.props.userId
    //         }
    //       })
    //     })
    //     .then(res=>res.json())
    //     .then(data => {
    //         console.log('Response Data', data);
    //         // this.setState({ user: data.user });
    //         // this.props.history.push('/welcome');
    //     })
    //   }

    render(){
        
    return(
        <Fragment>
        <h2>Prescriptions</h2>
        <br/>
        <div className = "display-medication">
            <h4>Aspirin</h4>
            <p><strong>Dose:</strong> 81mg</p>
            <p><strong>When to take:</strong> Take one pill each morning.</p>
            <p><strong>Special Instructions:</strong> Take with plenty of water.</p>
        </div>
        <div className = "display-medication">
            <h4>Warfarin</h4>
            <p><strong>Dose:</strong> 2mg</p>
            <p><strong>When to take:</strong> Take one pill each morning.</p>
            <p><strong>Special Instructions:</strong> Avoid grapefruit and cruciferous vegetables like broccoli and cauliflower.</p>
        </div>
        <div className = "display-medication">
            <h4>Zocor</h4>
            <p><strong>Dose:</strong> 40mg</p>
            <p><strong>When to take:</strong> Take one pill each evening.</p>
            <p><strong>Special Instructions:</strong> Do NOT take with food.</p>
        </div>
        <br/>
        <PrescriptionForm />
        <br/>
        <br/>
        </Fragment>
    )}
}

export default PrescriptionPage