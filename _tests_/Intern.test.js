const Intern = require('../lib/Intern.js')

test('creates an engineer object', () => {
    const intern = new Intern ('tom ', '2222', 'cpu@cpu.com', 'vandy')
    
    expect(intern.name).toBe('tom ');
    expect(intern.id).toBe('2222');
    expect(intern.email).toBe('cpu@cpu.com');
    expect(intern.school).toBe('vandy');
});

test ("intern's school", () => {
    const intern = new Intern ('tom ', '2222', 'cpu@cpu.com', 'vandy')

    expect(intern.getSchool()).toEqual(expect.stringContaining('vandy'));
});

test("intern's role", () => {
    const intern = new Intern ('tom ', '2222','cpu@cpu.com', 'vandy')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});