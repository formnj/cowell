<template>
  <div class="section_group">
    <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" :tabidx="0" class="mb0" />
    <div class="section">
      <div class="image_size">
        <img src="@/assets/images/mo/sample/size.png" alt="">
      </div>
      <h4>상세 사이즈</h4>
      <div class="table_default">
        <div class="table_info">
          <div class="unit">
            <span>단위 : </span>
            <em>cm</em>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>사이즈</th>
              <th>55</th>
              <th>66</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>총장</th>
              <td>99.7</td>
              <td></td>
            </tr>
            <tr>
              <th>허리둘레</th>
              <td>69.6</td>
              <td></td>
            </tr>
            <tr>
              <th>엉덩이둘레</th>
              <td>100.3</td>
              <td></td>
            </tr>
            <tr>
              <th>밑위길이</th>
              <td>33.3</td>
              <td></td>
            </tr>
            <tr>
              <th>허벅지둘레</th>
              <td>59.7</td>
              <td></td>
            </tr>
            <tr>
              <th>밑단둘레</th>
              <td>55.9</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue"

export default {
  data () {
    return {
      /* 카테고리 텝 */
      tab_item_category: [
        { item: "상세 사이즈" }, { item: "사이즈 조견표" },
      ],
    }
  },
  components: {
    Tabs,
  },
}
</script>

<style>

</style>