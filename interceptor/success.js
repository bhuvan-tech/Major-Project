const successResponse = (res, statuscode, data) => {
  const response = { success: true, data };
  return res.status(statuscode).json(response);
};

export { successResponse };
