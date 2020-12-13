const Manager = require('../lib/Manager.js')

test('creates an manager object', () => {
    const manager = new Manager ('tom ', '2222', 'cpu@cpu.com', '2356')
    
    expect(manager.name).toBe('tom ');
    expect(manager.id).toBe('2222');
    expect(manager.email).toBe('cpu@cpu.com');
    expect(manager.officeNumber).toBe('2356');
});

test ("manager's officeNumber email", () => {
    const manager = new Manager ('tom ', '2222', 'cpu@cpu.com', '2356')

    expect(manager.getEmail()).toEqual(expect.stringContaining('cpu@cpu.com'));
});

test("manager's role", () => {
    const manager = new Manager ('tom ', '2222','cpu@cpu.com', '2356')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});