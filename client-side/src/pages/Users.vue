<script setup>
import { ref, inject, onMounted } from "vue";
import { useToast } from "primevue/usetoast";

const appAxios = inject("appAxios");
const result = ref("");
const toast = useToast();

onMounted(() => {
  appAxios
    .get("users")
    .then((response) => {
      result.value = response.data;
      toast.add({
      severity: "success",
      summary: "Kullanıcı servisi cevabı",
      detail: response,
      life: 3000,
    });
    })
    .catch(function (error) {
      console.log(error);
      toast.add({
        severity: "error",
        summary: "Hata!",
        detail: "işlem esnasında bir hata oluştu!",
        life: 3000,
      });
    });
});

</script>

<template>
  <div className="grid">
    <div className="col-12">
      <div className="card">
        <h5>Kullanıcılar sayfası</h5>
        <p>
          {{ result }}
        </p>
      </div>
    </div>
  </div>
</template>
