import React, { Component } from 'react';
import { Link } from 'react-router';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTextArea: 'Welcome you',
    };
    this.renderText = this.renderText.bind(this);
  }
  componentDidMount() {
    const text = $('.editor-text');
    text.typed({
      strings: ["<br><br>Hi, I'm Ben^",
      "<br><br>Welcome to my <br><br>Portfolio! <br><br><br><br><br><br><span class='editor-subtitle'>Please choose your level:</span>"],
      typeSpeed: 0.5,
      contentType: 'html',
    });
  }
  renderText() {
    return 'youpii';
  }

  render() {
    return (
      <div className="container-editor">
        <div ref={(editor) => this.editor = editor} className="editor">
          <span className="editor-text" />
          <div className="editor-nav">
            <div className="editor-nav-link">
              <Link to="fuel-savings">Work</Link>
            </div>
            <div className="editor-nav-link">
              <Link to="">Skills</Link>
            </div>
            <div className="editor-nav-link">
              <Link to="">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
