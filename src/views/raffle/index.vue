<template>
  <div style="background: #ea392e">
    <!-- 内容 -->
    <div class="content">
      <!-- 倒计时 -->
      <div class="content_1">
        <span>还有</span>
        <div class="content_1_1">{{ time[0] }}</div>
        <span>天</span>
        <div class="content_1_1">{{ time[1] }}</div>
        <span>小时</span>
        <div class="content_1_1">{{ time[2] }}</div>
        <span>分</span>
        <div class="content_1_1">{{ time[3] }}</div>
        <span>秒结束</span>
      </div>
      <!-- 转盘 -->
      <div class="content_2" id="plate">
        <!-- 灯类型1 -->
        <img
          src="../../assets/raffle/deng-1.png"
          class="content_2_1"
          v-if="light"
        />
        <!-- 灯类型2 -->
        <img
          src="../../assets/raffle/deng-2.png"
          class="content_2_1"
          v-if="!light"
        />
        <!-- 指针 -->
        <img
          src="../../assets/raffle/xuanz.png"
          class="content_2_2"
          @click="lottery"
          id="pointer"
        />
      </div>
      <!-- 抽奖按钮 -->
      <img
        src="../../assets/raffle/lijichoujiang.png"
        class="content_3"
        @click="lottery"
      />
      <!-- 剩余次数 -->
      <div class="content_4">剩余次数：{{ lotteryInfo.num }}次</div>
      <!-- 中奖记录 -->
      <div class="content_5">- 中奖记录 -</div>
      <!-- 有限期 -->
      <div class="content_6">(奖品有限期31天)</div>
      <!-- 奖品列表 -->
      <div class="content_7">
        <!-- 单个数据 -->
        <div
          class="content_7_1"
          v-for="(item, index) in lotteryInfo.list"
          :key="index"
        >
          <!-- 道具图标 -->
          <img
            src="http://39.106.208.234/pic/icon/bianse.png"
            class="content_7_1_1"
            v-if="item.name == '单次标题变色卡'"
          />
          <img
            src="http://39.106.208.234/pic/icon/chakank.png"
            class="content_7_1_1"
            v-if="item.name == '单次查看联系方式卡'"
          />
          <!-- 红包图标 -->
          <img
            src="../../assets/raffle/88.png"
            class="content_7_1_2"
            v-if="item.name == '88元会员红包'"
          />
          <img
            src="../../assets/raffle/288.png"
            class="content_7_1_2"
            v-if="item.name == '288元会员红包'"
          />
          <img
            src="../../assets/raffle/588.png"
            class="content_7_1_2"
            v-if="item.name == '588元会员红包'"
          />
          <img
            src="../../assets/raffle/1888.png"
            class="content_7_1_2"
            v-if="item.name == '1888元会员红包'"
          />
          <!-- 标题 -->
          <div class="content_7_1_3">{{ item.name }}*1</div>
          <!-- 介绍 -->
          <div class="content_7_1_4">({{ item.content }})</div>
          <!-- 到期时间 -->
          <div class="content_7_1_5">有效期至{{ item.endtime }}</div>
          <!-- 按钮 -->
          <div class="content_7_1_6" @click="goUse">去使用</div>
          <!-- 总数 -->
          <div class="content_7_1_7">x{{ item.num }}</div>
        </div>
      </div>
      <!-- 活动规则 -->
      <div class="content_8">- 活动规则 -</div>
      <!-- 活动规则列表 -->
      <div class="content_9">
        <!-- 标题 -->
        <div class="content_9_1">1.活动时间：2022年12月25日-2023年1月7日</div>
        <!-- 标题 -->
        <div class="content_9_1">2.奖项设置：</div>
        <!-- 内容 -->
        <div class="content_9_2">单次查看联系方式卡（仅限使用一次）</div>
        <!-- 内容 -->
        <div class="content_9_2">单次标题变色卡（仅限使用一次）</div>
        <!-- 内容 -->
        <div class="content_9_2">88元会员红包（仅限普通会员使用）</div>
        <!-- 内容 -->
        <div class="content_9_2">288元会员红包（仅限超级会员使用）</div>
        <!-- 内容 -->
        <div class="content_9_2">588元会员红包（仅限企业会员使用）</div>
        <!-- 内容 -->
        <div class="content_9_2">1888元会员红包（仅限黑卡会员使用）</div>
        <!-- 标题 -->
        <div class="content_9_1">2.奖品发放&时效：</div>
        <!-- 内容 -->
        <div class="content_9_2">
          会员红包及道具卡实时发放，红包使用时间为2022年 12月25日至2023年1月7日;
        </div>
      </div>
      <!-- 解释权 -->
      <div class="content_10">本活动最终解释权归火客所有</div>
    </div>
    <!-- 中奖遮罩 -->
    <van-overlay :show="reward.show">
      <!-- 中将盒子 -->
      <div class="reward">
        <!-- 标题 -->
        <div class="reward_1">{{ reward.name }}</div>
        <!-- 图标 -->
        <img :src="reward.src" class="reward_2" />
        <!-- 信息 -->
        <div class="reward_3">{{ reward.content }}</div>
        <!-- 按钮 -->
        <div class="reward_4" @click="initPlate">开心收下</div>
      </div>
    </van-overlay>
    <!-- 活动遮罩 -->
    <van-overlay :show="rainMask">
      <!-- 头部图片 -->
      <img
        src="../../assets/raffle/bg-shang.png"
        class="activity_1"
        v-if="rainTime != 0"
      />
      <!-- 底部图片 -->
      <img
        src="../../assets/raffle/bg-xia.png"
        class="activity_2"
        v-if="rainTime != 0"
      />
      <!-- 流星 -->
      <img
        src="../../assets/raffle/lx.png"
        class="activity_3"
        v-if="rainTime != 0"
      />
      <!-- 标题 -->
      <img
        src="../../assets/raffle/hbylydjs.png"
        class="activity_4"
        v-if="rainTime != 0"
      />
      <!-- 倒计时 -->
      <img
        src="../../assets/raffle/n3.png"
        class="activity_5"
        v-show="rainTime == 3"
      />
      <img
        src="../../assets/raffle/n2.png"
        class="activity_5"
        v-show="rainTime == 2"
      />
      <img
        src="../../assets/raffle/n1.png"
        class="activity_5"
        v-show="rainTime == 1"
      />
      <!-- 剩余时间 -->
      <div class="activity_6" v-if="rainTime == 0">剩余时间</div>
      <!-- 时间 -->
      <div class="activity_7" v-if="rainTime == 0">
        <span style="font-size: 2.24rem">{{ rainDuration }}</span>
        <span style="font-size: 1.92rem">s</span>
      </div>
      <!-- 连击数 -->
      <div class="activity_8" v-if="rainTime == 0" id="combo">x{{ combo }}</div>
      <!-- 底部 -->
      <img
        src="../../assets/raffle/tz-jhb.png"
        class="activity_9"
        v-if="rainTime == 0"
      />
      <!-- 红包雨 -->
      <img
        src="../../assets/raffle/hongbao.png"
        class="activity_10"
        :id="`hb${item}`"
        v-for="(item, index) in 50"
        :key="index"
        @click="redPacketClick"
      />
      <!-- 奖励 -->
      <div class="activity_11" v-if="rainDuration == 0">
        <!-- 奖励 -->
        <div
          class="activity_11_1"
          v-for="(item, index) in redRainReward"
          :key="index"
        >
          <!-- 左侧盒子 -->
          <div class="activity_11_1_1">
            <!-- 图标 -->
            <img :src="item.src" class="activity_11_1_1_1" />
            <!-- 信息 -->
            <div class="activity_11_1_1_2">
              <!-- 标题 -->
              <div class="activity_11_1_1_2_1">{{ item.name }}</div>
              <!-- 介绍 -->
              <div class="activity_11_1_1_2_2">{{ item.content }}</div>
            </div>
          </div>
          <!-- 右侧盒子 -->
          <div class="activity_11_1_2" @click="goUse">去使用</div>
        </div>
        <!-- 收下按钮 -->
        <div class="activity_11_2" @click="rainMask = false">开心收下</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { getLottery, getRedRainReward, getReward, lottery } from "@/utils/api";
