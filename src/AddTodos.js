import React , {Component} from 'react'
class AddTodos extends Component{
    state ={
        Content:''
    }

    handelsubmit = (e)=>{
        e.preventDefault();
        this.props.addTodoss(this.state);
        this.setState({
            Content:''
        });
    }
    handelinput = (e) =>{
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    render(){
        return(
            <div className="Add">
                <form onSubmit={this.handelsubmit}>
                    <input type="text" name="Content" placeholder="Todo Content" onChange={this.handelinput} />
                </form>
            </div>
        )   
    }
}
export default AddTodos;