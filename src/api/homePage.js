export async function getHomePageData() {
    console.log('getting insdie')
    const componentMapping = ['nav', 'hero']
    let componentIndex = 0;
    let finalComponentData = {};
    try{
        const data = await Promise.all([getNavComponentInfo(), getHeroComponentInfo()])
        data.map((componentInfo)=>{
            finalComponentData[componentMapping[componentIndex]] = componentInfo;
            componentIndex++;
        })
        return finalComponentData;
    }
    catch(err){
        throw new Error(err)
    }
    
    
}

function getNavComponentInfo(){
    const delay = (0.5 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            fetch('/data/nav.json')
                .then(res => {  
                    resolve(res.json())
                })
                .catch((err)=>{
                    console.log(err)
                })
        }, delay);
    });
}

function getHeroComponentInfo(){
    const delay = (0.5 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            fetch('/data/hero.json')
                .then(res => {
                    resolve(res.json())
                })
                .catch((err)=>{
                    console.log(err)
                })
        }, delay);
    });
}