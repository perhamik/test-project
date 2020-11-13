import './styles.scss';
import picture from './assets/favorite.svg';
import rate from './assets/rate.svg';
import options from './assets/options.svg';

initPage();

function initPage () {
    var body = document.querySelector('body');
    body.appendChild(Offer());
}

function Offer () {
    const relatives = getRelations();
    let parent = document.createElement('div');
        parent.className = 'container';
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
            let description = document.createElement('p');
            description.textContent = relatives.description;
        offer.appendChild(description);
            let invRet = [relatives.invest, relatives.returned];
            for(let bl in invRet){
                let investReturn = document.createElement('div');
                    let name = document.createElement('h4');
                    name.textContent = bl.heading;
                    investReturn.appendChild(name);

                    let target = document.createElement('h2');
                    target.textContent = bl.price;
                    investReturn.appendChild(target);

                    let tags = document.createElement('span');
                    for(let tag in bl.tags){
                        let tg = document.createElement('button');
                        tg.textContent = tag;
                        tags.appendChild(tg);
                    }
                    investReturn.appendChild(tags);
                offer.appendChild(investReturn);
            }
        
    parent.appendChild(offer);
    return parent;
}

function getRelations () {
    let relations = {
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
        expand: 'More details'
    }
    return relations;
}