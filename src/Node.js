define('node',['kit'],function(kit){
	/**
	 * node = {
	 *      name: ''        节点名称
	 *      , type: path|shape|
	 *      , text: String
	 *      , image: String = > url
	 *      , texture: String =>url
	 *      , datum:object
	 *      , parentNode:Node
	 *      , path:[]
	 *      , index:[]              索引：用于表达绘制图形的方式
	 *      , drawType: String      绘制方式=？gl.TRIANGLE/gl.TRIANGLE_STRIP/gl.TRIANGLE_FAN/gl.POINTS
	 *      , style: {
	 *          width:Number
	 *          , height:Number
	 *          , top:Number
	 *          , left:Number
	 *          , color:HEX/RGB/RGBA
	 *          , fill:HEX/RGB/RGBA
	 *          , strokeWidth: Number
	 *          , display: bool
	 *
	 *
	 *          , padding:Number
	 *          , align: direction
	 *          ???, baseline: 'top' or 'bottom'
	 *          ,overflow: 'ellipse'
	 *          , fontFamily: ''
	 *          , fontSize: Number
	 *          , bold
	 *          
	 *
	 *      }
	 *      , animate:{
	 *          from:{
	 *
	 *          }
	 *          , to:{
	 *
	 *          }
	 *          -----from-to:0%->100%
	 *          0%:{
	 *
	 *          }
	 *          , 50%:{
	 *
	 *          }
	 *          , 100%:{
	 *
	 *          }
	 *
	 *          ------该百分比是时间的比例嗯
	 *
	 *          , duration:Number        单位是毫秒
	 *          , timing-function:String        e.g. => linear/ease-in-out/ease-out...
	 *
	 *
	 *
	 *
	 *      }
	 *
	 * }
	 */

})