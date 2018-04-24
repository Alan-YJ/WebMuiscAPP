import {params,options} from './config';
import jsonp from '../common/js/json';
import Axios from 'axios';

export function getSingerList(){
    let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    
    let data = Object.assign({},params,{
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
    })
    return jsonp(url,data,options)
}
