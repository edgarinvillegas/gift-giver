import { max_number } from './';

describe('max_number', () => {
    describe('given an empty array', () => {
        it('returns 0', () => {
            expect(max_number([])).toEqual(0);
        });
    })
    describe('given an array of numbers', () => {
        it('returns the max number', () => {
            expect(max_number([1,3,2])).toEqual(3);
        });
    });
})