import { getHomePageData } from '../api/homePage';

export const homePageData = function(){
    return new Promise((resolve)=>{
        setTimeout(async ()=>{
            const data = await getHomePageData();
            delete data.hero['heroImageSmall'];
            data.hero['heroImage'] = data.hero.heroImageBig
            delete data.hero['heroImageBig'];
            console.log(data)
            resolve(data)
        },300)
    })
}