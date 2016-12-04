import React, { Component } from 'react';
import '../Project-item.css';
class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project-item">
        {this.props.project.title}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}><span className="Project-item__delete">X</span></a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;