class ApiResponse {
  constructor(statusCode = 200, message = "Success", data = "") {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}
export default ApiResponse;
