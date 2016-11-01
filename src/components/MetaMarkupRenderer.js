const render = function(tabData)
{
    let s = ""
    for (let m = 0; m < tabData.metas.length; m++)
    {
        s+="<meta"
        for (let a = 0; a < tabData.metas[m].attribs.length; a++) {
            var attribute = tabData.metas[m].attribs[a];
            s+=(" "+attribute.name+"='"+attribute.value+"'")
        }

        s+=" data-dyn-meta>"
    }    
    return s
}

module.exports = render