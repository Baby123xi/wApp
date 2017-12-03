package com.wapp;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by Administrator on 2017/11/30.
 */

public class CircleManager extends SimpleViewManager<CircleView> {

    public static final String REACT_CLASS = "RCTImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }
    @Override
    public CircleView createViewInstance(ThemedReactContext context) {
        return new CircleView(context, Fresco.newDraweeControllerBuilder(), mCallerContext);
    }
    @ReactProp(name = "src")
    public void setSrc(CircleView view, @Nullable ReadableArray sources) {
        view.setSource(sources);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius() {
        setBorderRadius(,);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(CircleView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(CircleView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
}