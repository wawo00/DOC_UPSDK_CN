## Icon广告
TypeScriptPlugin进一步简化了横幅Icon广告的实现，提供有展示，移除以及事件回调等接口。

### 1. Icon广告的回调
Icon广告需要根据广告位来设置banner广告的回调接口，如加载成功、加载失败、展示以及点击等事件回调。回调接口会被插件内部保存，因此不需要多次设置

```javascript
//Icon加载成功回调
static iconAdDidLoad(callback:(cpPlaceId:string)=>void)
//Icon加载失败回调
static iconAdDidLoadFail(callback:(cpPlaceId:string)=>void)
//Icon展示回调
static iconAdDidShow(callback:(cpPlaceId:string)=>void)
//Icon点击回调
static iconAdDidClick(callback:(cpPlaceId:string)=>void)
```

参数说明：

- `cpPlaceId`:用来标识Icon广告的广告位Id，可以自行设置，一个Icon广告对应一个cpPlaceId

### 2. 展示Icon广告
根据广告位，展示Icon广告。

```javascript
//展示Icon广告
static showIconAd(x:number, y:number, width:number, height:number, rotationAngle:number, cpPlaceId:string)
```

参数说明：

- `x`:Icon广告左上角横坐标
- `y`:Icon广告左上角纵坐标
- `width`:Icon广告宽度
- `height`:Icon广告高度
- `rotationAngle`:顺时针旋转角度
- `cpPlaceId`:用来标识Icon广告的广告位Id，可以自行设置，一个Icon广告对应一个cpPlaceId


### 3. 移除Icon广告
根据广告位，移除Icon广告。

```javascript
//移除Icon广告
static removeIconAd(cpPlaceId:string) 
```

参数说明：

- `cpPlaceId`:用来标识Icon广告的广告位Id，可以自行设置，一个Icon广告对应一个cpPlaceId
