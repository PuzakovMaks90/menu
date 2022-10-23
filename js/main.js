const doc = document;
const dataBlock = doc.querySelector('.data-content');

const data = [
    {name: 'home1', link: '#'},
    {name: 'home2', link: '#'},
    {name: 'home3', link: '#'},
];


createMenu (dataBlock, data, function(obj, menuData) {
    return `
        <li class="${obj.name}">
            <h3>${obj.link}</h3>
            <h4>${menuData}</h4>
            </li>`;
});

function createMenu (parent, data, callback) {
    const htmlEls = 
        data
            .map (function(item) {
                return callback (item);
        })
        .join('');
    

    parent.innerHTML = htmlEls;
}
