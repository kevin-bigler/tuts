const sum = require('../main/sum');
describe('sum', () => {
    // it('happy path -- should add 2 numbers', () => {
    //     // Arrange
    //     // initialize, setup, mock
    //
    //     // Act
    //     const actual = sum(5, 10);
    //
    //     // Assert
    //     expect(actual).toBe(15);
    // });

    // const testScenarios = [
    //     {
    //         a: 5,
    //         b: 10,
    //         c: 15
    //     },
    //     {
    //         a: 2,
    //         b: 1003,
    //         c: 1005
    //     }
    // ];

    describe.each([[5,10,15],[2,1003,1005]])(
        `happy path where a=%i and b=%i, c should be %i`,
        (a,b,c) => {
        test('Should sum two numbers', () => {
            // Arrange
            // initialize, setup, mock
            // Act
            const actual = sum(a, b);
            // Assert
            expect(actual).toBe(c);
        });
    });

    it.skip('should only accept number parameters', () => {});
});