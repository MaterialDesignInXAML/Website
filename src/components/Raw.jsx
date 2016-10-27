import React from 'react'

const Raw = (props) =>
    <div id={props.id} dangerouslySetInnerHTML={{__html:props.content}} />

module.exports = Raw