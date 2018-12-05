import React from 'react';
import PropTypes from 'prop-types';

class Editeur extends React.Component {
    constructor(props){
        super(props);
        this.getUpdatedTodo = this.getUpdatedTodo.bind(this);
        this.loadImage = this.loadImage.bind(this);
        this.state = { catImage: ''};
    }

    loadImage(){
        fetch("http://aws.random.cat/meow")
            .then(data => data.json())
            .then(catFile => { this.setState({ catImage: catFile.file }) })
            .catch(err => console.log(err.message));
    }

    getUpdatedTodo(){
        return {
            id: this.props.todo.id,
            text: this.refs.editText.value,
            completed: this.refs.editCheck.checked,
            doneAt: this.refs.editCheck.checked?(new Date()).toLocaleDateString() : ""
        };
    }

    componentWillMount(){
        this.loadImage();
    }

    render () {
        let { completed, text } = this.props.todo ;
        let { onModify } = this.props ;
        return (
            <div id="editeur_container">
                <div id="editeur_main">
                    <img src={this.state.catImage} alt="Meoooww!"/>
                    <hr/>
                    <input id="todo_item_check" type="checkbox" defaultChecked={completed} ref="editCheck"/>
                    <input id="editeur_text" type="text" defaultValue={text} ref="editText"/>
                    <button id="editeur_validate" onClick={() => onModify(this.getUpdatedTodo())}>Modifier</button>
                </div>
            </div>
        );
    }
}

export default Editeur;

Editeur.propTypes = {
    todo : PropTypes.object,
    onModify: PropTypes.func
}