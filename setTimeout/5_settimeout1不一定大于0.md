如上代码, 执行 fn 函数打印顺序是什么呢？凭直觉第一个函数1毫秒后执行，第二个函数0毫秒后执行，那么就是先打印 on 后打印 go。但是结果并非如此。


https://juejin.cn/post/6846687590616137742
```
static const int maxIntervalForUserGestureForwarding = 1000; // One second matches Gecko.
static const int maxTimerNestingLevel = 5;
static const double oneMillisecond = 0.001;
// Chromium uses a minimum timer interval of 4ms. We'd like to go
// lower; however, there are poorly coded websites out there which do
// create CPU-spinning loops.  Using 4ms prevents the CPU from
// spinning too busily and provides a balance between CPU spinning and
// the smallest possible interval timer.
static const double minimumInterval = 0.004;
```

```
double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond);
if (intervalMilliseconds < minimumInterval && m_nestingLevel >= maxTimerNestingLevel)
    intervalMilliseconds = minimumInterval;
```

代码逻辑很清晰，设置了三个常量：

maxTimerNestingLevel = 5。也就是 HTML standard 当中提到的嵌套层级
minimumInterval = 0.004。也就是 HTML standard 当中说的最小延迟。

在第二段代码中我们会看到，首先会在 延迟时间 和 1ms 之间取一个最大值。换句话说，在不满足嵌套层级的情况下，最小延迟时间设置为 1ms。这也解释了为什么在 chrome 中测试 setTimeout 是上面的结果。

作者：Tong
链接：https://juejin.cn/post/6846687590616137742
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。