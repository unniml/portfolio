export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 500;
}

export function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 50;
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
  return phoneRegex.test(phone);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidDate(date: string): boolean {
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

export function isValidNumber(value: string): boolean {
  const numberRegex = /^-?\d+(\.\d+)?$/; // Matches integers and decimals
  return numberRegex.test(value);
}

export function isValidInteger(value: string): boolean {
  const integerRegex = /^-?\d+$/; // Matches integers only
  return integerRegex.test(value);
}

export function isValidDecimal(value: string): boolean {
  const decimalRegex = /^-?\d+(\.\d+)?$/; // Matches integers and decimals
  return decimalRegex.test(value);
}

export function isValidBoolean(value: string): boolean {
  return value === 'true' || value === 'false';
}

export function isValidColor(color: string): boolean {
  const colorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/; // Matches hex colors
  return colorRegex.test(color);
}

export function isValidFileType(fileType: string): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  return validTypes.includes(fileType);
}

export function isValidFileSize(fileSize: number, maxSizeMB: number): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
  return fileSize <= maxSizeBytes;
}

export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function isValidUsername(username: string): boolean {
  // Alphanumeric, underscores, 3-20 characters
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
}

export function isValidDateRange(startDate: string, endDate: string): boolean {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start < end;
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
  return phoneRegex.test(phone);
}

export function isValidCreditCard(cardNumber: string): boolean {
  const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return cardRegex.test(cardNumber);
}

export function isValidPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // Canadian postal code format
  return postalCodeRegex.test(postalCode);
}

export function isValidSocialSecurityNumber(ssn: string): boolean {
  const ssnRegex = /^\d{3}-\d{2}-\d{4}$/; // Format: XXX-XX-XXXX
  return ssnRegex.test(ssn);
}

export function isValidTaxId(taxId: string): boolean {
  const taxIdRegex = /^[A-Z0-9]{2}-\d{7}-\d{1}$/; // Example format: XX-1234567-X
  return taxIdRegex.test(taxId);
}

export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

export function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

export function isValidLatitude(latitude: string): boolean {
  const latRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/; // -90 to 90
  return latRegex.test(latitude);
}

export function isValidLongitude(longitude: string): boolean {
  const lonRegex = /^-?((1[0-7]\d(\.\d+)?)|([1-9]?\d(\.\d+)?|180(\.0+)?))$/; // -180 to 180
  return lonRegex.test(longitude);
}

export function isValidTime(time: string): boolean {
  const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/; // HH:mm format
  return timeRegex.test(time);
}

export function isValidCreditCardExpiry(expiry: string): boolean {
  const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
  return expiryRegex.test(expiry);
}

export function isValidCreditCardCVV(cvv: string): boolean {
  const cvvRegex = /^\d{3,4}$/; // 3 or 4 digits
  return cvvRegex.test(cvv);
}

export function isValidHexColor(hex: string): boolean {
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/; // Matches hex colors
  return hexRegex.test(hex);
}

export function isValidCreditCardType(cardNumber: string): string {
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
    return 'Visa';
  } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
    return 'MasterCard';
  } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
    return 'American Express';
  } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber)) {
    return 'Discover';
  } else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cardNumber)) {
    return 'JCB';
  }
  return 'Unknown';
}

export function isValidCreditCardIssuer(cardNumber: string): string {
  const issuer = isValidCreditCardType(cardNumber);
  return issuer !== 'Unknown' ? issuer : 'Unknown Issuer';
}

export function isValidCreditCardNetwork(cardNumber: string): string {
  const network = isValidCreditCardType(cardNumber);
  return network !== 'Unknown' ? network : 'Unknown Network';
}

export function isValidCreditCardFormat(cardNumber: string): boolean {
  const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return cardRegex.test(cardNumber);
}

export function isValidCreditCardSecurityCode(cvv: string): boolean {
  const cvvRegex = /^\d{3,4}$/; // 3 or 4 digits
  return cvvRegex.test(cvv);
}

export function isValidCreditCardHolderName(name: string): boolean {
  // At least 2 characters, only letters and spaces
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  return nameRegex.test(name);
}

export function getErrorMessage(error: unknown) {
  let message = '';

  if (error instanceof Error) {
    message = error.message;
  } else if (error instanceof Array) {
    if (error.length > 0) {
      message = error[0];
    }
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Unknown error';
  }
  return message;
  
}
