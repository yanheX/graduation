# graduation
for my last classwork


# 进度控制
  完成度：40%
  
# 完成功能

1、动态添加形状

2、hover状态附加（可获取到鼠标所在位置的图形属性，可以为修改属性做准备）

3、状态节点Node(Node.js)

4、绘图类draw(draw.js)

5、属性相关dom类 (toolBar.js)

6、状态节点转换为6所需要数据的类(nodeBindDom.js) -> 完成度 80%（双向事件绑定实现有误，正在调整）

	节点添加过程：
	Node ----> Node(ThreeJS) ----> draw
	产生可修改选中物体属性的输入框：
	Node(ThreeJS) -----> Node2Dom(initEvent) ----> toolBar(addEvent) ---->将toolBar实例化的对象添加到页面中
	动画产生过程（未开始）：
	Node(ThreeJS) && TimeLine(record Node's state , nextStep)

7、完成了从json数据到node节点再到dom节点属性的联通

# 预览网站

http://139.129.235.177:8888/


