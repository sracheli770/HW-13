export class Utils {
    static currentDateString() {
        const date = new Date();
        const currentDateString = date.toLocaleDateString('he-il', {
            year: 'numeric',
            month: 'numeric',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 3,
        });
        return currentDateString
    }
}
