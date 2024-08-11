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
              <!-- <th class="tit_modify">삭제</th> -->
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
                <span v-if="!item.isEditing">{{ item.price }}원</span>
                <input v-else v-model="item.editPrice" type="number" />
              </td>
              <td class="phone">
                <span v-if="!item.isEditing">{{ item.stock }}개</span>
                <input v-else v-model="item.editStock" type="number" />
              </td>
              <td>
                <button
                  type="button"
                  class="ico modify"
                  @click="toggleEdit(item)"
                >
                  {{ item.isEditing ? "수정 완료" : "수정하기" }}
                </button>
              </td>
              <!-- <td class="delete_position">
                <button
                  type="button"
                  class="product_delete"
                  @click="deleteItem(item.itemId)"
                >
                  삭제하기
                </button>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="no_data" v-if="items && items.length === 0">
      상품이 없습니다.
    </div>
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
      this.items = response.data.result.map((item) => ({
        ...item,
        isEditing: false,
        editName: item.name,
        editPrice: item.price,
        editStock: item.stock,
      }));
    },
    toggleEdit(item) {
      if (item.isEditing) {
        this.updateItem(item);
      } else {
        item.isEditing = true;
      }
    },
    async updateItem(item) {
      try {
        console.log("update", item.itemId);
        await axios.get("http://localhost:8080/item/update/simple", {
          params: {
            id: item.itemId,
            price: item.editPrice,
            stock: item.editStock,
          },
          withCredentials: true,
        });
        item.name = item.editName;
        item.price = item.editPrice;
        item.stock = item.editStock;
        item.isEditing = false;
        alert("상품이 수정되었습니다.");
      } catch (error) {
        alert("수정에 실패하였습니다.");
      }
    },
    async deleteItem(itemId) {
      try {
        await axios.get("http://localhost:8080/item/delete", {
          params: {
            id: itemId,
          },
          withCredentials: true,
        });
        this.items = this.items.filter((item) => item.itemId !== itemId);
        alert("상품이 삭제되었습니다.");
      } catch (error) {
        alert("삭제에 실패하였습니다.");
      }
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
  color: rgb(102, 153, 51);
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
