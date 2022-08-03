export function getDateTime() {
    return new Date().toLocaleDateString('en-GB', {timeZone: 'UTC'});
}
