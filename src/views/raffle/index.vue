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
      <div class="content_2">
        <!-- 灯类型1 -->
        <img src="../../assets/raffle/deng-1.png" class="content_2_1" />
        <!-- 灯类型2 -->
        <!-- <img src="../../assets/raffle/deng-2.png" class="content_2_1"> -->
        <!-- 指针 -->
        <img src="../../assets/raffle/xuanz.png" class="content_2_2" />
      </div>
      <!-- 抽奖按钮 -->
      <img src="../../assets/raffle/lijichoujiang.png" class="content_3" />
      <!-- 剩余次数 -->
      <div class="content_4">剩余次数：3次</div>
      <!-- 中奖记录 -->
      <div class="content_5">- 中奖记录 -</div>
      <!-- 有限期 -->
      <div class="content_6">(奖品有限期15天)</div>
      <!-- 奖品列表 -->
      <div class="content_7">
        <!-- 单个数据 -->
        <div class="content_7_1">
          <!-- 道具图标 -->
          <img src="../../assets/raffle/chakank.png" class="content_7_1_1" />
          <!-- 红包图标 -->
          <!-- <img src="../../assets/raffle/88.png" class="content_7_1_2" /> -->
          <!-- 标题 -->
          <div class="content_7_1_3">查看卡*1</div>
          <!-- 介绍 -->
          <div class="content_7_1_4">(仅限使用一次查看联系方式)</div>
          <!-- 到期时间 -->
          <div class="content_7_1_5">有效期至2023年1月7日</div>
          <!-- 按钮 -->
          <div class="content_7_1_6">去使用</div>
          <!-- 总数 -->
          <div class="content_7_1_7">x2</div>
        </div>
        <!-- 单个数据 -->
        <div class="content_7_1">
          <!-- 道具图标 -->
          <img src="../../assets/raffle/chakank.png" class="content_7_1_1" />
          <!-- 红包图标 -->
          <!-- <img src="../../assets/raffle/88.png" class="content_7_1_2" /> -->
          <!-- 标题 -->
          <div class="content_7_1_3">查看卡*1</div>
          <!-- 介绍 -->
          <div class="content_7_1_4">(仅限使用一次查看联系方式)</div>
          <!-- 到期时间 -->
          <div class="content_7_1_5">有效期至2023年1月7日</div>
          <!-- 按钮 -->
          <div class="content_7_1_6">去使用</div>
          <!-- 总数 -->
          <div class="content_7_1_7">x2</div>
        </div>
        <!-- 单个数据 -->
        <div class="content_7_1">
          <!-- 道具图标 -->
          <img src="../../assets/raffle/chakank.png" class="content_7_1_1" />
          <!-- 红包图标 -->
          <!-- <img src="../../assets/raffle/88.png" class="content_7_1_2" /> -->
          <!-- 标题 -->
          <div class="content_7_1_3">查看卡*1</div>
          <!-- 介绍 -->
          <div class="content_7_1_4">(仅限使用一次查看联系方式)</div>
          <!-- 到期时间 -->
          <div class="content_7_1_5">有效期至2023年1月7日</div>
          <!-- 按钮 -->
          <div class="content_7_1_6">去使用</div>
          <!-- 总数 -->
          <div class="content_7_1_7">x2</div>
        </div>
        <!-- 单个数据 -->
        <div class="content_7_1">
          <!-- 道具图标 -->
          <img src="../../assets/raffle/chakank.png" class="content_7_1_1" />
          <!-- 红包图标 -->
          <!-- <img src="../../assets/raffle/88.png" class="content_7_1_2" /> -->
          <!-- 标题 -->
          <div class="content_7_1_3">查看卡*1</div>
          <!-- 介绍 -->
          <div class="content_7_1_4">(仅限使用一次查看联系方式)</div>
          <!-- 到期时间 -->
          <div class="content_7_1_5">有效期至2023年1月7日</div>
          <!-- 按钮 -->
          <div class="content_7_1_6">去使用</div>
          <!-- 总数 -->
          <div class="content_7_1_7">x2</div>
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
  </div>
</template>

<script>
import { formatTime } from "../../utils/index";
export default {
  data() {
    return {
      // 活动倒计时
      time: "",
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
  },
  mounted() {
    // 获取倒计时
    this.getRaffleTime();
    // 1秒调用一次
    setInterval(() => {
      // 获取倒计时
      this.getRaffleTime();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>