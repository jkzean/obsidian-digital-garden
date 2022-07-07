export const seedling = `<g style="pointer-events:all"><title style="pointer-events: none" opacity="0.33">Layer 1</title><g id="hair" style="pointer-events: none" opacity="0.33"></g><g id="skin" style="pointer-events: none" opacity="0.33"></g><g id="skin-shadow" style="pointer-events: none" opacity="0.33"></g><g id="line"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.71119,35.9247" id="svg_3"></path><polyline fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="49.813106536865234,93.05191133916378 49.813106536865234,69.57996462285519 40.03312683105469,26.548054680228233 " id="svg_4"></polyline><line x1="49.81311" x2="59.59309" y1="69.57996" y2="50.02" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="svg_5"></line><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.99666,14.21103C35.9517,16.94766 39.92393,26.36911 39.92393,26.36911S30.99696,31.3526 23.04075,28.61655S11.11348,16.45847 11.11348,16.45847S20.04456,11.4789 27.99666,14.21103z" id="svg_6"></path><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M76.46266698455811,45.61669603088379 C84.67706698455811,47.43146603088379 89.6945869845581,56.34024603088379 89.6945869845581,56.34024603088379 S81.3917769845581,62.30603603088379 73.17639698455811,60.492046030883785 S59.94447698455811,49.768496030883796 59.94447698455811,49.768496030883796 S68.2515869845581,43.80622603088379 76.46266698455811,45.61669603088379 z" id="svg_7"></path></g></g>`
export const excaliDrawBundle = `<style>
.container {font-family: sans-serif; text-align: center;}
.button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;}
.excalidraw .App-menu_top .buttonList { display: flex;}
.excalidraw-wrapper { height: 800px; margin: 50px; position: relative;}
:root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;}
</style><script src="https://unpkg.com/react@17/umd/react.production.min.js"></script><script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://unpkg.com/@excalidraw/excalidraw/dist/excalidraw.production.min.js"></script>`;

export let excalidraw = (excaliDrawJson:string , drawingId:string):string => `<div id="${drawingId}"></div><script>(function(){const InitialData=${excaliDrawJson};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("${drawingId}");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>`;