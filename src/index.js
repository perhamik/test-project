import './styles.scss';
import picture from './assets/favorite.svg';
import rate from './assets/rate.svg';
import options from './assets/options.svg';

initPage();

function initPage () {
    var body = document.querySelector('body');
    let parent = document.createElement('div');
        parent.className = 'container';
    for(let a=0; a<16; a++){
        parent.appendChild(Offer());
    }
    body.appendChild(parent);
}

function Offer () {
    const relatives = getRelations();    
    let offer = document.createElement('div');
    offer.className = 'offer';
        let mainInfo = document.createElement('div');
        mainInfo.className = 'main-info';
            let picture_photo = document.createElement('img');                
            [picture_photo.className, picture_photo.src, picture_photo.alt] = relatives.picture;
        mainInfo.appendChild(picture_photo);
            let mainInfoGroup = document.createElement('div');
            mainInfoGroup.className = "main-info-group";
                let offer_title = document.createElement('h1');
                offer_title.textContent = relatives.title;
            mainInfoGroup.appendChild(offer_title);
                let share = document.createElement('img');
                [share.className, share.src, share.alt] = relatives.share;
            mainInfoGroup.appendChild(share);            
                let stars = document.createElement('img');
                [stars.className, stars.src, stars.alt] = relatives.rate;
            mainInfoGroup.appendChild(stars);
        mainInfo.appendChild(mainInfoGroup);
    offer.appendChild(mainInfo);
        let details = document.createElement('div');
        details.className = 'details';
            let description = document.createElement('p');
            description.className = 'description';
            description.textContent = relatives.description;
        details.appendChild(description);
        
        const invRet = [relatives.invest, relatives.returned];
        let invRetCont = document.createElement('div');
            invRet.forEach(bl => {
                let investReturn = document.createElement('div');
                    investReturn.className = 'invest';
                    let name = document.createElement('h4');
                    name.textContent = bl.heading;
                    investReturn.appendChild(name);

                    let target = document.createElement('h2');
                    target.textContent = bl.price;
                    investReturn.appendChild(target);

                    let tags = document.createElement('span');
                    bl.tags.forEach(tag => {
                        let tg = document.createElement('button');
                        tg.textContent = tag;
                        tags.appendChild(tg);
                    })
                    investReturn.appendChild(tags);
                invRetCont.appendChild(investReturn);
            details.appendChild(invRetCont);
        })
        let hideText = document.createElement('p');
        hideText.textContent = relatives.description;
        hideText.className = 'hide-text';
        details.appendChild(hideText);
        let moreCont = document.createElement('div'); 
        moreCont.className = 'expand-cont';
            let moreBtn = document.createElement('button');
            moreBtn.className = 'expand-button';
            moreBtn.textContent = relatives.expand;
            moreBtn.onclick = function () {
                expandContent(this);
            };                
        moreCont.appendChild(moreBtn);
        details.appendChild(moreCont);
    offer.appendChild(details);
    return offer;
}

function getRelations () {
    const relations = {
        picture: ['offer-picture', picture, 'Offer picture'],
        rate: ['offer-rating', rate, 'Rate'],
        share: ['offer-share', options, 'Share and Launch'],
        title: 'Investform',
        invest: {
            heading: 'Min investment',
            price: '$1,000',
            tags: ['fee: +1,5%', '60+ month', 'all investors']
        },
        returned: {
            heading: 'Target return',
            price: '8,9%-12%',
            tags: ['value', 'asset sold', 'easy']
        },
        description: 'Invest in paintings by the best selling artists of all time. Masterworks is the first company to allow investors to buy shares in great masterpieces by artists like Banksy, Warhol, and more.',
        expand: 'More details',
        hide: 'Hide details'
    }
    return relations;
}

function expandContent (e) {    
    const relations = getRelations();
    let parent = e.parentNode.parentNode;
    let content = parent.querySelector('.hide-text');
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    e.textContent = e.textContent === relations.expand ? relations.hide : relations.expand;
}