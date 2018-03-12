import React from 'react';

export class DrinkForm extends React.Component {
    onSubmit = () => {
        this.props.onSubmit();
    };
    render(){
        return (
          <form className="form" onSubmit={this.onSubmit}>
              <div>
                  <button className="button">{this.props.actionTitle}</button>
              </div>
          </form>
        );
    }
}

export default DrinkForm;