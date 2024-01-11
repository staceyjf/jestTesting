function domainName(url){
    //your code here
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '')
    const match = domain.match(/^[^\.]+/)
    return match[0]
  }

module.exports = domainName;