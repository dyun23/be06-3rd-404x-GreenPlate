<template>
  <div id="review" class="review-section">
    <section class="review-header">
      <h2 aria-label="상품 후기" class="review-title">상품 후기</h2>
      <div class="review-count">
        <span class="total-reviews">총 {{ count }}개</span>
      </div>
    </section>
  </div>
  <div id="inquiry" class="inquiry-section">
    <div class="inquiry-container">
      <div class="inquiry-content">
        <table class="inquiry-table">
          <thead class="inquiry-head">
            <tr>
              <th class="star-rating-col">별점</th>
              <th class="author">작성자</th>
              <th class="contents">내용</th>
            </tr>
          </thead>
          <tbody class="inquiry-body">
            <tr>
              <td class="star-rating-cell">
                <div class="star-rating">
                  <input
                    type="radio"
                    class="star"
                    id="star5-1"
                    name="rating-1"
                    value="5"
                    disabled=""
                  />
                  <label for="star5-1" title="5 stars"></label>
                  <input
                    type="radio"
                    class="star"
                    id="star4-1"
                    name="rating-1"
                    value="4"
                    disabled=""
                  />
                  <label for="star4-1" title="4 stars"></label>
                  <input
                    type="radio"
                    class="star"
                    id="star3-1"
                    name="rating-1"
                    value="3"
                    disabled=""
                  />
                  <label for="star3-1" title="3 stars"></label>
                  <input
                    type="radio"
                    class="star"
                    id="star2-1"
                    name="rating-1"
                    value="2"
                    disabled=""
                  />
                  <label for="star2-1" title="2 stars"></label>
                  <input
                    type="radio"
                    class="star"
                    id="star1-1"
                    name="rating-1"
                    value="1"
                    disabled=""
                  />
                  <label for="star1-1" title="1 star"></label>
                </div>
              </td>
              <td>
                <span aria-live="polite" aria-busy="true">
                  <span class="skeleton"></span>
                </span>
              </td>
              <td>
                <span aria-live="polite" aria-busy="true">
                  <span class="skeleton"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <button disabled="" type="button" class="prev-button">
          <div class="button-label">이전</div>
        </button>
        <button disabled="" type="button" class="next-button">
          <div class="button-label">다음</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemReviewComponent",
  data() {
    return {
      count: 17,
    };
  },
};
</script>

<style scoped>
.review-section {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
.review-title {
  font-size: 24px;
  color: #333;
  margin: 0;
}
.review-count {
  font-size: 14px;
  color: #555;
}
.pagination {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.pagination button {
  border: 1px solid #ddd;
  background-color: #f0f0f0;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
}
.pagination button[disabled] {
  background-color: #eee;
  cursor: not-allowed;
  color: #aaa;
}
.button-label {
  margin-left: 5px;
}
.inquiry-section {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.inquiry-container {
  width: 100%;
  overflow-x: auto;
}
.inquiry-table {
  width: 100%;
  border-collapse: collapse;
}
.inquiry-table td,
.inquiry-table th {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
.inquiry-table th {
  background-color: #f5f5f5;
  font-weight: 700;
}
.skeleton {
  display: inline-block;
  height: 22px;
  width: 100%;
  border-radius: 2px;
}
.inquiry-body tr {
  transition: background-color 0.3s;
}
.inquiry-body tr:hover {
  background-color: #f1f1f1;
}
.inquiry-body td {
  color: #333;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.star-rating {
  display: flex;
}
.star {
  appearance: none;
  padding: 1px;
}
.star::after {
  content: "☆";
  color: #5f0080;
  font-size: 20px;
}
.star:checked::after,
.star:has(~ .star:checked)::after,
.star:has(~ .star:hover)::after,
.star:hover::after {
  content: "★";
}
.star:hover ~ .star::after {
  content: "☆";
}
</style>
