const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('tom ', '2222', 'cpu@cpu.com', 'aa')
    
    expect(engineer.name).toBe('tom ');
    expect(engineer.id).toBe('2222');
    expect(engineer.email).toBe('cpu@cpu.com');
    expect(engineer.github).toBe('aa');
});

test ("engineer's github username", () => {
    const engineer = new Engineer ('tom ', '2222', 'cpu@cpu.com', 'aa')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('cpu@cpu.com'));
});

test("engineer's role", () => {
    const engineer = new Engineer ('tom ', '2222','cpu@cpu.com', 'aa')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
