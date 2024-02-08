import {caesarsolve} from "../caesar";

describe('caesar encode test', () => {
    test('empty string should return empty string', () => {
        expect(caesarsolve('', 3)).toBe('')
    })
    test('every letter of the alphabet with shift 3', () => {
        expect(caesarsolve('The quick brown fox jumped over the lazy dog!', 3)).toBe('WKH TXLFN EURZQ IRA MXPSHG RYHU WKH ODCB GRJ!')
    })
    test('every letter of the alphabet with shift 7', () => {
        expect(caesarsolve('The quick brown fox jumped over the lazy dog!', 7)).toBe('AOL XBPJR IYVDU MVE QBTWLK VCLY AOL SHGF KVN!')
    })
    test('every letter of the alphabet with shift 9', () => {
        expect(caesarsolve('The quick brown fox jumped over the lazy dog!', 9)).toBe('CQN ZDRLT KAXFW OXG SDVYNM XENA CQN UJIH MXP!')
    })
    test('every letter of the alphabet with shift 15', () => {
        expect(caesarsolve('The quick brown fox jumped over the lazy dog!', 15)).toBe('IWT FJXRZ QGDLC UDM YJBETS DKTG IWT APON SDV!')
    })
    test('every letter of the alphabet with shift 21', () => {
        expect(caesarsolve('The quick brown fox jumped over the lazy dog!', 21)).toBe('OCZ LPDXF WMJRI AJS EPHKZY JQZM OCZ GVUT YJB!')
    })
});