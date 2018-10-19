### Q：嵌入SDK后无广告正确显示怎么办？
如果您设置了“广告位”，请确保已经把配置在代码中的“广告位”正确的告知给技术对接人。

<br />

### Q：UpLTV相比单个广告平台（如AdMob, Mobvista, Vungle）等有什么优势？

1. UpLTV通过整合多家的广告资源，提供比单个平台更好的广告填充率和更高的展示价格(eCPM)。通常能够比你当前的变现效果提高20%以上。
2. UpLTV一站式接入多家优质广告平台，减少了合作方逐个注册、对接和沟通的工作量。结算更简单，到账速度更快。
3. 我们专业的技术支持团队和变现顾问团队提供专业的全天候在线支持，重点客户可以上门服务。

<br />

### Q：同样是聚合平台，为什么UpLTV相比其他聚合平台如YoMob, Heyzap, Fyber变现效率高？

1.	UPLTV具备更优秀的加载策略、流量分配和调度逻辑。
2.	以生命周期价值（LTV）为优化目标，兼顾短期和长期变现效果，保持变现和留存的平衡。
3.	更完善的后端AI数据分析系统，提供更大的提升空间。
4.	我们更认为变现并不是简单的SDK对接，而是一种持续的服务。MaaS（Monetization as a Service） 。我们同样重视根据客户的游戏内容提供最佳的广告露出逻辑，这个更依赖于深度的机器学习和人工干预相结合的手段。

<br />

### Q：接入UpLTV聚合SDK需要多久？
基于我们的客户反馈，代码接入工作只需半天工时。
代码接入完成后请提供测试版本给我们，我们会及时协助测试和确认保证接入正确。
当接入过程中碰到问题，我们随时提供7*24个性化支持。

<br />

### Q：为什么接入了AI可以在聚合的基础上进一步提升变现效率？
AI 系统会分析每个用户对广告的耐受程度和转化比例，为独立用户提供完全个性化的广告配置，从而进一步提升变现效率。

<br />

### Q：你们的后台可以看到每一个广告平台给我们带来的收益吗？
后台默认不提供分平台收益数据。如果有需要我们可以个别提供广告平台的相关截图，并且在每月结算时，我们可以准确提供来自各平台的收益合计。

我们所希望的并非只提供一个工具，而是提供一套整体的变现优化服务。我们希望我们的 AI 可以帮助开发者无需关注任何底层的细节，只关注总体收益、广告 ARPU、eCPM和LTV这类数据。

<br />

### Q：可否选择屏蔽竞品广告？
对于支持屏蔽竞品的广告平台，我们可以按开发者要求去做屏蔽。

<br />

### Q：可否只选择某一类广告，如激励视频？
可以。

<br />

### Q：激励视频、插屏、banner的数据可以分别查看吗？
可以。

<br />

### Q：我们的游戏更新了版本是否需要重新接入一次你们的SDK？
不需要。

但我们推荐你及时更新我们的新版本SDK以确保始终拥有最好的变现效率。

<br />

### Q：你们接了Chartboost, 是否可以进行换量？
暂不支持。

我们仅使用 Chartboost 自身的广告资源，当做普通广告平台来使用。

<br />

### Q：SDK的目前有多大？SDK的大小只与聚合的广告平台的多少有关吗？
UPSDK 自身SDK体积小于1M。

最终带来的包体大小增长主要取决于加入了多少家第三方广告平台。通常我们建议选择3~5家第三方广告平台。这样带来的体积增长大约是2~3M。

<br />

### Q：已经接入了单个广告平台如vungle，unityads，而你们的聚合SDK也聚合了他们，会不会有冲突？
通常不会, 如发生冲突，我们会提供个性化解决方案。

需要注意的是：
- 我们不建议将 UPSDK 和其他第三方广告平台再次聚合，一方面这样可能会降低收益（重复广告）。
- 另外，这种场景下部分第三方广告 SDK有可能存在兼容性问题。

我们的建议是在顶层逻辑中直接由 UPSDK 接管调配策略。

如果担心由于我们的SDK不稳定造成收益下降，我们可以在合同中提供相应的赔付保障条款。 

