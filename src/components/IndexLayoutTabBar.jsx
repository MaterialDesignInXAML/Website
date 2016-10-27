var React = require('React')

const TabBarItem = (props) =>
  <a href={props.href} className={"mdl-layout__tab"}>{props.content}</a>

const IndexLayoutTabBar = (props) =>
  <div className={"mdl-layout__tab-bar mdl-js-ripple-effect"}>
    <div className={"mdl-tabs__tab-bar"}>
        <TabBarItem href="home" content="Home" />
        <TabBarItem href="doobry" content="doobry" />
    </div>
  </div>

module.exports = IndexLayoutTabBar