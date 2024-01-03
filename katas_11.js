function domainName(url){
    //your code here
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '')
    const match = domain.match(/^[^\.]+/)
    console.log(match)
    return match[0]
  }

module.exports = domainName;