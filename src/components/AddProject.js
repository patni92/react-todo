import React, { Component } from 'react';
import '../AddProject.css';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }



  handleSubmit(e) {

    this.setState({
      newProject: {
        title: this.refs.title.value,

      }
    }, function () {
      this.refs.title.value = "";
      this.props.addProject(this.state.newProject);
    });

    e.preventDefault();
  }

  render() {

    return (
      <div className="todo-form">
        <h2 className="todo-form__title">Add Project</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <br />
            <input className="todo-form__button" type="submit" value="Submit" />
            <br />

          </div>
          <div>
            <input className="todo-form__input" type="text" ref="title" />
          </div>

        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  addProject: React.PropTypes.func
}

export default AddProject;