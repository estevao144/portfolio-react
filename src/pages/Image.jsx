import React from "react";

class Image extends React.Component {
  render() {
    return (
      <div className="imagem">
        <aside className="lateral">
          <img className="imagem" src="./assets/img/me.jpeg" alt="eu" id="foto"></img>
        </aside>
      </div>
    );
  }
}

export default Image;
