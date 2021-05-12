//write something that gives the player a "name" and three number properties "health, Strength and agility"
// npm run test Player
// npm run test Potion
const Potion = require('../lib/Potion'); //<==== this used to Import the Potion() constructor into the rest, by making Potion as a usable variable.
jest.mock('../lib/Potion');
console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test("gets player's stats as an object", () => {        //<-------- GETTING STATS
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {    //<=========== GETTING INVENTORY
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});
