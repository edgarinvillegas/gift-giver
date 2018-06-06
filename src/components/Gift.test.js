import React from 'react';
import { shallow } from 'enzyme';

import Gift from './Gift';

describe('Gift', () => {
    //const mockRemove = jest.fn();
    //const id = 1;
    //const props = { gift: { id }, removeGift: mockRemove };
    //const gift = shallow(<Gift {...props} />);
    const gift = shallow(
        <Gift
            gift={{ id: 1 }}
            removeGift={jest.fn()}
        />
    );

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    });

    describe('when typing into person input', () => {
        const person = 'Uncle';
        beforeEach( () => {
            const simulatedEvent = { target: { value: person } };
            gift.find('.input-person').simulate('change', simulatedEvent);
        } );

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'Palos de golf';
        beforeEach( () => {
            const simulatedEvent = { target: { value: present } };
            gift.find('.input-present').simulate('change', simulatedEvent);
        } );

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    });

    describe('when clicking on remove button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {
            //expect(mockRemove).toHaveBeenCalledWith(id);
            expect(gift.instance().props.removeGift)
                .toHaveBeenCalledWith(gift.instance().props.gift.id)
            ;
        });
    });
});
