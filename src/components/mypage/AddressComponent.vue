<template>
  <div class="css-heioij eug5r8l1">
    <div class="css-oc8mjz ed9qr673">
      <div class="css-eq7f8j ed9qr672">
        <h2 class="css-1lmd4kz ed9qr671">배송지 관리</h2>
        <span class="css-1vbzf1d ed9qr670">
          배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
        </span>
      </div>
      <div class="css-eq7f8j ed9qr672">
        <button @click="updateVisible" class="css-1y56l81 e1ss94ng0">
          <div v-if="addressStore.isOpen">
            <AddressPopup @address-added="handleAddressAdded" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-locator-target="webstorm"
          >
            <path
              fill="#333"
              fill-rule="evenodd"
              d="M8.75 2.5v4.75h4.75v1.5H8.75v4.75h-1.5V8.749L2.5 8.75v-1.5l4.75-.001V2.5h1.5z"
            ></path>
          </svg>
          새 배송지 추가
        </button>
      </div>
    </div>
    <div class="css-ehagcz eug5r8l0">
      <ul>
        <li v-for="(item, index) in address" :key="index">
          <AddressCardComponent
            :address="item"
            :name="name"
          ></AddressCardComponent>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddressPopup from "./AddressPopup.vue";
import AddressCardComponent from "./AddressCardComponent.vue";
import { mapStores } from "pinia";
import { useAddressStore } from "@/stores/useAddressStore";
import { useUserInfoStore } from "@/stores/useUserInfoStore";
import { useUserStore } from "@/stores/useUserStore";

export default {
  name: "AddressComponent",
  components: {
    AddressPopup,
    AddressCardComponent,
  },
  data() {
    return { isVisible: false, address: null, name: null };
  },
  computed: {
    ...mapStores(useAddressStore),
    ...mapStores(useUserInfoStore),
    ...mapStores(useUserStore),
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    updateVisible() {
      this.addressStore.enable();
      console.log(this.addressStore.isOpen);
    },
    async getInfo() {
      try {
        const response = await this.userInfoListStore.getUserInfo();
        this.address = response.addresses;
        this.name = response.name;
        console.log(this.address);
      } catch (error) {
        this.userStore.logout();
        this.$router.push("/");
      }
    },
    handleAddressAdded(newAddress) {
      this.address.push(newAddress);
    },
  },
};
</script>

<style scoped>
.css-heioij {
  overflow: hidden;
  width: 650px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
}
.css-oc8mjz {
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 25px 0px 20px;
  border-bottom: 2px solid rgb(51, 51, 51);
}
.css-eq7f8j {
  display: flex;
  align-items: flex-end;
}
.css-1lmd4kz {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
}
.css-1vbzf1d {
  display: block;
  padding-left: 8px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: rgb(153, 153, 153);
  margin-block-end: 0.5em;
}
.css-1y56l81 {
  display: flex;
  align-items: center;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
}
.css-1y56l81 > svg {
  margin-right: 6px;
}
.css-ehagcz {
  padding: 0px 20px;
}
.css-jxzkyr {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.css-1nt6ns3 {
  flex-basis: 36px;
  display: flex;
  align-items: center;
}
.css-upe1zs {
  flex: 1 1 0%;
}
.css-12stxlh {
  font-size: 16px;
  line-height: 20px;
  color: rgb(51, 51, 51);
  word-break: break-all;
}
.css-k8l2op {
  padding-top: 10px;
  font-weight: 500;
}
.css-k8l2op > span {
  font-size: 12px;
}
.css-z4mca9 {
  color: rgb(95, 0, 128);
  font-size: 14px;
}

.css-79hxr7 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-right: 8px;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + .css-79hxr7 {
  border-color: #5f0080;
  background-color: #5f0080;
}
input[type="radio"]:checked + .css-79hxr7 svg {
  display: block;
}
input[type="radio"]:not(:checked) + .css-79hxr7 svg {
  display: none;
}
svg {
  display: block;
}
button {
  overflow: visible;
  background-color: transparent;
  border: none;
}
</style>
