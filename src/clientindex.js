import React from 'react'
import { render } from 'react-dom'
import Raw from './components/Raw.jsx'

window.onpopstate = function(event) {
    $('a.mdl-layout__tab').removeClass('is-active');            
    $("[data-tab-id='"+event.state.tabId+"']").addClass('is-active');
};

function changeUrl(tabId) {
    //TODO get title
    let title = tabId
    if (window.history && window.history.pushState) {
        var obj = { tabId: tabId };
        window.history.pushState(obj, title, tabId)
    }
}

function findSetupAsset(assets) {
	for (var i = 0; i < assets.length; i++) {
		if (assets[i].name.toLowerCase() == "setup.exe")
			return assets[i];	
	}
	return null;
}

function RefreshReleaseInfo(user, repo, target) {

    var apiUrl = "https://api.github.com/repos/"+user+"/"+repo+"/releases/latest"

	$.getJSON(apiUrl).done(function (release) {		
		var asset = findSetupAsset(release.assets);
		var releaseInfo = release.name;
		$(target).attr("href", asset.browser_download_url);		
		$(target).text("Download " + releaseInfo);		
	});
}

function RefreshReleaseInfos() {
    RefreshReleaseInfo("ButchersBoy", "doobry", ".setup-download-doobry");
    RefreshReleaseInfo("MaterialDesignInXaml", "F1InXAML", ".setup-download-f1ix");
}

function loadTab (tabId) {

    changeUrl(tabId, tabId);    
    
    if ($("#tab-pending-" + tabId).length == 0)
        return;

    render(
        <div>loading...</div>,
        document.getElementById(tabId)
    )

    $.post("/partials/"+tabId, function(response) {            
            render(
                <Raw id={tabId} content={response} />,
                document.getElementById(tabId)
            )
        })
        .fail(function() {
            render(
                <div>Error retreiving tab content.</div>,
                document.getElementById(tabId)
            )
        })
        .done(function () {
            RefreshReleaseInfos()
            $.getScript("https://buttons.github.io/buttons.js")
        })    
}

$(".mdl-layout__tab").each((i, e) =>
{    
    var tabId=$(e).attr('data-tab-id')
    $(e).click(() => loadTab(tabId))        
})

RefreshReleaseInfos()