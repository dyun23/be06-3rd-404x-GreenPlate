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
            <AddressPopup />
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
        <div class="css-jxzkyr enjmmt32">
          <div class="css-1nt6ns3 enjmmt31">
            <label class="css-1xdhyk6 e1dcessg3" for="address-1">
              <input
                id="address-1"
                type="radio"
                name="address"
                class="css-agvwxo e1dcessg2"
                value="15944794"
                checked
              />
              <div class="css-79hxr7 e1dcessg1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#5f0080"
                  ></path>
                  <path
                    d="M7 12.6667L10.3846 16L18 8.5"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <span></span>
            </label>
          </div>
          <div data-testid="address-area" class="css-upe1zs e77s2kj4">
            <div class="css-2n86z e77s2kj1">기본 배송지</div>
            <p class="css-12stxlh e77s2kj2">
              서울 강서구 허준로 175 (가양6단지아파트) 612동 807호
            </p>
            <div class="css-1fujs4g e77s2kj3">
              이혜선<span class="css-tspkik e77s2kj0"></span>010-6769-3771
            </div>
            <div class="css-k8l2op">
              <span type="direct" class="css-z4mca9 e1jlkvf51">샛별배송</span>
            </div>
          </div>
          <div
            data-testid="update-address-button"
            class="css-d1hkno enjmmt30"
          ></div>
        </div>
        <div class="css-jxzkyr enjmmt32">
          <div class="css-1nt6ns3 enjmmt31">
            <label class="css-1xdhyk6 e1dcessg3" for="address-2">
              <input
                id="address-2"
                type="radio"
                name="address"
                class="css-agvwxo e1dcessg2"
                value="24308421"
              />
              <div class="css-79hxr7 e1dcessg1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                    stroke="#ddd"
                    fill="#fff"
                  ></path>
                  <path
                    d="M7 12.6667L10.3846 16L18 8.5"
                    stroke="#ddd"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <span></span>
            </label>
          </div>
          <div data-testid="address-area" class="css-upe1zs e77s2kj4">
            <p class="css-12stxlh e77s2kj2">
              서울 관악구 봉천로 278 (신일빌딩) 4층
            </p>
            <div class="css-k8l2op">
              <span type="direct" class="css-z4mca9 e1jlkvf51">샛별배송</span>
            </div>
          </div>
          <div data-testid="update-address-button" class="css-d1hkno enjmmt30">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_51_22049"
                maskUnits="userSpaceOnUse"
                x="14"
                y="14"
                width="20"
                height="20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 14H34V33.9552H14V14Z"
                  fill="#fff"
                ></path>
              </mask>
              <g mask="url(#mask0_51_22049)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.567 20.6328L27.3533 17.4191L29.5278 15.2444L32.7312 18.4687L30.567 20.6328ZM18.5065 32.6934H15.2102V29.5622L26.3954 18.377L29.6091 21.5907L18.5065 32.6934ZM33.6691 17.6822L30.283 14.3245C29.8456 13.8905 29.1397 13.892 28.7038 14.3279L14.0886 28.9431C14.0318 28.9996 14 29.0768 14 29.1569V32.8367C14 33.4544 14.5009 33.9553 15.1185 33.9553H18.86C18.9402 33.9553 19.0173 33.9232 19.0739 33.8666L33.6722 19.2684C34.1107 18.8301 34.1092 18.1187 33.6691 17.6822Z"
                  fill="#ccc"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import AddressPopup from "./AddressPopup.vue";
import { mapStores } from "pinia";
import { useAddressStore } from "@/stores/useAddressStore";

export default {
  name: "AddressComponent",
  components: {
    AddressPopup,
  },
  data() {
    return { isVisible: false, info: null };
  },
  computed: {
    ...mapStores(useAddressStore),
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    updateVisible() {
      this.addressStore.enable();
      console.log(this.addressStore.isOpen);
    },
    async getUserInfo() {
      const response = await this.addressStore.getInfo();
      this.info = response;
      console.log(this.info);
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
  margin-block-end: 1.4em;
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
