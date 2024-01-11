const domainName = require('../katas_11')

describe('domainName', () => {
    // test to parse out the domain name from a URL
    test('should return domain name without www', ()=> {
        expect(domainName("http://github.com/carbonfive/raygun")).toEqual("github")
    })

    // test to parse out the domain name from a URL without ww
    test('should return domain with www', ()=> {
        expect(domainName("http://www.zombie-bites.com")).toEqual("zombie-bites")
    })

    // test to parse out the domain name with unconvntional ends
    test('should return other ends', ()=> {
        expect(domainName("www.xakep.ru")).toEqual("xakep")
    })

    
} )