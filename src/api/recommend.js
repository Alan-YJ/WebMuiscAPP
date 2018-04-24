import {params,options} from './config';
import jsonp from '../common/js/json';
import Axios from 'axios';

export function getImgList(){
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    
    let data = Object.assign({},params,{
        notice:0,
        needNewCode:1
    })
    return jsonp(url,data,options)
}

export function getDiscList(){
    const url = '/api/getDiscList'
    
    const data = Object.assign({},params,{
        picmid: 1,
        rnd: Math.random(),
        hostUin: 0,
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29,
        format:'json'
    })
    
    return Axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
    
}