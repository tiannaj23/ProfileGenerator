const Engineer = require ("../lib/Engineer")
test("can set github via the constructor", ()=> {
    const test = "https://github.com/tasha25"
    const e = new Engineer("Tasha", 3, "tasha@email.com", test)
    expect(e.github).toBe(test)
})