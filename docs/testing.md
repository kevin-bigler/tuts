# Testing

## Types

- Unit
- Integration*
- End-to-End

Depends on scope, ie modules vs entire project vs multiple services acting together

## AAA

AAA is an acronym to help outline test cases

1. Arrange
1. Act
1. Assert

### Arrange

setup for the test. mock dependencies, define test data, initialize uut ("unit under test" -- the thing you're testing)

### Act

run the function

### Assert

check that whatever should happen happened

## Node JS frameworks

mocha + chai + sinon

jest