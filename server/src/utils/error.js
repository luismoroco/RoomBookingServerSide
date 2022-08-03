export function throwerror(identifier) {
  console.log(`Error in: ${identifier}`);
}

export function error505(res, message) {
  res.status(505).json({ msg: `Error!, ${message}`});
}

export function error409(res, data) {
  return res.status(409).json({msg: `${data} ya existe!`})
}

export function error400(res, data, message) {
  return res.status(400).json({msg: `${message}, ${data}`})
}
