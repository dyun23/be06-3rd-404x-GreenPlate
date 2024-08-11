<template>
  <nav class="css-1le17tz en4zazl1">
    <ul class="css-tse2s2 en4zazl0">
      <li class="css-1tzhzcg efe6b6j1">
        <a class="css-1t0ft7s efe6b6j0"><span class="name">상품설명</span></a>
      </li>
      <!-- <li class="css-1tzhzcg efe6b6j1">
        <a class="css-1t0ft7s efe6b6j0"><span class="name">상세정보</span></a>
      </li>
      <li class="css-1tzhzcg efe6b6j1">
        <a class="css-1t0ft7s efe6b6j0">
          <span class="name">후기</span>
          <span class="count">({{ count }})</span>
        </a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ItemDetailMenu Component",
  data() {
    return {
      count: 17,
    };
  },
};
</script>

<style scoped>
.css-1le17tz {
  z-index: 20;
  position: sticky;
  top: 56px;
  width: 1010px;
  box-shadow: rgb(221, 221, 221) 0px -0.5px 0px 0px inset;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
  justify-content: center;
}

.css-tse2s2 {
  display: flex;
  flex-wrap: wrap;
  height: 60px;
}

.css-1tzhzcg {
  display: flex;
  flex: 1 1 0%;
  border-width: 1px 0px 1px 1px;
  border-color: rgb(238, 238, 238);
  border-style: solid;
  background-color: rgb(250, 250, 250);
}

.css-1tzhzcg .name {
  font-size: 16px;
  font-weight: 500;
  color: rgb(102, 102, 102);
}

.css-1t0ft7s {
  display: flex;
  flex: 1 1 0%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
}

a {
  background-color: transparent;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

nav {
  display: block;
  unicode-bidi: isolate;
}
</style>
