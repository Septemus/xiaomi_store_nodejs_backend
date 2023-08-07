const fs=require('fs')
let data=fs.readFileSync('./tmp1.html').toString()
let img_src=/img src="(.*)"/g
let path_arr=data.match(img_src)
img_src=/img src="(.*)"/
path_arr=path_arr.map(item=>{
    let ret=item.match(img_src)[1]
    console.log(ret)
    return ret
})
console.log('this is path_arr:',path_arr)

let 

// console.log(data)