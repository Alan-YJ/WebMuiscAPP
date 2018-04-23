import {params,options} from './config';
import jsonp from '../common/js/json';

export function getImgList(){
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    
    let data = Object.assign({},params,{
        notice:0,
        needNewCode:1
    })
    return jsonp(url,data,options)
}