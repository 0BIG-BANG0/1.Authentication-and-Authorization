//Custom error class for API errors
// This class extends the built-in Error class to provide additional context for API errors, such as
export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);//Error.captureStackTrace is a method that creates a stack trace for the error instance, which can be useful for debugging.
  }
}
