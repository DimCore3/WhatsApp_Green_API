export function validatePhone(phone: string): boolean {
    const phonePattern = /^\d{8,12}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number is not correct: There are should be only digit, 8-12 characters");
        return false;
    }
    return true;
}