import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";

var HelloWord = createReactClass({
    render: function () {
        return (
            <p>
                Hello, {this.props.greetTarget}!
            </p>
        );
    }
});

ReactDOM.render(
    <div>
        <HelloWord greetTarget="TranLam"/>
        <HelloWord greetTarget="VanPhuong"/>
    </div>,
    document.querySelector("#container")
);
