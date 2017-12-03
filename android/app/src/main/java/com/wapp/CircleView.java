package com.wapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.Log;
import android.view.View;

import com.amap.api.maps.AMap;
import com.amap.api.maps.MapView;

/**
 * 圆形组件组件基础类
 */
public class CircleView extends MapView {


    public CircleView(Context context) {
        super(context);
        MapView mapView = (MapView) findViewById(R.id.map);
      // 此方法须覆写，虚拟机需要在很多情况下保存地图绘制的当前状态。
//初始化地图控制器对象
        AMap aMap = null;
        if (aMap == null) {
            aMap = mapView.getMap();
            aMap.showIndoorMap(true);
        }
    }
}