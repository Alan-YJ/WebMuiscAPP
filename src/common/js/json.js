import jsonpModule from 'jsonp';

export default function jsonp(url, data, options) {
    url += (url.indexOf('?') > 0 ? '&' : '?') + new URLSearchParams(data).toString()
    return new Promise((resolve, reject) => {
        jsonpModule(url,options,(err,res)=>{
            if(!err){
                resolve(res)
            }else{
                reject(err)
            }
        })
    })
}