import _ from 'lodash'
import './style.css'
import Logo from './assets/img/logo.png'
import Data from './data.xml'
import Notes from './data.csv'
function component() {
    let ele = document.createElement('div')
    ele.innerHTML = _.join(['hello ','webpack'],'')
    ele.classList.add('hello')
    // 将图像保存到dev中
    const img = new Image()
    img.src = Logo
    ele.appendChild(img)
    console.log(Data,Notes)
    return ele
}

document.body.appendChild(component())