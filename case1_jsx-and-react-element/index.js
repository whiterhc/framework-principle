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
