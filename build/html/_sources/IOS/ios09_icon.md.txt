## 动态Icon广告
### 动态Icon广告接入

有关Icon广告的接口方法与协议都定义在UPIconWrapper.h文件中。

在XCode工程中引用UPIconWrapper.h头文件方式：

```objective-c
#import   <UPSDK/UPSDK.h>
```

`UPIconWrapper.h`仅有的几个方法解释如下：

```objective-c
@interface UPIconWrapper : NSObject

@property (nonatomic,weak) id<UPIconDelegate> delegate;
@property (nonatomic,copy) NSString *placementId;

- (instancetype)initWithFrame:(CGRect)frame rotationAngle:(int)rotationAngle;

//加载广告
- (void)loadAd;
//在传入的视图上展示广告
- (BOOL)showAd:(UIView *)superView;
//移除广告
- (BOOL)removeAd;

@end
```
	

Icon的回调协议*UPIconDelegate*也声明在*UPIconWrapper.h*中。

```objective-c
@protocol UPIconDelegate <NSObject>
@optional
//Icon广告加载完成
- (void)iconAdDidLoad:(id)iconWrapper;

//Icon广告加载失败
- (void)iconAd:(id)iconWrapper didLoadFail:(NSError *)error;

//Icon广告点击
- (void)iconAdDidClick:(id)iconWrapper;

//Icon广告展示完成
- (void)iconAdDidShow:(id)iconWrapper;

@end
```

<br>

### 示例代码

定义一个*STIconViewController*类，用于测试Icon的显示。
> 我们仅以XCode工程作为示例，其它IDE工程，请参考修改！
    
    @interface STIconViewController : UIViewController
    
    @end

> STIconViewController 添加一个按钮，点击它时实现Icon显示，因此功能简单。

在STIconViewController.m文件中，添加如下代码

```objective-c

#import   <UPSDK/UPSDK.h>

@interface STIconViewController () <UPIconDelegate>

@end
```

> STIconViewController将实现UPIconDelegate协议，用于监听Icon相关事件的发生。

接下来，继续添加以下代码：

```objective-c
@interface IconViewController () <UPIconDelegate> {
    UPIconWrapper *_iconAd;
}
@end

@implementation IconViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor grayColor];
    
    UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.backgroundColor = [UIColor orangeColor];
    button.frame = CGRectMake(self.view.frame.size.width/2 - 250/2, 100, 250, 40);
    [button setTitle:@"展示Icon广告" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(iconShowClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
    
    UIButton *button1 = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button1.backgroundColor = [UIColor orangeColor];
    button1.frame = CGRectMake(self.view.frame.size.width/2 - 250/2, 170, 250, 40);
    [button1 setTitle:@"移除Icon广告" forState:UIControlStateNormal];
    [button1 addTarget:self action:@selector(iconRemoveClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button1];
}

- (void)iconShowClick {
    _iconAd = [[UPIconWrapper alloc] initWithFrame:CGRectMake(100, 100, 150, 150) rotationAngle:10];
    _iconAd.delegate = self;
    [_iconAd loadAd];
}

- (void)iconRemoveClick {
    [_iconAd removeAd];
}

#pragma mark - UPIconDelegate

//Icon广告加载完成
- (void)iconAdDidLoad:(id)iconWrapper {
    NSLog(@"iconAdDidLoad");
    [_iconAd showAd:self.view];
}

//Icon广告加载失败
- (void)iconAd:(id)iconWrapper didLoadFail:(NSError *)error {
    NSLog(@"iconAdDidLoadFail");
}

//Icon广告点击
- (void)iconAdDidClick:(id)iconWrapper {
    NSLog(@"iconAdDidClick");
}

//Icon广告展示完成
- (void)iconAdDidShow:(id)iconWrapper {
    NSLog(@"iconAdDidShow");
}

@end
```

运行后点击“展示Icon广告”的按钮，就会显示广告。点击“移除Icon广告”的按钮，就会移除广告
> Icon显示后，可以通过观察以上的打印，测试相关的事件行为是否正确发生。
