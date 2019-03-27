const TransformDate = date => {
  let justDate = date.split('T');
  let frenchDate = justDate[0].split('-');
  return `${frenchDate[2]}-${frenchDate[1]}-${frenchDate[0]}`
}

export default TransformDate
