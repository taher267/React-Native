import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div>
                    <div className="col-md-6 mx-auto m-3">
                    <select className="form-control" value="Dhaka">
                        <option>Select Option</option>
                        <option>Bagerhat</option>
                        <option>Chitagong</option>
                        <option>Dhaka</option>
                    </select>
                    </div>
            </div>
        );
    }
}

export default Select;