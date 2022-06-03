import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
					<br />
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;

/**
 * The file input Tag
 * 
 * In HTML, an <input type="file"> lets the user choose 
 * one or more files from their device storage to be uploaded 
 * to a server or manipulated by JavaScript via the File API.
 * 
 * In React, an <input type="file" /> is always an 
 * uncontrolled component because its value can 
 * only be set by a user, and not programmatically.
 * 
 * You should use the File API to interact with the files. 
 * The following example shows how to create a ref to the 
 * DOM node to access file(s) in a submit handler:
 * 
 * Learn more
 * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
 */