package com.wapp;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MapModule extends ReactContextBaseJavaModule{

    public MapModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MapPackage";
    }


    @ReactMethod
    public void startActivityFromReactNative(String  activityName,String params){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Class aimActivity = Class.forName(activityName);
                Intent intent = new Intent(currentActivity,aimActivity);
                intent.putExtra("params",params);
                currentActivity.startActivity(intent);
            }
        }catch(Exception e){
            Log.e("MapActivity",e.toString());
            throw new JSApplicationIllegalArgumentException(
                    "无法打开activity页面: "+e.getMessage());
        }
    }
}
