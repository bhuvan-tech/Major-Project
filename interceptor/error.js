const errorResponse = (res, statuscode, error) => {
  const response = { success: false, error };
  return res.status(statuscode).json(response);
};

export { errorResponse };
