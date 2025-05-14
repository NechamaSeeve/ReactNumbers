import React from 'react';

class NumberRow extends React.Component {

    render() {
        
        return <tr >
            <td>{this.props.number}</td>
            <td>
                <button disabled={this.props.isLocked} className={`btn btn-${this.props.isSelected ? 'danger' : 'warning'} `} onClick={this.props.onSelectClick}>{this.props.isSelected ? 'Remove From Selected' : 'Add To Selected'}</button>
            </td>
        </tr>
    }
}

export default NumberRow;