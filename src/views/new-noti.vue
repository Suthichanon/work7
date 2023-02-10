<template>
  <div class="content">
    <div class="gradiant-bg">
      <main class="px-3">
        <h1>ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนเพิ่มวิชาเรียนออนไลน์</h1>
        <p class="lead">สาขาวิชาวิทยาการคอมพิวเตอร์</p>
      </main>

      <h5 style="text-align: center;">ข่าวสารล่าสุด</h5>
    </div>
    <article>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="news_content in news" :key="news_content.newsId">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img"
                  aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" z="50%" fill="#eceeef"
                    dy=".3em"></text>
                </svg>
                <div class="card-body">
                  <h4 style="font-size: 16px;">{{ news_content.News_Date }}</h4>
                  <p>{{ news_content.News_Title }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">one minute ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { usecourseStore } from '@/stores/store';
import news from "../json/news.json";
export default {
  setup() {
    const load = usecourseStore();
    const Data = load.$state.courses
    return { Data,news };
  }
}
</script>

<style scoped>
.content {
  margin-top: 1em;
  margin-bottom: 1em;
}

.m-0 {
  margin: unset;
}

.color-gray {
  color: gray;
}

.px-3 {
  text-align: center;
}


.gradiant-bg {
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient(45deg, #adb5bd, #6c757d, #495057, #343a40, #212529);
  background-size: 30%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 10s infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 100%;
  }

  100% {
    background-position: 100% 0%;
  }

  50% {
    background-position: 25% 75%;
  }
}


</style>