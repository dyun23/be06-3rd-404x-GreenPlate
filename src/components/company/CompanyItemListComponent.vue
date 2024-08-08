<template>
  <div id="viewOrderList" class="page_section section_destination">
    <div class="head_aticle">
      <div class="head_article rounded-box">
        <h2 class="tit">상품 조회</h2>
      </div>
    </div>

    <div id="tblParent" class="type_select">
      <div class="table-wrapper">
        <table class="tbl tbl_type1">
          <thead>
            <tr>
              <th class="tit_select">번호</th>
              <th class="tit_address">상품명</th>
              <th class="tit_receive">가격</th>
              <th class="tit_phone">남은 수량</th>
              <th class="tit_modify">수정</th>
              <th class="tit_modify">삭제</th>
            </tr>
          </thead>
          <tbody id="addrList">
            <tr v-for="(item, index) in items" :key="index">
              <td class="select type_radio">
                <label class="skin_checkbox">
                  <p>{{ item.itemId }}</p>
                </label>
              </td>
              <td class="address">
                <p class="addr">{{ item.name }}</p>
              </td>
              <td class="name">
                <span>{{ item.price }}원</span>
              </td>
              <td class="phone">
                <span>{{ item.stock }}개</span>
              </td>
              <td>
                <button
                  type="button"
                  class="ico modify"
                  onclick="popup()"
                  target="_blank"
                >
                  수정하기
                </button>
              </td>
              <td class="delete_position">
                <button type="button" class="product_delete">삭제하기</button>
              </td>
            </tr>
            <!-- 
            <tr>
              <td class="select type_radio">
                <p>2</p>
              </td>
              <td class="address">
                <p class="addr">빵 시루떡</p>
              </td>
              <td class="name">
                <span>300원</span>
              </td>
              <td class="phone">
                <span>22개</span>
              </td>
              <td>
                <button
                  type="button"
                  class="ico modify"
                  onclick="popup()"
                  target="_blank"
                >
                  수정하기
                </button>
              </td>
              <td class="delete_position">
                <button type="button" class="product_delete">삭제하기</button>
              </td>
            </tr>

            <tr>
              <td class="select type_radio">
                <p>1</p>
              </td>
              <td class="address">
                <p class="addr">사과 오렌지 배</p>
              </td>
              <td class="name">
                <span>3000원</span>
              </td>
              <td class="phone">
                <span>20000개</span>
              </td>
              <td>
                <button
                  type="button"
                  class="ico modify"
                  onclick="popup()"
                  target="_blank"
                >
                  수정하기
                </button>
              </td>
              <td class="delete_position">
                <button type="button" class="product_delete">삭제하기</button>
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>

    <div class="no_data">상품이 없습니다.</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompanyItemListComponent",
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const response = await axios.get("http://localhost:8080/item/company", {
        withCredentials: true,
      });
      this.items = response.data.result;
      console.log(this.items);
    },
  },
};
</script>

<style scoped>
#tblParent {
  margin-bottom: 120px;
}

.head_article.rounded-box {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.tit {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.section_destination .tbl_type1 {
  border-bottom: 1px solid #f4f4f4;
  background-color: #ffffff;
}

.page_aticle .tbl {
  width: 100%;
}

.section_destination .type_select .tit_select {
  display: table-cell;
}

.section_destination .tbl_type1 .tit_select {
  width: 60px;
}

.section_destination .tbl_type1 th {
  padding: 17px 0 20px;
  vertical-align: top;
}

.page_aticle .tbl_type1 th {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  letter-spacing: -0.5px;
}

.table-wrapper {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}

.tbl_type1 {
  width: 100%;
  border-collapse: collapse;
}

.section_destination .type_select .tit_address {
  padding-left: 0;
  text-indent: -8px;
}

.section_destination .tbl_type1 .tit_address {
  width: auto;
}

.section_destination .tbl_type1 .tit_receive {
  width: 120px;
}

.section_destination .tbl_type1 .tit_phone {
  width: 100px;
}

.section_destination .tbl_type1 .tit_delivery {
  width: 100px;
}

.section_destination .tbl_type1 .tit_modify {
  width: 60px;
}

.section_destination .tbl_type1 tr:first-child td,
.section_destination .tbl_type1 td {
  height: 90px;
  font-size: 14px;
  color: #333;
  line-height: 22px;
  letter-spacing: -0.4px;
  vertical-align: middle;
  text-align: center;
}

.page_aticle .tbl_type1 tr:first-child td {
  border-top: 1px solid #333;
}

.section_destination .type_select .select {
  display: table-cell;
}

.type_radio label {
  font-size: 14px;
  line-height: 22px;
}

.screen_out {
  display: block;
  overflow: hidden;
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}

.section_destination .tbl_type1 tr:first-child td,
.section_destination .tbl_type1 td {
  height: 90px;
  font-size: 14px;
  color: #333;
  line-height: 22px;
  letter-spacing: -0.4px;
  vertical-align: middle;
  text-align: center;
}

.section_destination .type_select .address {
  padding-left: 2px;
}

.section_destination .tbl_type1 .address {
  padding: 20px 10px 20px 20px;
  text-align: left;
}

.section_destination .tbl_type1 .addr {
  padding: 0;
  font-size: 16px;
  color: #333;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-align: left;
  word-break: break-all;
}

.section_destination .tbl_type1 .star {
  color: #5f0080;
}

.section_destination .tbl_type1 .modify {
  width: 24px;
  height: 24px;
  border: 0 none;
  background: url(https://res.kurly.com/mobile/ico/2006/ico_modify.png)
    no-repeat 50% 50%;
  font-size: 0;
  line-height: 0;
}

#tblParent {
  border-top: 2px solid #333;
  margin-bottom: 120px;
}

.delete_position {
  position: relative;
}

.product_delete {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 0 none;
  background: url(https://res.kurly.com/pc/service/cart/2007/ico_delete.svg)
    no-repeat 50% 50%;
  font-size: 0;
  line-height: 0;
  top: 33px;
  left: 19px;
}

.no_data {
  display: none;
  border-bottom: 1px solid #dddfe1;
  padding: 90px 0 220px 0;
  font-size: 15px;
  color: #757575;
  text-align: center;
}
</style>
