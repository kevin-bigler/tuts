const LevelRepository = require('./LevelRepository');

class Map {
    constructor(levelRepo = new LevelRepository()) {
        this.levelRepo = levelRepo;
    }

    /**
     * Return an object containing a level and a name, given an ID string
     */
    getMap(mapId) {
        return {
            level: this.levelRepo.get('the right one'),
            name: 'a cool test map'
        };
    }
}

module.exports = Map;