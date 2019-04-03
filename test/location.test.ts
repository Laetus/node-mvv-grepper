import Location from '../src/models/location';

test("test location", () => {
    expect(new Location(42, 17).toString()).toBe('Location: See https://www.google.de/maps/@42,17,13z')
});