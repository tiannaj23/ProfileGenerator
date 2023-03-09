const Intern = require ("../lib/Intern")
test("can set school via the constructor", ()=> {
    const test = "Sally University"
    const e = new Intern("Sally", 2, "sally@email.com", test)
    expect(e.school).toBe(test)
})