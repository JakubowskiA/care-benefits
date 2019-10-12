import React, {Component, Fragment} from 'react';
// import { withRouter } from 'react-router-dom';


class PrescriptionForm extends Component{
    state={
        rxName:"",
        dose:"",
        time:"",
        specialInstructions:"",
        addHide:"hide"

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

      toggleHide=()=>{
        if(this.state.addHide === "hide"){
            this.setState({addHide:""})
        }else{
            this.setState({addHide:"hide"})
        }
      }

    render(){
        
    return(
        <Fragment>
        <h2 onClick={this.toggleHide}>Add a new prescription?</h2>
        <br/>
        <div className={this.state.addHide}>
        <form onSubmit={(event)=>this.submitEntry(event, this.state)} className="prescription-form">
        <br/>
            <label>Medication Name: </label>
            <input type="text" onChange={this.handleChange} name="rxName"/>
            <br/><br/><br/>
            <label>Medication Dose: </label>
            <input type="text" name="dose" onChange={this.handleChange}/>
            <br/><br/><br/>
            <label>When will this medication be taken?</label>
            <br/><br/>
            <textarea name="time" onChange={this.handleChange}/>
            <br/><br/><br/>
            <label>Are there any special instructions for taking this medication? </label>
            <br/><br/>
            <textarea name="specialInstructions" onChange={this.handleChange}/>
            <br/><br/>
            <br/>
            <input type="Submit" className="normal-button" disabled={this.state.submitted === true}/>
            <br/><br/>
        </form>
        <br/><br/>
        </div>
        </Fragment>
    )}
}

export default PrescriptionForm