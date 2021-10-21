import {Triangle} from './triangle.js'

describe('Tests to determine whether or not a shape entered is a triangle', () => {
    describe('equalateral triangle', () => {
        test   ('all sides are equal', () => {
            const triangle = new Triangle (2,2,2);
            expect (triangle.isEqualateral).toBe(true);
        });

        test ('no sides are equal', () => {
            const triangle = new Triangle (5,4,6);
            expect (triangle.isEqualateral).toBe(false);
        })

    })
    describe('isoceles triangle', () => {
        test ('two sides are equal', () => {
        const triangle = new Triangle (2,3,3);
        expect (triangle.isIsoceles).toBe(true);
    })
})
    describe('scalene triangle', () => {
        test('no sides are equal', () => {
        const triangle = new Triangle (2,3,4);
        expect (triangle.isScalene).toBe(true);
        })

        test('no sides are equal', () => {
            const triangle = new Triangle (0.2,0.3,0.4);
            expect (triangle.isScalene).toBe(true);
            })
    })
})