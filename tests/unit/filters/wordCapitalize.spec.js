import capitalize from '../../../src/filters/wordCapitalize'
describe('In this filter',()=>{
    it('it will capitalaize first letter',()=>{
        const word="Hello";
        expect(capitalize("hello")).toBe(word);
    })
    it('returns empty string if value is "" ',()=>{
        expect(capitalize(null)).toBe("")
    })
})