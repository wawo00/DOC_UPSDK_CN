## SDK初始化

请在主Activity中尽早初始化广告SDK，并根据您游戏的发行区域分别传入对应的`UPAdsGlobalZone`参数。

```java
    UPAdsSdk.init(final Context context, final UPAdsGlobalZone zone);

    public enum UPAdsGlobalZone {
        UPAdsGlobalZoneForeign,     //海外
        UPAdsGlobalZoneDomestic,    //中国大陆
        UPAdsGlobalZoneAuto,        //自动根据ip判断
    }
```

### setCustomerId()

对于国内发行的产品，由于无法正常收集`GAID`，导致用户新增计算错误，从3003的版本开始增加`UPAdsSdk.setCustomerId(String customerId)`方法，customerId参数取**AndroidId**的值。
请在UPAdsSdk.init()之前调用此方法。

```java
public static void setCustomerId(String customerId)
```
获得 **AndroidId** 请参考下面示例代码:

```java
public static String GetAndroid(Context context){
    final String androidId;
    androidId = android.provider.Settings.Secure.getString(context.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
    return androidId;
 }
```

### 动态权限申请

对于国内发行的产品，请不要忘记申请需要的权限以免影响广告在android 6.0版本设备上的展示，详细实现方式可参考[动态权限申请](http://docs.upltv.com/zh/master/Android/android09_permission.html)。

###  UPSDK前后台控制
对于Android平台，我们强烈要求在当前游戏的前台后切换时，调用UPSDK以下两个接口，以便UPSDK内部做出正确的响应，避免不必要的出错。

#### 游戏恢复到前台时调用API
```java
UPAdsSdk.onApplicationResume();
```
#### 游戏恢复到后台时调用API
```java
UPAdsSdk.onApplicationPause();
```

示例代码：

通常Cocos2d-X引擎生成的游戏Activity，继承于org.cocos2dx.lib.Cocos2dxActivity的子类。在Demo工程中，此类是AppActivity。

```java
    @Override
    protected void onResume() {
        super.onResume();
        UPAdsSdk.onApplicationResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        UPAdsSdk.onApplicationPause();
    }
```

### 开启 debug
为方便您的接入调试，您可以在开发期间通过以下方法开启调试log，并且需要在正式发布时将其关闭

    UPAdsSdk.setDebuggable(true);
