
## Android 6.0 动态权限申请

**仅用于 android 国内版本，如果您使用的android 海外版本，请忽略此文档**

Google在 Android 6.0 开始引入了权限申请机制，将所有权限分成了正常权限和危险权限。广告的相关功能需要动态的申请并得到用户的授权才能使用。

### 推荐用例

示例代码：

```csharp
public class MainActivity extends Activity {
  

    @Override
    protected void onCreate(Bundle savedInstanceState) {
       //申请动态权限
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

        if (ContextCompat.checkSelfPermission(MainActivity.this, WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED
                || ContextCompat.checkSelfPermission(MainActivity.this, REQUEST_INSTALL_PACKAGES) != PackageManager.PERMISSION_GRANTED
                || ContextCompat.checkSelfPermission(MainActivity.this, READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(MainActivity.this, new String[]{WRITE_EXTERNAL_STORAGE, REQUEST_INSTALL_PACKAGES, READ_PHONE_STATE}, 001);
        }

        }

        //初始化SDK
        UPAdsSdk.init(MainActivity.this, UPAdsSdk.UPAdsGlobalZone.UPAdsGlobalZoneDomestic);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }


}

```

