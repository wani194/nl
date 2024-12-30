import { isValidUrl } from '../src/js/urlValidation.js';

test('Validates correct URLs', () => {
    //روابط صح
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('example.com')).toBe(true);
    expect(isValidUrl('http://example.com/path')).toBe(true);

    // روابط ليست صحيحه
    expect(isValidUrl('invalid-url')).toBe(false);
    expect(isValidUrl('http://')).toBe(false);
    expect(isValidUrl('http://example')).toBe(false);
});
