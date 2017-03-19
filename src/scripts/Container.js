'use strict' 

function Container(o){
    this.name = '';
    this.type = '';
    this.childs = [];
    this.parent = null;
    this.position = [0,0,0];
    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.init(o);
    return this;
}

Container.prototype.init = function(o){
	var self = this;
	self.name = o.name||'';
	self.type = o.type||'';
	self.childs = o.childs || [];
	self.parent = o.parent || null;
	self.position = o.position || [0,0,0];
	var geo = self.initGeomertry(o);
	var mat = self.initMaterial(o);
	self.initMesh(geo, mat);
	self.material = o.material || null;
};

Container.prototype.initGeomertry = function(o){
	if(!o.geometry){
		return ;
	}
	var geometry = o.geometry
	, type = geometry.type || ''
	, option = geometry.option || []
	;

	self.geometry = geometry;

	var geo = generateShape(type,option)

	self.geometry.instance = geo;

	return geo;
};

Container.prototype.initMaterial = function(o){
	if(!o.material){
		return ;
	}

	var material = o.material
	, type = material.type
	, option = material.option || {}
	;

	self.material = material;

	var mat = generateMaterial(type, option);

	self.material.instance = mat;

	return mat;
};

Container.prototype.initMesh = function(geo, mat){
	if(!(self.material&&self.geometry&&geo&&mat)){
		return ;
	}
	var mesh = generateMesh(geo, mat);

	self.instance = mesh;

	return mesh;
};

Container.prototype.setAttribute = () =>{

};

Container.prototype.appendChild = (obj) => {

};





Container.prototype.toJSON = function(obj){

};

Container.prototype.toOBJ = function(json){

}