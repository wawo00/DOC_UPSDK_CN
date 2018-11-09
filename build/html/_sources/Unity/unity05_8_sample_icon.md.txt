## Unity Plugin Icon广告

#### 1.Icon广告展示API

```csharp
// 在屏幕上显示某个广告位的icon广告
public static void showIconAd(double x, double y, double width, double height, double rotationAngle, string cpPlaceId);

```
> 参数：double x, double y,icon 广告的坐标； double width, double height，icon广告的宽高；double rotationAngle，icon广告旋转的角度；cpPlaceId，实际广告位，自定义即可。

#### 示例代码：
通过测试按钮，测试Icon广告显示。

```csharp
// 在当前屏幕（100，100）位置，展现一个命名为test的高度为（100，100）、旋转角度为10的Icon广告
public void onBtnIconAdShow()
{
    UPSDK.showIconAd (100,100,100,100,10,"test");

}
```

> Icon广告不需要判断状态，在合适的时候调用它，SDK会自动加载，并在加载成功后自动填充广告并显示。
注意，虽然Iconr广告是自动填充与显示，但尽可能早地调用它的方法，以便留出足够的时间让SDK完成广告的加载与填充。

#### 2.Icon广告移除API
```csharp
// 根据广告位移除某个Icon广告的资源，重新展示时会再次加载广告资源
public static void removeIconAdAt(string cpPlaceId);
```

#### 示例代码：

```csharp
// 将广告位为‘test’的Icon广告移除
// 如果test对应的广告不存在，则提示移除失败，否则提示成功
public void onBtnIconAdRemove()
{
    UPSDK.removeIconAdAt("test");
}

```
