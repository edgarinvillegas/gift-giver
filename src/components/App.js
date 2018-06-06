import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
    state = {  //doesn't work
        gifts: []
    };
    constructor() {
        super();
        this.state = {
            gifts: []
        };
    }

    addGift = () => {
        const { gifts } = this.state;
        const ids = this.state.gifts.map( gift => gift.id );
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: max_id + 1 } );

        this.setState({
            gifts
        });
    };

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
                <ul className="gift-list">
                    {this.state.gifts.map(gift => (
                        <li key={gift.id}>{gift.id}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default App;