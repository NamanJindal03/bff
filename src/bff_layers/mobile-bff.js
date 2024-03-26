import { getHomePageData } from '../api/homePage';

export const homePageData = function(){
    return new Promise((resolve)=>{
        setTimeout(async ()=>{
            const data = await getHomePageData();
            delete data.hero['heroImageBig'];
            data.hero['heroImage'] = data.hero.heroImageSmall
            delete data.hero['heroImageSmall'];
            delete data.hero['para'];
            console.log(data)
            resolve(data)
        },300)
    })
}