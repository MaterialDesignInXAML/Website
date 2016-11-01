import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const TabBarItem = (props) =>
  <a href={props.href} data-tab-id={props.id} className={"mdl-layout__tab" + (props.isActive ? " is-active" : "") }>
    {props.content}
    </a>


const IndexLayoutTabBar = (props) =>
  <div className={"mdl-layout__tab-bar mdl-js-ripple-effect"}>    
    {props.items.map(item => <TabBarItem key={item.id} id={item.id} href={"#"+item.id} content={item.content} isActive={item.id==props.activeId} />)}    
  </div>

module.exports = IndexLayoutTabBar