<br />

### Q：你们是如何做到优先展示较高价格的广告Offer的？是否是实时竞价？

1.	UpLTV系统接入了各第三方广告平台数据 API，每小时获取分产品分国家的价格、填充率点击率等信息。
2.	经过综合计算将效率较高的广告平台排在优先位置。

目前移动In-App 广告的行业状况，实时竞价并非主流。我们采用的仍然是基于策略的排序规则。
但值得一提的是，我们还做了这些：
-	广告平台提供的数据我们会根据自己的统计数据进行修正。
-	充分考虑排位本身对价格和 CTR 的影响，通过模型进行修正。
-	增加额外的调度策略，用于抓住部分地区短期优质 offer 的短线机会。
-	基于用户画像的分组模式，使用不同的联盟和广告位组合。

<br />

### Q：你们的SDK中是否会加入你们自己的互动广告平台？
已经加入。

<br />

### Q：广告显示横屏或者竖屏广告能否做设置？
绝大多数广告联盟都支持自动适配资源，开发者不需要关心适配问题。
-	如果由于某个广告平台横竖屏适配不佳，导致其收益较差，会很快被我们的自动算法降权。
-	如果收益（LTV）够好，开发者实际上也无需关心横竖屏是否适配。

<br />

### Q：API的接入是否只需要接入你们的SDK和API就够了，是否还需要接入我们本身的数据平台来供你们采集数据？
不需要。

我们的SDK已经内置了对广告相关事件的收集和上报功能，用来帮助游戏开发者优化收益。游戏开发者除了接入SDK以外，并不需要额外对我们开放数据平台。

但为了支持广告的 A/B Testing 功能，我们可能需要游戏开发者在调用我们的API时传入“是否属于已付费用户”或“是否已经通过新手教程”等信息来帮助我们一起优化。具体信息根据游戏不同有不同的方案。

实际上，根据客户的需要，我们提供三个层次的接入服务：
-	SDK - 整合到游戏并发版，比较初级的对接，适用于小型CP，对于广告变现经验不足或者不是非常重视的客户。
-	API - 需要通过接口传入少量数据（如：是否属于已付费用户），大中型CP,对广告变现有充分的认知。
-	AI - 需要通过接口传入较多游戏内事件（如：过关、失败、复活、新记录等），深度合作客户，对于广告变现的价值充分认知。

以上都是基于 SDK 的，不需要 CP 开放数据平台。

<br />

### Q：eCPM是否可以设置低价？
不支持。

实际上我们会使用 Floor eCPM 限制第三方平台价格来优化总体收益。

但为了提高 LTV 这个总体目标，我们不会提供限制 eCPM 的功能。

<br />

### Q：API接入之后用户标签能够细化到什么程度？
UPLTV 关注的主要有三个维度：
-	付费意愿
-	留存粘度
-	广告活跃

我们的 AI 系统会根据用户在游戏内的事件，对用户基于上述三个维度进行高中低的大致分组。然后再根据分组情况提供个性化的广告展示策略。

<br />

### Q：如何规避打款产生的税的问题？
我们的付款账户是香港公司身份。并且我们会协助大陆开发者完成税费减免申请（类似 Google 和 Facebook）。

<br />

### Q：你们是如何区分付费用户和非付费用户来针对性的投放的？
根据用户行为进行分析，对其潜在付费概率进行预测（基于 AI技术）。

针对付费意愿进行分组。在不影响用户留存的前提下，提高付费意愿低组用户的每日观看广告的次数上限。

<br />

### Q：同时接入两家CP聚合，包体是否会额外增加？
同时接入我们和其他家聚合的时候，我们共同支持的联盟就不需要重新接入，只需针对我们有但是另外一家聚合没有的联盟需要单独接入。通常几乎不会增加包体大小。

<br />

### Q：目前连词类的产品北美地区eCPM大概价格在多少？
-	安卓激励视频 $8左右，插屏$5-6；
-	iOS奖励视频$10，插屏6-8。

不同类型的产品波动较大，以上数据仅供参考。


