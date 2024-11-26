const STATUSCODE = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CREATED: 201,
};
const STATUSTEXTE  = {
  SUCCESS: "Success",
  NOT_FOUND: "Not Found",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  CREATED: "Created",
};

module.exports = {
  STATUSCODE,
  STATUSTEXTE,
};