import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Gift from './Gift';

class App extends Component {
    state = {  //doesn't work
        gifts: []
    };

    addGift = () => {
        const { gifts } = this.state;
        const ids = this.state.gifts.map( gift => gift.id );
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: max_id + 1 } );

        this.setState({
            gifts
        });
    };

    removeGift = (id) => {
        this.setState((currState) => ({
            gifts: currState.gifts.filter(gift => gift.id !== id )
        }));
    };

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <ul className="gift-list">
                    {this.state.gifts.map(gift => (
                        <Gift
                            key={gift.id}
                            gift={gift}
                            removeGift={this.removeGift}
                        />
                    ))}
                </ul>
                <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
            </div>
        );
    }
}

export default App;