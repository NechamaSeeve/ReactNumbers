import React from 'react'

class NumberForm extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop:60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg w-100" onClick={this.props.onAddClicked }>Add</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default NumberForm;