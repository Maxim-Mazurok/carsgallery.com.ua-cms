(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49db77a1"],{"1f5a":function(e,t,n){"use strict";var i=n("33e8"),l=n.n(i);l.a},"33e8":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},e3d9:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-checkbox-relational"},e._l(e.items,function(t){return n("v-checkbox",{key:"checkbox_relational_"+t.id,style:{flexBasis:100/(e.options.grid||1)+"%"},attrs:{id:e.uid(t),value:t[e.relatedPk],disabled:e.readonly,label:e.labelRendered(t),checked:e.selection.includes(t[e.relatedPk])},on:{change:function(n){return e.onSelection(t.id)}}})}),1)},l=[],a=(n("ac6a"),n("bd86")),o=(n("6762"),n("2fdb"),n("7514"),n("8db2")),u=n.n(o),c={name:"interface-checkboxes-relational",mixins:[u.a],data:function(){return{items:[],selection:[],unchecked:{}}},computed:{relatedPk:function(){var e=this.relation.junction.collection_one.fields;return this.$lodash.find(e,{primary_key:!0}).field},junctionFieldOfRelated:function(){return this.relation.junction.field_many.field},junctionPk:function(){return this.$lodash.find(this.relation.collection_many.fields,{primary_key:!0}).field}},created:function(){var e=this;this.getItems(),this.newItem||(this.selection=this.value.map(function(t){return t[e.junctionFieldOfRelated][e.relatedPk]}))},methods:{uid:function(e){return this.$helpers.shortid.generate()+"_"+e.id},getItems:function(){var e=this,t=this.relation.junction.collection_one.collection;this.$api.getItems(t,{}).then(function(t){e.items=t.data})},labelRendered:function(e){return this.options.template?this.$helpers.micromustache.render(this.options.template,e):this.item[this.relatedPk]},onSelection:function(e){var t=this,n=this.items.filter(function(n){return n[t.relatedPk]==e})[0];if(this.selection.includes(e)){var i=this.selection.indexOf(e);this.selection.splice(i,1),this.removeItem(e)}else this.selection.push(e),this.addItem(e,n)},prepareItem:function(e){return Object(a["a"])({},this.junctionFieldOfRelated,e)},addItem:function(e,t){var n=this,i=[],l=!1;this.value&&this.value.forEach(function(t){if(t.$delete){var a=n.unchecked[t[n.junctionPk]],o=a[n.junctionFieldOfRelated][n.relatedPk];o==e?(l=!0,i.push(a),delete n.unchecked[t[n.junctionPk]]):i.push(t)}else i.push(t)}),l||i.push(this.prepareItem(t)),this.$emit("input",i)},removeItem:function(e){var t=this,n=[];this.value.forEach(function(i){var l;i.$delete||i[t.junctionFieldOfRelated][t.relatedPk]!=e?n.push(i):i[t.junctionPk]&&(t.unchecked[i[t.junctionPk]]=i,n.push((l={},Object(a["a"])(l,t.junctionPk,i[t.junctionPk]),Object(a["a"])(l,"$delete",!0),l)))}),this.$emit("input",n)}}},r=c,s=(n("1f5a"),n("2877")),d=Object(s["a"])(r,i,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-49db77a1.54908a1b.js.map