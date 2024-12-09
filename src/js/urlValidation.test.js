import { isValidUrl } from './urlValidation.js';
 // استيراد الدالة من الملف

test('Validates correct URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);  
    expect(isValidUrl('http://example.com')).toBe(true);   
    expect(isValidUrl('example.com')).toBe(true);         
    expect(isValidUrl('invalid-url')).toBe(false);      
});
