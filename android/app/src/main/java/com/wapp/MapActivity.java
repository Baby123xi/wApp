package com.wapp;

import android.app.Activity;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.provider.SyncStateContract;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.amap.api.maps.AMap;
import com.amap.api.maps.MapView;
import com.amap.api.maps.model.BitmapDescriptorFactory;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.Marker;
import com.amap.api.maps.model.MarkerOptions;
import com.amap.api.maps.model.MyLocationStyle;
import com.amap.api.maps.model.Polyline;
import com.amap.api.maps.model.PolylineOptions;

import java.util.ArrayList;
import java.util.List;

public class MapActivity extends Activity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        Intent  intent =getIntent();
        MapView mapView = (MapView) findViewById(R.id.map);
        mapView.onCreate(savedInstanceState);// 此方法必须重写
        AMap aMap = mapView.getMap();
        aMap.showIndoorMap(true);
//        MyLocationStyle myLocationStyle;
//        myLocationStyle = new MyLocationStyle();
//        myLocationStyle.myLocationType(MyLocationStyle.LOCATION_TYPE_FOLLOW);//初始化定位蓝点样式类myLocationStyle.myLocationType(MyLocationStyle.LOCATION_TYPE_LOCATION_ROTATE);//连续定位、且将视角移动到地图中心点，定位点依照设备方向旋转，并且会跟随设备移动。（1秒1次定位）如果不设置myLocationType，默认也会执行此种模式。
//        myLocationStyle.interval(2000); //设置连续定位模式下的定位间隔，只在连续定位模式下生效，单次定位模式下不会生效。单位为毫秒。
//        myLocationStyle.showMyLocation(true);
//        aMap.setMyLocationStyle(myLocationStyle);//设置定位蓝点的Style
//
////aMap.getUiSettings().setMyLocationButtonEnabled(true);设置默认定位按钮是否显示，非必需设置。
//        aMap.setMyLocationEnabled(true);//
//        aMap.setOnMyLocationChangeListener(new AMap.OnMyLocationChangeListener() {
//          public void onMyLocationChange(android.location.Location location){
//                //从location对象中获取经纬度信息，地址描述信息，建议拿到位置之后调用逆地理编码接口获取（获取地址描述数据章节有介绍）
//                Log.i("MapActivity","location"+location.toString());
//            }
//        });
        List<LatLng> latLngs = new ArrayList<LatLng>();
        latLngs.add(new LatLng(30.287404,120.139257));
        latLngs.add(new LatLng(30.387804,120.239257));
        latLngs.add(new LatLng(30.487904,120.339257));
        latLngs.add(new LatLng(30.588104,120.439257));
        aMap.addPolyline((new PolylineOptions())
                .addAll(latLngs)
                .width(10)
                .color(Color.argb(255, 0, 0, 0)));
        //locationlatitude=30.287404#longitude=120.139257
        MarkerOptions markerOption = new MarkerOptions();
        markerOption.position(new LatLng(30.287404,120.139257));
        markerOption.title("电子科技大学").snippet("电子科技大学：30.287404, 120.139257");

        markerOption.draggable(true);//设置Marker可拖动
      markerOption
              .icon( BitmapDescriptorFactory.fromBitmap(BitmapFactory.decodeResource(getResources(),R.drawable.purple_pin_3)));


//        BitmapDescriptorFactory.fromBitmap(BitmapFactory
//                .decodeResource(getResources(),R.drawable.purple_pin))

        // 将Marker设置为贴地显示，可以双指下拉地图查看效果
        markerOption.setFlat(true);//设置marker平贴地图效果
        aMap.addMarker(markerOption);

        if(intent!=null){
            String params=intent.getStringExtra("params");
            if(params!=null){
                Toast.makeText(this,"从React native  传来的数据"+params,Toast.LENGTH_LONG).show();
            }
        }
    }


}
