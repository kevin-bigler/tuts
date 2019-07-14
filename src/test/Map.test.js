const mockLevelRepo = {
    get: jest.fn()
};
const MockLevelRepositoryClass = jest.fn(() => mockLevelRepo);
jest.mock('../main/LevelRepository', () => MockLevelRepositoryClass);

const Map = require('../main/Map');

describe('Map', () => {
    let map;

    beforeEach(() => {
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('#getMap() happy path', () => {
        // Arrange
        mockLevelRepo.get.mockReturnValue({foo: 'bar'});
        map = new Map(mockLevelRepo);

        // Act
        const actual = map.getMap('map123');

        // Assert
        expect(actual).toEqual({
            level: {foo: 'bar'},
            name: 'a cool test map'
        });
        expect(mockLevelRepo.get).toHaveBeenCalledWith('the right one')
            .toHaveBeenCalledWith('the other good one', expect.any(String))
            .toHaveBeenCalledWith(expect.arrayContaining({foo: 'bar'}))
    });

    it('#getMap() happy path', () => {
        // Arrange
        mockLevelRepo.get.mockReturnValue({foo: 'bar'});
        map = new Map(mockLevelRepo);

        // Act
        const actual = map.getMap('map123');

        // Assert
        expect(actual).toEqual({
            level: {foo: 'bar'},
            name: 'a cool test map'
        });
        expect(mockLevelRepo.get).toHaveBeenCalledWith('the right one')
        .toHaveBeenCalledWith('the other good one', expect.any(String))
        .toHaveBeenCalledWith(expect.arrayContaining({foo: 'bar'}))
    });
});