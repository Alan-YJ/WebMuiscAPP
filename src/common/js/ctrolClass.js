export function addClass(el,classname){
    if(el.className.indexOf(classname)>=0){
        console.info('没有这个class')
        return 
    }
    let classlist = el.className.split(' ')
    classlist.push(classname)
    el.className = classlist.join(' ')
}

export function removeClass(el,classname){
    if(el.className.indexOf(classname)>=0){
        console.info('没有这个class')
        return 
    }
    let classlist = el.className.split(' ')
    for(let i =0;i<classlist.length;i++){
        if(classname==classlist[i]){
            classlist.splice(i,1)
        }
    }
    el.className = classlist.join(' ')
    console.info(el.className)
}