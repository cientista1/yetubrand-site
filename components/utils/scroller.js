import Scroll from "react-scroll";

var scroller = Scroll.scroller;


export function ScroollToElement(element, offset = 0){
  
  scroller.scrollTo(element, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset
  })

}