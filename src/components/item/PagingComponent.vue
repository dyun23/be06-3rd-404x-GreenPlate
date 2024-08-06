<template>
  <div class="css-rdz8z7 e82lnfz1">
    <a class="css-1d20dg7 e82lnfz0 page-number" @click="changePage(1)">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="
        alt="처음 페이지로 이동하기 아이콘"
      />
    </a>
    <a
      class="css-1d20dg7 e82lnfz0 page-number"
      @click="changePage(currentPage - 1)"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"
        alt="이전 페이지로 이동하기 아이콘"
      />
    </a>
    <a
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      class="css-1d20dg7 e82lnfz0 page-number"
    >
      {{ page }}</a
    >
    <a
      class="css-1d20dg7 e82lnfz0 page-number"
      @click="changePage(currentPage + 1)"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGUlEQVR42mMo/l/8nwECQEwCHEwGhAlRBgA2mht3SwgzrwAAAABJRU5ErkJggg=="
        alt="다음 페이지로 이동하기 아이콘"
      />
    </a>
    <a class="css-1d20dg7 e82lnfz0 page-number" @click="changePage(totalPages)">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAIElEQVR42mMo/l/8n4GBgQFGQ5kgDowmQZCwAMImhDkAb0k27Zcisn8AAAAASUVORK5CYII="
        alt="마지막 페이지로 이동하기 아이콘"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "PagingComponent",
  props: ["totalPages"],
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.$emit("update:currentPage", page);
        this.$router.push({ path: `/item/list/${page}` });
      }
    },
  },
};
</script>

<style scoped>
.css-rdz8z7 {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 36px;
}

.css-1d20dg7:first-of-type {
  border-left: 1px solid rgb(221, 221, 221);
}

.css-1d20dg7 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-top: 1px solid rgb(221, 221, 221);
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  border-image: initial;
  border-left: none;
  cursor: pointer;
}

.css-19yo1fh {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-top: 1px solid rgb(221, 221, 221);
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  border-image: initial;
  border-left: none;
  cursor: pointer;
  background-color: rgb(247, 247, 247);
  color: rgb(95, 0, 128);
}

.page-number {
  color: rgb(95, 0, 128);
}

.page-number:hover {
  background-color: rgb(247, 247, 247);
  color: rgb(95, 0, 128);
  font-weight: 700;
}
</style>
