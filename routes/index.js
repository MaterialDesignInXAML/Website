var express = require('express');
var router = express.Router();
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var TabDatas = require('../bin/components/TabDatas.js');
var MetaMarkupRenderer = require('../bin/components/MetaMarkupRenderer.js');
var IndexLayoutTabBar = require('../bin/components/IndexLayoutTabBar');
var IndexLayoutTabBarFactory = React.createFactory(IndexLayoutTabBar);
 
const tabContentOptions = ((tabDatas) =>
{
	return tabDatas.map(td => {
		return {
			id: td.id,
			partialSource: 'partials/'+td.id+'.html',
			delaySource: '<div id="'+'tab-pending-'+td.id+'"></div>'
		} 
	})	
})(TabDatas.all)

const tabHeaderItems = ((tabDatas) =>
{
	return tabDatas.map(td => {
		return {
			id: td.id,
			content: td.title
		} 
	})	
})(TabDatas.all) 

function render(res, partialId) {	
	var tabData = TabDatas.select(partialId)
	var metaMarkup = MetaMarkupRenderer(tabData)
	var tabBarMarkup = ReactDOMServer.renderToString(IndexLayoutTabBarFactory({ items:tabHeaderItems, activeId:partialId}));	
	res.render('index.ejs', 
	{ 
		windowTitle: tabData.windowTitle,
		metaMarkup,
		tabBarMarkup,
		activeTabId : partialId,
		tabContentOptions 
	});
}

router.get('/', function(req, res, next) {
	render(res, "home")
})

TabDatas.all.forEach(td =>
{
	router.get('/'+td.id, function(req, res, next) {
		render(res, td.id)
	})			
})

module.exports = router