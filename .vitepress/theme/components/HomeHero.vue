<template>
  <section class="hero">
    <div class="hero-content">
      <h1>日本留学ガイド</h1>
      <p>
        外国人留学生のために、日本での生活や入国手続き、学校情報、支援情報をわかりやすくまとめたサイトです。
      </p>

      <section class="features">
        <div class="feature-card">
          <h3>留学準備</h3>
          <p>来日前の手続きや必要書類、学校選びのポイントをまとめています。</p>
        </div>
        <div class="feature-card">
          <h3>入国・在留資格</h3>
          <p>ビザや在留カード、役所での手続きなどの情報。</p>
        </div>
        <div class="feature-card">
          <h3>生活</h3>
          <p>住まい、交通、医療、アルバイトなど日常生活のヒント。</p>
        </div>
        <div class="feature-card">
          <h3>支援</h3>
          <p>相談窓口や支援団体、SOS情報を掲載。</p>
        </div>
      </section>
      <button @click="goGuide">ガイドを見る</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vitepress";

const router = useRouter();
const goGuide = () => {
  router.push("/docs/入国/zairyu");
};
</script>

<style scoped>
.hero {
  background-color: #fffaf0; /* 米白背景 */
  border-radius: 16px;
  margin-top: 3rem;
  padding: 5rem 1rem;
  text-align: center;
  font-family: "Noto Serif JP", serif;
}
.hero h1 {
  color: #b22222;
  font-size: 3rem;
  margin-bottom: 2rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #333;
}
.hero button {
  background-color: #b22222;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.3s;
}
.hero button:hover {
  background-color: #800000;
}

/* features */

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 1rem;
}
.feature-card {
  background-color: #fff;
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
.feature-card h3 {
  color: #b22222;
  margin-top: 0;
}
</style>
