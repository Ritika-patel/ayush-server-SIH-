exports.responseHelper = (res, status, data, message) => {
    const resStatus = status ? "success" : "fail";
    const validRes = {
      status: resStatus,
      data,
      message,
    };
    res.send(data);
    res.status(200).send(validRes);
  };
  