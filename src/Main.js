import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default class Main extends Component {
  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          style={{
            height: "50vh",
            width: "100%",
          }}
        />
      </div>
    );
  }
}
