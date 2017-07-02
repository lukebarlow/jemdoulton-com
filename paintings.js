function collectionName(d){
    return d.name.replace('_','/')
}

function collectionThumbnailSrc(d){
    return 'collections/' + d.name + '/' + d.children[0].name
}

function seasonNumber(name){
    season = parseInt(name.slice(-4))
    season += name.slice(0,3) == 'A_W' ? 0.5 : 0
    return season
}

function collectionSort(a, b){
    a = seasonNumber(a.name)
    b = seasonNumber(b.name)
    return b - a
}

function showPainting(node){
    node.children.sort(collectionSort);

    collection = d3.select('#collections')
        .selectAll('div.collection')
        .data(node.children)
        .enter()
        .append('div')
        .attr('class','collection')
        .on('click', showSlideshow);

    collection.append('span').append('span').html(collectionName);
    collection.append('img').attr('src', collectionThumbnailSrc);
}