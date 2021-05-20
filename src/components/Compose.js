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

    addPost = e => {
        e.preventDefault();
        alert('Add a post!')
    }

    render(){
        return <div className="base">
            <div className="new-post">
                <h1>Create a New Post</h1>
                <form onSubmit={this.addPost}>
                    <input name="title" value={this.state.title} type="text" placeholder="Title"onChange={this.changeHandler}/>
                    <input name="imageUrl" value={this.state.imageUrl} type="text" placeholder="Image"onChange={this.changeHandler}/>
                    <textarea name="body" value={this.state.body} type="text" placeholder="Type your post here..."onChange={this.changeHandler}/>
                    <input type="submit" value="Add Post"/>
                </form>
            </div>
        </div>
    }
}

export default Compose;