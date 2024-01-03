const domainName = require('../katas_11')

describe('domainName', () => {
    // test to parse out the domain name from a URL
    test('should return', ()=> {
        expect(domainName("http://github.com/carbonfive/raygun")).toEqual("github")
    })

    // test to parse out the domain name from a URL without ww
    test('should return', ()=> {
        expect(domainName("http://www.zombie-bites.com")).toEqual("zombie-bites")
    })

    // test to parse out the domain name with unconvntional ends
    test('should return', ()=> {
        expect(domainName("www.xakep.ru")).toEqual("xakep")
    })

    
} )