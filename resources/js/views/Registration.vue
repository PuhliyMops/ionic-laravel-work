<script setup lang="ts">
import Menu from './Menu.vue';
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
        email: '',
        password: '',
        password_confirmation: '',
    },
});

const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.post('/register', datavw.value.form)
      .then((response) => {
      });
  } catch (error) {
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
   <Menu />
   <ion-page>
    <ion-content>
 <form @submit.prevent="submit">
  <ion-list>
    <ion-item>
      <ion-input required label="Введите логин" v-model="datavw.form.username"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input type="email" required label="Введите Email" v-model="datavw.form.email"></ion-input>
    </ion-item>

      <ion-item>
          <ion-input type="password" required label="Введите пароль" v-model="datavw.form.password"></ion-input>
      </ion-item>

      <ion-item>
          <ion-input type="password" required label="Повторите пароль" v-model="datavw.form.password_confirmation"></ion-input>
      </ion-item>

    <ion-button shape="round" type="submit">Зарегистрироваться</ion-button>

  </ion-list>
  </form>
    </ion-content>
    </ion-page>
</template>

