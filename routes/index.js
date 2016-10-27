var express = require('express');
var router = express.Router();
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var IndexLayoutTabBar = require('../bin/components/IndexLayoutTabBar');
var IndexLayoutTabBarFactory = React.createFactory(IndexLayoutTabBar);
//var Raw =require('../bin/components/Raw')
//var RawFactory = React.createFactory(Raw);
//ReactDOMServer.renderToString(RawFactory({ id: 'tab-content-'+ti.id, content:'<p>'+ti.id+' to be loaded</p>' }))

const homeTabHeader = { id:"home", content:"Home" }
const f1TabHeader = { id:"f1ix", content:"F1ix" } 
const doobryTabHeader = { id:"doobry", content:"doobry" }
const tabHeaderItems = [
		homeTabHeader,
		f1TabHeader,
		doobryTabHeader
	] 
const tabContentOptions = (ti =>
{
	return tabHeaderItems.map(ti => {
		return {
			id: ti.id,
			partialSource: 'partials/'+ti.id+'.html',
			delaySource: '<div id="'+'tab-pending-'+ti.id+'"></div>'
		} 
	})	
})(tabHeaderItems)


function render(res, partialId) {
	
	var tabBarMarkup = ReactDOMServer.renderToString(IndexLayoutTabBarFactory({ items:tabHeaderItems, activeId:partialId}));
	
	res.render('index.ejs', 
	{ 
		tabBarMarkup,
		activeTabId : partialId,
		tabContentOptions 
	});
}

router.get('/', function(req, res, next) {
	render(res, homeTabHeader.id)					
})

tabHeaderItems.forEach(ti =>
{
	router.get('/'+ti.id, function(req, res, next) {
		render(res, ti.id)
	})			
})

module.exports = router