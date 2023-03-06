const Manager = require ("../lib/Manager")
test("can set the office number via the constructor", ()=> {
const test = 15
const e = new Manager("John", 1, "john@email.com", test)
expect(e.officeNumber).toBe(test)
})
