const Employee = require ("../lib/Employee")
test("can create an object from the employee constructor", () => {
const e = new Employee()
expect(typeof(e)).toBe("object")
})