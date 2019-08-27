import React , {Component} from 'react';
class InputData extends Component{
    state ={
        city:'',
        country:''
    }
 handelinput = (e)=>{
     this.setState({
         [e.target.name] : e.target.value
     })
 }
    handelshumit = (e)=>{
        e.preventDefault();
        this.props.weatherForm(this.state);
        if(document.getElementsByTagName('input')[0].value && document.getElementsByTagName('input')[1].value){
           document.getElementById('info').style.display = 'block';
        } else{
            document.getElementById('info').style.display = 'none';
        }
    }
    handelButton = ()=>{
        if(document.getElementsByTagName('input')[0].value && document.getElementsByTagName('input')[1].value){
            document.getElementById('info').style.display = 'block';
         } else{
             document.getElementById('info').style.display = 'none';
         }
    }
    render(){
        return(
            <form onSubmit={this.handelshumit}>
                <input type="text" name="city" placeholder="City..." onChange={this.handelinput} /> 
                <input type="text" name="country" placeholder="Country..." onChange={this.handelinput}/> 
                <button onClick={this.handelButton}>Get Weather</button>
            </form>
        )
    }
}
export default InputData;