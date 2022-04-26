// children이 몇 개 들어올 지 알 수 없다.
function createElement(type, props: {} = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (
        // child 타입이 문자열인지 노드인지 모른다.
        typeof child === 'string' ? createTextElement(child) : child
      ))
    },
  }
}

function createTextElement(value) {
  return createElement('TEXT_ELEMENT', { nodeValue: value })
}

const React = {
  createElement,
}

// 런타임 시 각 Node를 트랜스파일러인 Babel에 알려주기 위해 참조한다.
/** @jsx React.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const container = document.getElementById('root')

container.innerHTML = prettyPrintJson.toHtml(React.createElement(element))
