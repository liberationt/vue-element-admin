<template>
    <div>
      	<ul class="chooser-list">
			<li :style="cssStyle"
			v-for="(item, index) in options" :key="index"
			@click="optionsClick(item)"
			:class="{active: checkActive(item)}"
			>{{ item }}</li>
		</ul>    
    </div>
</template>
<script>
export default {
	model: {
		prop: 'currArr',
		event: 'input'
	},
	props: {
		currArr:Array,
		options: Array, //传入的数组
		isMultiply: { //是否是多选。默认为false：单选；true：多选
			type: Boolean,
			default: false
		},
		cssStyle: Object //可以自定义单选或者多选的样式
	},
    data () {
		return {
			currValArr: []
		}
	},
	methods:{
		optionsClick(item){
			if (this.isMultiply === false) { //单选
				this.$set(this.currValArr, 0, item) // 将该值设为当前数组的第一项
			} else { //多选
				if (this.currValArr.indexOf(item) === -1) {
					// 当前数组中没有该值则push到数组
					this.currValArr.push(item)
				} else {
					//当前数组中有该值，找到该值下标并删除
					this.currValArr.splice(this.currValArr.indexOf(item), 1)
				}
			}
			this.$emit('toparents',this.currValArr)
		},
		checkActive(item){
			if (this.isMultiply === false) {
				this.currValArr.length = 1
			}
			return this.currValArr.indexOf(item) !== -1
		}
    },
    mounted(){
        console.log(this.options,1111)
    }
}
</script>
<style lang="scss" scoped>
ul, li {
  margin: 0;
  padding:0;
  list-style: none;
}
.chooser {
  position: relative;
	display: inline-block;
}
 
.chooser-list li{
    padding:0 40px;
	margin-right: 22px;
	height: 30px;
	margin-bottom: 10px;
	font-size:13px;
    line-height: 30px;
    border-radius: 30px;
    display: inline-block;
    color: #333333;
    text-align: center;
    background: #fff;
    cursor: pointer;
}
.chooser-list li.active {
  color: #ffffff;
  background: #3f7ef4;
}
</style>