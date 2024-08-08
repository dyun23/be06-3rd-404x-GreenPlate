<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <button class="popup-close-btn" @click="closePopup">×</button>
      <h2>주소 입력</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="zipcode">우편번호</label>
          <input
            type="text"
            id="zipcode"
            v-model="zipcode"
            placeholder="우편번호를 입력하세요"
          />
        </div>
        <div class="form-group">
          <label for="address">주소</label>
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="주소를 입력하세요"
          />
        </div>
        <div class="form-group">
          <label for="addressDetail">상세 주소</label>
          <input
            type="text"
            id="addressDetail"
            v-model="addressDetail"
            placeholder="상세 주소를 입력하세요"
          />
        </div>
        <div class="form-group">
          <label for="recipient">받는 사람</label>
          <input
            type="text"
            id="recipient"
            v-model="recipient"
            placeholder="받는 사람을 입력하세요"
          />
        </div>
        <div class="form-group">
          <label for="phoneNum">휴대폰 번호</label>
          <input
            type="text"
            id="phoneNum"
            v-model="phoneNum"
            placeholder="휴대폰 번호를 입력하세요"
          />
        </div>
        <div class="form-actions">
          <button type="submit">등록</button>
          <button type="button" @click="closePopup">취소</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapStores } from "pinia";
import { useAddressStore } from "@/stores/useAddressStore";

export default {
  name: "AddressPopup",
  data() {
    return {
      zipcode: "",
      address: "",
      addressDetail: "",
      recipient: "",
      phoneNum: "",
    };
  },
  computed: {
    ...mapStores(useAddressStore),
  },
  methods: {
    closePopup(event) {
      event.stopPropagation();
      this.addressStore.disable();
    },
    submmit() {
      this.addressStore.disable();
    },
    async submitForm() {
      // 폼 제출 로직을 여기에 작성합니다.
      console.log("우편번호:", this.zipcode);
      console.log("주소:", this.address);
      console.log("상세 주소:", this.addressDetail);
      console.log("받는 사람:", this.recipient);
      console.log("휴대폰 번호:", this.phoneNum);
      const data = {
        zipcode: this.zipcode,
        address: this.address,
        addressDetail: this.addressDetail,
        recipient: this.recipient,
        phoneNum: this.phoneNum,
      };
      await axios.post("http://localhost:8080/user/address/register", data, {
        withCredentials: true,
      });

      this.submmit();
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure the popup is on top of other elements */
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* Ensure the close button is positioned correctly */
}

.popup-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.form-actions button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button[type="submit"] {
  background-color: rgb(95, 0, 128);
  color: white;
}

.form-actions button[type="button"] {
  background-color: rgb(95, 0, 128);
  color: white;
}
</style>
