var React = require('React')

const TabBarItem = (props) =>
  <a href={props.href} className=
  {"mdl-layout__tab" + (props.isActive ? " is-active" : "") }>{props.content}</a>

const IndexLayoutTabBar = (props) =>
  <div className={"mdl-layout__tab-bar mdl-js-ripple-effect"}>
    <div className={"mdl-tabs__tab-bar"}>
      {props.items.map(item => <TabBarItem href={"#"+item.id} content={item.content} isActive={item.id==props.activeId} />)}
    </div>
  </div>

module.exports = IndexLayoutTabBar