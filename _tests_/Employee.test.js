const Employee = require('../lib/Employee.js');

test('employee object', () => {
    const employee = new Employee('tom', '2356', 'me@me.com');

    expect(employee.name).toBe('tom');
    expect(employee.id).toBe('2356');
    expect(employee.email).toBe('me@me.com');
});

test("employee name", () => {
    const employee = new Employee('tom', '2356', 'me@me.com');

    expect(employee.getName()).toEqual(expect.stringContaining('tom'));
});

test("employee ID", () => {
    const employee = new Employee('tom', '2356', 'me@me.com');

    expect(employee.getId()).toEqual(expect.stringContaining('2356'));
});

test("employee email", () => {
    const employee = new Employee('tom', '2356', 'me@me.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('me@me.com'));
});
