export function state201(res, data, message) {
  res.status(201).json({
    msg: `${data} ${message}!`
  });
}

export function state200(res, data) {
  res.status(200).json({data});
}

export function state204(res, message) {
  res.status(204).json({msg: `${message}`});
}
