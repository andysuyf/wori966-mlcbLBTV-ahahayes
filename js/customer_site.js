const CUSTOMER_SITES = {
    maotaibihuanaida: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
    },
    dbzybihuanaida: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    wolongbihuanaida: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    modubihuanaida: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    ruyibihuanaida: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    maoyanbihuanaida: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼资源',
    },
    jisubihuanaida: {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    tyyszybihuanaida: {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源",
    },
    zuidbihuanaida: {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源",
    },
    wujinbihuanaida: {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源",
    },
    wwdjbihuanaida: {
      "api": "https://api.wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧",
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
