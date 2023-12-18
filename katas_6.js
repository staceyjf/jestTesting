function openOrSenior(data){
  return data.reduce((acc, member) => {
    const type = (member[0] >= 55 && member[1] > 7) ? "Senior" : "Open";
    acc.push(type)
    return acc
    }, [])
  }

  module.exports =  openOrSenior 