import React, {Component} from 'react';

class Compose extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
            imageUrl: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <div className="base">
            <h1>Create a New Post</h1>
            <form className="new-post">
                <input name="title" value={this.state.title} type="text" onChange={this.changeHandler}/>
                <input name="imageUrl" value={this.state.imageUrl} type="text" onChange={this.changeHandler}/>
                <textarea name="body" value={this.state.body} type="text" onChange={this.changeHandler}/>
            </form>
        </div>
    }
}

export default Compose;