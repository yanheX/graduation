# graduation
for my last classwork


# 进度控制
  完成度：5%
  
# 完成功能

1、动态添加形状

2、hover状态附加（可获取到鼠标所在位置的图形属性，可以为修改属性做准备）

3、双向绑定controller

---------- controller -----------
|				|				|
|				|				|
|				|				|
threeJS      Object          input

# 预览网站

http://139.129.235.177:8888/

#controller详解

						timeLine
							|
							|
							|
						controller
							|
	------------------------ ------------------------
	|						|						|
	|						|						|
	|						|						|
THREEJS对象				Container				  dom对象

container对象
{
	name: ''
	, type: '' //group||shape||scene
	, 'position/x': 
}
