
const mongoose = require("mongoose");
const { getEnemies } = require('../controllers/gameControllers')

beforeEach(async () => {
    await mongoose.connect("mongodb+srv://newuser:zaKUwAsSSChyUO3U@pinder.skvgszw.mongodb.net/Game");
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe('Testing Enemies', () => {
    test('should have length greater than 0', () => {
        return getEnemies().then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

    test('should have expected properties and types', () => {
        return getEnemies().then((enemies) => {
            enemies.forEach((enemy) => {
                expect(enemy).toHaveProperty('_id', expect.any(Object))
                expect(enemy).toHaveProperty('attackDamage', expect.any(Number))
                expect(enemy).toHaveProperty('coinsOnKill', expect.any(Number))
                expect(enemy).toHaveProperty('health', expect.any(Number))
                expect(enemy).toHaveProperty('level', expect.any(Number))
                expect(enemy).toHaveProperty('walkSpeed', expect.any(Number))
            })
        })
    })
})