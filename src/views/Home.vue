<template>
  <div class="home">
    <h2>debouce事件DEMO1</h2>
    <button v-debounce="changeText">
      debounce - 点击
    </button>
    <p></p>
    <h1>
      <span v-show="isShow">哈哈~ ^_^</span
      ><span v-show="!isShow">呜呜~ 〒_〒</span>
    </h1>
    <h2>长按DEMO1</h2>
    <div>
      <div class="span" v-long-press="longFn">
        <span v-show="isShow">长按哭一个</span>
        <span v-show="!isShow">长按笑一个</span>
      </div>
    </div>
    <h2>长按DEMO2（列表中使用长按事件）</h2>
    <ul>
      <li v-for="li in lis" :key="li" v-long-press="() => liFn(li)">
        {{ li }}
      </li>
    </ul>
    <h5>css样式：hover&ative</h5>
    <p>
      <span class="btn">我是按钮</span>
    </p>
    <fieldset>
      <legend>
        请打开控制台，查看原生滚动事件自增count与节流之后自增count值的差别
      </legend>
      <div style="text-align:left;">自定义指令：v-throttle</div>
      <div
        class="box"
        v-throttle="changeNum"
        v-watermark="{
          text: message,
          font: '48px',
          color: 'rgba(0, 250, 154, .2)',
          width: 150,
          height: 150,
          rotate: 30
        }"
      >
        <span>count: {{ num }}</span>
      </div>
    </fieldset>
    <HelloWorld :msg="msg" />
    <h3>是否进入视图区域1.</h3>
    <div class="content">
      <img v-for="(img, ind) in imgs" :key="ind" :src="img" alt="" />
    </div>
    <hr />
    <h3>是否进入视图区域2.</h3>
    <div class="content2">
      <img v-for="(img, ind) in imgs2" :key="ind" :src="img" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = "传递给子组件的信息";

  isShow = false;

  num = 0;

  message = "©Cid";

  // 定时器
  timer = 0;

  lis = ["长按打印1", "长按打印2", "长按打印3"];

  imgs = [
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
  ];

  imgs2 = [
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
  ];

  changeNum = () => {
    ++this.num;
  };

  liFn(li: number) {
    console.log(li);
  }

  longFn = () => {
    this.isShow = !this.isShow;
  };

  // 监测对象
  interOb = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        setTimeout(() => {
          entry.target["classList"].add("in-view");
          entry.target["classList"].remove("out-view");
        }, 100);
      } else {
        setTimeout(() => {
          entry.target["classList"].remove("in-view");
          entry.target["classList"].add("out-view");
        }, 100);
      }
    });
  });

  imgDoms = [];

  imgDoms2 = [];

  // 监测视图是否进入可视区域1
  isScrollIntoView = () => {
    this.imgDoms.forEach(img => {
      this.interOb.observe(img);
    });
  };
  // 视图是否进入可视区域2
  isScrollIntoView2(el: Element): Boolean {
    let imgRec = el.getBoundingClientRect();
    let offsetY = window.pageYOffset;
    let innerHeight = window.innerHeight;
    let offsetHeight = el["offsetHeight"];

    let recTop = imgRec.top;

    let recBottom = recTop + offsetHeight;

    /**
     * 已显示的向上滚动超过当前dom的4/5缩小
     * 未显示的向上滚动超过当前dom的1/5放大
     * 已显示的向下滚动超过当前dom的4/5缩小
     * 未显示的向下滚动超过当前dom的1/5放大
     */

    if (
      recBottom < offsetY &&
      recTop > -((offsetHeight / 5) * 4) &&
      recTop < innerHeight - offsetHeight / 5
    ) {
      return true;
    } else {
      return false;
    }
  }
  // 监测
  detect() {
    this.imgDoms2.forEach((imgDom: Element) => {
      if (this.isScrollIntoView2(imgDom)) {
        imgDom.className = "in-view";
      } else {
        imgDom.className = "out-view";
      }
    });
  }

  // 节流函数
  throttle = (cb: Function, delay: number) => {
    let pre = 0;
    return () => {
      let now = +Date.now();
      if (now - pre < delay) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          cb();
          pre = now;
        }, delay);
      } else {
        cb();
        pre = now;
      }
    };
  };

  mounted() {
    console.log("---lifeCircle---mounted---");
    this.imgDoms = Array.from(document.querySelectorAll(".content img"));
    this.imgDoms2 = Array.from(document.querySelectorAll(".content2 img"));
    // 监听滚动事件1
    window.addEventListener(
      "scroll",
      this.throttle(this.isScrollIntoView, 100)
    );

    // 默认先执行一次
    this.detect();
    // 监听滚动事件2
    window.addEventListener("scroll", this.throttle(this.detect, 100));
  }

  changeText() {
    let mathNumber = (~~(Math.random() * 99 + 1)).toString();
    this.msg = `${this.msg}_${mathNumber}`;
  }
}
</script>

<style lang="scss">
.home {
  font-size: 12px;
  .span {
    display: inline-block;
    padding: 10px 30px;
    border: 1px dotted hotpink;
  }
  li {
    margin: 20px 0;
  }
}
.btn {
  padding: 7px 10px;
  background: chartreuse;
  border-radius: 3px;
  color: #333;
  &:hover {
    background: coral;
  }
  &:active {
    background: cyan;
  }
}
.content {
  width: 80%;
  margin: 20px auto 200px;
  img {
    width: 100%;
    height: 100%;
    transform: scale(0.8);
  }
  .in-view {
    transform: scale(1);
    transform-origin: center;
    transition: transform 0.4s ease-in;
  }
  .out-view {
    transform: scale(0.8);
    transform-origin: center;
    transition: transform 0.4s ease-out;
  }
}
.content2 {
  width: 80%;
  margin: 20px auto 1200px;
  img {
    width: 100%;
    height: 100%;
    transform: scale(0.8);
  }
  .in-view {
    transform: scale(1);
    transform-origin: center;
    transition: transform 0.4s ease-in;
  }
  .out-view {
    transform: scale(0.8);
    transform-origin: center;
    transition: transform 0.4s ease-out;
  }
}
.box {
  margin: 0 auto;
  height: 400px;
  border: 2px dotted hotpink;
  text-align: center;
  line-height: 400px;
  font-size: 30px;
}
</style>
