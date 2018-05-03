<template>
  <div class="navigation-bar"
    @mouseover="NavSheetFlag = true"
    @mouseout="NavSheetFlag = false">
      <div class="nav-inner">
        <div class="nav-logo lyout">
          <i class="logo-icon">logo</i>
        </div>
        <div class="nav-categories">
          <ul class="nav-list">
            <li class="nav-item" v-for="(item, index) in navTitle" :key="item.id" @mouseover="showNavSheet(index)">
              <a href="javascript:;">{{item.name}}</a>
              <div class="line"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-top-sheet">
        <!-- 产品 -->
        <!-- <transition name="fade" mode="out-in"> -->
          <div class="nav-top-inner" v-show="NavSheetFlag && navIndex == 0">
            <div class="nav-dropdown-menu-all">
              <div class="menu-list-all">
                <div class="menu-list-col" v-for="v in product" :key="v.id">
                  <div class="menu-area" v-for="menu in v.col" :key="menu.id">
                    <div class="menu-area-title">
                      <h3>{{menu.name}}</h3>
                    </div>
                    <div class="menu-area-content">
                      <div class="menu-item" v-for="item in menu.items" :key="item.id">
                        <div class="menu-item-title">
                          <a href="javascript:;">{{item.name}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- </transition> -->
        <!-- 解决方案 -->
        <div class="nav-top-inner" v-show="NavSheetFlag && navIndex == 1">
          <div class="nav-dropdown-menu-all">
            <div class="menu-list-all">
              <div class="menu-list-col" v-for="v in solution" :key="v.id">
                <div class="menu-area" v-for="menu in v.col" :key="menu.id">
                  <div class="menu-area-title">
                    <h3>{{menu.name}}</h3>
                  </div>
                  <div class="menu-area-content">
                    <div class="menu-item" v-for="item in menu.items" :key="item.id">
                      <div class="menu-item-title">
                        <a href="javascript:;">{{item.name}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="ecmascript-6">
import { navTitle, product, solution } from 'common/js/data-nav'
export default {
  data() {
    return {
      NavSheetFlag: false,
      navIndex: null
    }
  },
  created() {
    this.navTitle = navTitle
    this.product = product
    this.solution = solution
  },
  methods: {
    showNavSheet(index) {
      this.navIndex = index
    },
    hideNavSheet(index) {
      this.navIndex = index
    }
  }
}
</script>

<style lang="scss">
@import "~common/scss/element-variables";
$nav-inner-height: 65px;

.navigation-bar {
  position: relative;
  z-index: 1000;
  width: 100%;
  min-width: 1000px;
  background-color: #2a303c;
  @media screen and (max-width: 1190px) {
    min-width: 320px;
  }
  .nav-inner {
    height: $nav-inner-height;
    position: relative;
    font-size: 0;
    .nav-logo {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      &.lyout {
        margin-left: 20px;
        margin-right: 10px;
      }
      .logo-icon {
        width: 32px;
        height: 32px;
        display: inline-block;
        background-image: url("../../common/image/logo.png");
        overflow: hidden;
        text-indent: -10000px;
        // background-position: 0.5700000000000001% 34.1%;
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
    .nav-categories {
      display: inline-block;
      vertical-align: middle;
      .nav-list {
        .nav-item {
          color: #fff;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          a {
            display: inline-block;
            padding: 0 15px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            line-height: $nav-inner-height;
            transition: background-color 0.4s;
            box-sizing: border-box;
            &:hover {
              color: $--color-primary;
            }
          }
          .line {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 3px;
            display: none;
            transition: background-color 0.4s;
            background-color: $--color-primary;
          }
          &:hover {
            .line {
              display: block;
            }
          }
        }
      }
    }
  }
  .nav-top-sheet {
    position: absolute;
    top: $nav-inner-height;
    padding: 0px 10px 10px 0px;
    left: 10px;
    .nav-top-inner {
      width: 100%;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      pointer-events: auto;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 8px 10px;
      border: 1px solid $--border-color-base;
      border-radius: 2px;
      line-height: 18px;
      font-size: 12px;
      .nav-dropdown-menu-all {
        max-width: 1500px;
        margin: 0 auto;
        min-height: 170px;
        .menu-list-all {
          white-space: nowrap;
          .menu-list-col {
            box-sizing: border-box;
            padding: 15px 0 0 20px;
            display: inline-block;
            vertical-align: top;
            width: 231px;
            white-space: normal;
            .menu-area {
              padding-bottom: 20px;
              .menu-area-title {
                font-size: $--font-size-base;
                color: #fff;
                padding-bottom: 8px;
                border-bottom: 1px solid $--border-color-base;
                max-width: 190px;
              }
              .menu-area-content {
                .menu-item {
                  padding: 0;
                  background: 0 0;
                  margin-top: 8px;
                  font-size: 12px;
                  a {
                    display: block;
                    height: 18px;
                    line-height: 18px;
                    padding-left: 0;
                    transition: all 0.4s;
                    box-sizing: border-box;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #333;
                    &:hover {
                      color: $--color-primary;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
// .fade-enter-active, .fade-leave-active {
//   transition: all .4s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
//   // height: 0px;
// }
</style>