import { formatTime } from "../../utils/index";
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      // 活动倒计时
      time: "",
      // 用户id
      userId: "",
      // 抽奖信息
      lotteryInfo: {},
      // 开关灯
      light: false,
      // 中奖对象
      reward: {
        // 展示
        show: false,
      },
      // 抽奖倒计时
      lotteryTime: 0,
      // 活动对象
      activity: {
        show: true,
      },
      // 红包雨倒计时
      rainTime: 3,
      // 红包雨持续时间
      rainDuration: 10,
      // 连击数
      combo: 0,
      // 红包奖励
      redRainReward: [],
      // 红包雨遮罩
      rainMask: true,
    };
  },
  methods: {
    // 获取倒计时
    getRaffleTime() {
      // 获取当前时间
      let nowTime = new Date().getTime();
      // 获取活动结束时间
      let endTime = new Date("2023-01-07 23:59:59").getTime();
      // 获取活动倒计时
      let time = endTime - nowTime;
      // 格式化倒计时
      this.time = formatTime(time / 1000);
    },
    // 获取抽奖次数/已经获得的奖励
    getLottery(uid) {
      // 获取抽奖次数/已经获得的奖励API
      getLottery({ uid }).then((res) => {
        // 赋值
        this.lotteryInfo = res.data;
      });
    },
    // 抽奖
    lottery() {
      if (this.lotteryTime != 0) return Toast("请稍后再试");
      // 200ms切换一次
      let lightSetInterval = setInterval(() => {
        this.light = !this.light;
      }, 200);
      // 5秒后结束切换
      setTimeout(() => {
        clearInterval(lightSetInterval);
      }, 5000);
      // 抽奖API
      lottery({ uid: this.userId }).then((res) => {
        // 增加四秒
        this.lotteryTime = 4;
        // 每秒减1
        let lotteryTimeSetInterval = setInterval(() => {
          this.lotteryTime--;
          if (this.lotteryTime == 0) {
            clearInterval(lotteryTimeSetInterval);
          }
        }, 1000);
        // 中奖信息赋值
        this.reward = res.data;
        // 固定360*3
        switch (res.data.id) {
          // 240
          case 1:
            this.reward.src = "http://39.106.208.234/pic/icon/chakank.png";
            this.rotate(1080 + 240);
            break;
          // 120
          case 2:
            this.reward.src = "http://39.106.208.234/pic/icon/bianse.png";
            this.rotate(1080 + 120);
            break;
          // 300
          case 3:
            this.reward.src = "http://39.106.208.234/pic/img_/88.png";
            this.rotate(1080 + 300);
            break;
          // 420
          case 4:
            this.reward.src = "http://39.106.208.234/pic/img_/288.png";
            this.rotate(1080 + 420);
            break;
          // 540
          case 5:
            this.reward.src = "http://39.106.208.234/pic/img_/588.png";
            this.rotate(1080 + 540);
            break;
          // 360
          case 6:
            this.reward.src = "http://39.106.208.234/pic/img_/1888.png";
            this.rotate(1080 + 360);
            break;
        }
        setTimeout(() => {
          // 打开弹窗
          this.reward.show = true;
        }, 3000);
      });
    },
    // 活动奖励
    getReward() {
      // 活动奖励API
      getReward().then((res) => {
        console.log(res);
      });
    },
    // 旋转
    rotate(num) {
      // 旋转
      document.getElementById("plate").style.transform = `rotate(${num}deg)`;
      document.getElementById("pointer").style.transform = `rotate(-${num}deg)`;
    },
    // 初始化转盘
    initPlate() {
      // 关闭弹窗
      this.reward.show = false;
      document.getElementById("plate").style.transition = "all 0s";
      document.getElementById("plate").style.transform = `rotate(0deg)`;
      document.getElementById("pointer").style.transition = "all 0s";
      document.getElementById("pointer").style.transform = `rotate(0deg)`;
      // 获取抽奖信息
      this.getLottery(this.userId);
      // 100ms后恢复动画
      setTimeout(() => {
        document.getElementById("plate").style.transition = "all 3s";
        document.getElementById("pointer").style.transition = "all 3s";
      }, 100);
    },
    // 掉落红包
    dropRedPacket() {
      // 第几个红包
      let i = 1;
      // 获取屏幕宽度
      let width = document.body.clientWidth;
      // 获取屏幕高度
      let height = document.body.clientHeight + 100;
      // 获取id hb1的宽度px
      let redPacketWidth = document.getElementById("hb1").offsetWidth;
      console.log(redPacketWidth);
      let dropRedPacketTime = setInterval(() => {
        // 生成宽度随机位置
        let left = Math.floor(Math.random() * (width - redPacketWidth));
        document.getElementById(`hb${i}`).style.left = `${left}px`;
        document.getElementById(`hb${i}`).style.top = `calc(${height}px)`;
        i++;
      }, 300);
      // 10秒倒计时
      let dropRedPacketTimeSetInterval = setInterval(() => {
        this.rainDuration--;
        if (this.rainDuration == 0) {
          clearInterval(dropRedPacketTimeSetInterval);
        }
      }, 1000);
      // 10秒后结束
      setTimeout(() => {
        clearInterval(dropRedPacketTime);
      }, 10000);
    },
    // 红包雨奖励
    getRedRainReward() {
      // 红包雨奖励API
      getRedRainReward({ uid: this.userId }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化奖励图片
          switch (item.id) {
            case 3:
              item.src = "http://39.106.208.234/pic/img_/88.png";
              break;
            case 4:
              item.src = "http://39.106.208.234/pic/img_/288.png";
              break;
            case 5:
              item.src = "http://39.106.208.234/pic/img_/588.png";
              break;
            case 6:
              item.src = "http://39.106.208.234/pic/img_/1888.png";
              break;
          }
        });
        // 参数赋值
        this.redRainReward = res.data;
        // 获取抽奖次数/已经获得的奖励
        this.getLottery(this.userId);
      });
    },
    // 红包点击事件
    redPacketClick() {
      // 连击加一
      this.combo++;
      // id combo放大1.5倍 0.3s动画效果
      document.getElementById("combo").style.transform = "scale(1.5)";
      document.getElementById("combo").style.transition = "all 0.3s";
      // 0.3s后恢复
      setTimeout(() => {
        document.getElementById("combo").style.transform = "scale(1)";
        document.getElementById("combo").style.transition = "all 0.3s";
      }, 300);
    },
    // 去使用
    goUse() {
      Dialog({
        message: "请返回上一级在APP内使用道具,红包则会在购买的时候自动扣除金额",
      });
    },
  },
  mounted() {
    // 获取路由userId参数
    this.userId = this.$route.query.userId;
    // 获取倒计时
    this.getRaffleTime();
    // 1秒调用一次
    setInterval(() => {
      // 获取倒计时
      this.getRaffleTime();
    }, 1000);
    // 活动奖励
    this.getReward();
    // 每秒减1
    let rainTimeSetInterval = setInterval(() => {
      this.rainTime--;
      if (this.rainTime == 0) {
        clearInterval(rainTimeSetInterval);
        // 掉落红包
        this.dropRedPacket();
      }
    }, 1000);
    // 红包雨奖励
    this.getRedRainReward();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>