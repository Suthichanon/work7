<template>
  <div class="aa">
    <div class="boxAccordion">
      <div class="accordion" id="accordionPanelsStayOpenExample" v-for="(data, i) in Data" v-bind:key="i">
        <div class="accordion-item" style="width: 100%; text-align: c;">
          <h2 class="accordion-header" :id="'panelsStayOpen-heading' + i">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#panelsStayOpen-collapse' + i" aria-expanded="true"
              :aria-controls="'panelsStayOpen-collapse' + i">
              <h4>รหัสวิชา : {{ data.Scode }} <br> ชื่อวิชา : {{ data.SubName }} <br> ผู้สอน : {{ data.tname }}</h4>
            </button>
          </h2>
          <div :id="'panelsStayOpen-collapse' + i" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width: 166px;">หัวข้อ</th>
                  <th scope="col">คำอธิบาย</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">ชื่อวิชา</th>
                  <td>{{ data.SubName }}</td>
                </tr>
                <tr>
                  <th scope="row">รหัสวิชา</th>
                  <td>{{ data.Scode }}</td>
                </tr>
                <tr>
                  <th scope="row" style="">คำอธิบายรายวิชา</th>
                  <td style="">{{ data.sdescription }}}</td>
                </tr>
                <tr>
                  <th scope="row">จำนวนชั่วโมง</th>
                  <td>บรรยาย {{ data.stime1 }} ชั่วโมง | ปฏิบัติ {{ data.stime2 }} ชั่วโมง</td>
                </tr>
                <tr>
                  <th scope="row">ผู้สอน</th>
                  <td>{{ data.tname }}</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { usecourseStore } from '@/stores/store';
export default {
  setup() {
    const load = usecourseStore();
    const Data = load.$state.courses
    return { Data };
  }
}

</script>

<style  scoped>
.aa {
  max-height: 100vh;
}

.boxAccordion {
  height: 93vh;
}
</style>