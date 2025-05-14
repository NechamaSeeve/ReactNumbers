import React from 'react'
import NumberForm from './NumberForm'
import NumberRow from './NumberRow'
import SelectedNumbers from './SelectedNumbers'

let id = 0;
class NumberTable extends React.Component {
    state = {
          
           currentNumber: {
            number: '',
            id: ''
        },
        numbers: [],
        selectedNumbers: [],
        lockedNumbers:[]

    }

    
    getRandomNumber = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    onAddClicked = () => {
        id++;
        const randomNum = this.getRandomNumber(1, 1000)
        this.setState({ numbers: [...this.state.numbers, { currentNumber: { number: randomNum, id: id } }] })
    }
    onSelectClick = (n) => {
        
        if (this.state.selectedNumbers.some(s => s.currentNumber.id === n.id)) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.filter(s => s.currentNumber.id !== n.id) });
        }
        else {
            this.setState({ selectedNumbers: [...this.state.selectedNumbers, { currentNumber: n }] }) 
        } 
    }
    onLockedClick = (n) => {
       console.log(n)
        if (this.state.lockedNumbers.some(l => l.currentNumber.id === n.id)) {
            this.setState({ lockedNumbers: this.state.lockedNumbers.filter(l => l.currentNumber.id !== n.id) });
        }
        else {
            this.setState({ lockedNumbers: [...this.state.lockedNumbers, { currentNumber: n }] })
            console.log(this.state.lockedNumbers)
        } 
    }
    

   
    render() {
      
        return (
            <>
                <NumberForm onAddClicked ={this.onAddClicked} />
            <div style={{maxHeight:500}}>
                <table className="table table-hover table-striped table-bordered">
                        <thead>
                            
                        <tr>
                            <th style={{width: 25}}>Number</th>
                                <th>Add/Remove</th>
                        </tr>
                    </thead>
                        <tbody>

                            {
                                this.state.numbers.map(n => <NumberRow number={n.currentNumber.number}
                                    
                                    key={n.currentNumber.id}
                                    isSelected={this.state.selectedNumbers.some(s => s.currentNumber.id === n.currentNumber.id)}
                                   
                                    onSelectClick={() => this.onSelectClick(n.currentNumber)}
                                    isLocked={this.state.lockedNumbers.some((l => l.currentNumber.id === n.currentNumber.id))}
                                    
                                />) }
                    </tbody>
                </table>
                </div>
                {!!this.state.selectedNumbers.length && <div className="row p-5 rounded" >
                        <div className="col-md-6 col-md-offset-3">
                            <h3>Selected Numbers </h3>
                            <ul className="list-group">

                                {
                                    this.state.selectedNumbers.map((n) => <SelectedNumbers isLocked={this.state.lockedNumbers.some((l => l.currentNumber.id === n.currentNumber.id))} onLockClick={() => this.onLockedClick(n.currentNumber)} number={n.currentNumber.number} key={n.currentNumber.number} />)
                                
                                }
                           
                            </ul>
                        </div>
                    </div>
                }
            </>
        )
    }
}
export default NumberTable