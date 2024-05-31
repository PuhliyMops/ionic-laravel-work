<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Connect from '../confconnect';
import
{
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
   IonCol,
   IonGrid,
   IonRow,
   IonInput,
   IonItem,
   IonList,
} from '@ionic/vue';


const router = useRouter();

const datavw = ref({
  //csrf: '',
  error: '',

  form:
    {
        username: '',
        password: '',
    },
});


const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.post('/login', datavw.value.form)
      .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data))
          window.location.replace('/reestrs')
      });
  } catch (error) {
      console.log(77777777777)
    datavw.value.error = error;
  }
};


</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button  @click="() => router.push({ name: 'Reestrs' })">Back</ion-button>

 <form @submit.prevent="submit">
  <ion-list>

    <ion-item>
      <ion-input required label="Email" v-model="datavw.form.username"></ion-input>
    </ion-item>

      <ion-item>
          <ion-input type="password" required label="Пароль" v-model="datavw.form.password"></ion-input>
      </ion-item>

    <ion-button type="submit">Send</ion-button>

  </ion-list>
  </form>
    </ion-content>
  </ion-page>
</template>

