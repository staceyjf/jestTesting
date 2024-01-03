function domainName(url){
    //your code here
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '')
    return domain.slice(0,domain.indexOf('.com'))
  }

module.exports = domainName;