<template>
  <div class="container">
    <div class="boxcon">
      <div class="box">
        <form @submit.prevent="confirmAndSubmit">
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1">ชื่อวิชา</label>
                <input style="text-align: center;" type="text" id="form6Example1" name="SubName"
                  placeholder="ใส่ชื่อวิชา" v-model="formData.SubName" required class="form-control" />
              </div>
            </div>
          </div>
          <!-- Text input -->
          <div class="form-outline mb-4">
            <label style="text-align: left;" class="form-label" for="form6Example3"> รหัสวิชา </label>
            <input style="text-align: center;" type="text" id="form6Example3" name="Scode" placeholder="ใส่รหัสวิชา"
              v-model="formData.Scode" required class="form-control" />
          </div>
          <!-- Message input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example7">คำอธิบายรายวิชา</label>
            <textarea style="text-align: center;" class="form-control" id="form6Example7" rows="4" name="sdescript"
              placeholder="คำอธิบายรายวิชา" v-model="formData.sdescription" required></textarea>
          </div>

          <!-- Text input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example4">จำนวนชั่วโมง</label>
            <input style="text-align: center;" type="number" id="form6Example4" name="stime1" placeholder="บรรยาย"
              v-model="formData.stime1" required class="form-control" />
            <input style="text-align: center;" type="number" id="form6Example4" name="stime2" placeholder="ปฏิบัติ"
              v-model="formData.stime2" required class="form-control" />
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example5">ผู้สอน</label>
            <input style="text-align: center;" type="text" id="form6Example5" name="tname"
              placeholder="ใส่ชื่ออาจารย์ผู้สอน" v-model="formData.tname" required class="form-control" />
          </div>


          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>

        </form>
      </div>
      <div class="boxAccordion">
        <div class="accordion" id="accordionPanelsStayOpenExample" v-for="(data, i) in Data" v-bind:key="i">
          <div class="accordion-item" style="width: 100%;">
            <h2 class="accordion-header" :id="'panelsStayOpen-heading' + i">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#panelsStayOpen-collapse' + i" aria-expanded="true"
                :aria-controls="'panelsStayOpen-collapse' + i">
                <h5>รหัสวิชา : {{ data.Scode }} <br> ชื่อวิชา {{ data.SubName }} <br> ผู้สอน {{ data.tname }}</h5>
              </button>
            </h2>
            <div :id="'panelsStayOpen-collapse' + i" class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style="width: 20px;">หัวข้อ</th>
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
              <div class="btngo"><button type="button" class="btn btn-danger" @click="removeData(i)"
                  style="">Remove</button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usecourseStore } from '@/stores/store';
import { RouterLink, RouterView } from 'vue-router';
const courseState = usecourseStore()
// console.log(DatafromArray.PushtoArray);
export default defineComponent({
  data() {
    return {
      formData: {
        SubName: "",
        Scode: "",
        sdescription: "",
        stime1: Number,
        stime2: Number,
        tname: "",
      },
    };
  },
  setup() {

    const Data = courseState.$state.courses
    return { Data };
  },
  methods: {
    onSubmit() {
      if (this.formData) {
        courseState.pushState(this.formData)
        console.log(courseState.$state.courses)
        this.formData = <any>{}
      }
    },
    removeData(index: number) {
      if (confirm('Are you sure you want to remove this form data?')) {
        this.Data.splice(index, 1);
      }
    },
    confirmAndSubmit() {
      if (window.confirm('Are you sure you want to submit the form?')) {
        this.onSubmit();
      }
    },
  }
});
</script>


<style scoped>
th {
  width: 1px
}

.table {
  max-width: 100%;
}

td {
  word-break: break-all;
}

.btngo {
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
}

.btngo button {

  color: green;

}

.box {

  width: 100%;
  max-width: 100%;
  /* border: 1px solid #000; */

}

.boxcon {
  display: flex;
  min-width: 100%;
}

.boxAccordion {
  width: 100%;
  max-width: 100%;
}

.box form {
  padding: 30px;
  /* border: 1px solid red; */
  min-width: 100%;
  max-width: 100%;
  background-color: #C5D6DA;


}

.accordion {
  width: 100%;

}

.accordion-item {
  width: 100%;
}

.container {
  margin: 25px 25px 25px 25px;
  display: flex;
  flex-grow: 1;
  /* border: 1px solid red; */
  width: 100%;
  min-height: 89vh;
  max-height: 100vh;
  max-width: 97%;
  padding: 0px;

}
</style>