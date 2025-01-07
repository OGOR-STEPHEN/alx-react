// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions tests', () => {
    test('getFullYear returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns "Holberton School" when true', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });

    test('getFooterCopy returns "Holberton School main dashboard" when false', () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    test('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});

