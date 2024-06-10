
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
   IonButton,
   IonMenu,
   IonMenuButton,
   IonMenuToggle,
} from '@ionic/vue';

const router = useRouter();

const datavw = ref({
  success: '',
  message: '',
  list: [],
});
const created = () => {
  try {
    Connect.get(window.location.pathname+window.location.search)
      .then((response) => {
        if (response.data.message == "redirect"){
            window.location.replace(response.data.href)
        }
        if (response.data.error != null) {
          datavw.value.error = response.data.error;
        } else {
          datavw.value.success = response.data.success;
          datavw.value.message = response.data.message;
          datavw.value.list = response.data.list;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

created();

const deleteId = (id) => {
 //Connect.defaults.headers.delete['X-CSRF-Token'] = datavw.value.csrf;
  Connect.delete("/reestrs/" + id);
  window.location.href = '/reestrs';
  //router.push({ name: 'Post_list' });
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
        <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle>
        <ion-button>Закрыть меню</ion-button>
      </ion-menu-toggle>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
   <ion-button @click="() => router.push({ name: 'Home' })">
    Главная страница
   </ion-button>
   <ion-button @click="() => router.push({ name: 'Reestrs' })">
    Реестр
   </ion-button>
   <ion-button @click="() => router.push({ name: 'Admin' })">
    Администрирование
   </ion-button>
    </ion-content>
  </ion-menu>

    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle>
        <ion-button>Меню</ion-button>
      </ion-menu-toggle>
      </ion-toolbar>
    </ion-header>



    <ion-content>
        <ion-button @click="() => router.push({ name: 'Post_add' })">
            Добавить
        </ion-button>

      <ion-grid>
          <ion-row>
              <ion-col>Фамилия</ion-col>
              <ion-col>Имя</ion-col>
              <ion-col>Отчество</ion-col>
              <ion-col>СНИЛС</ion-col>
              <ion-col>Личный номер</ion-col>
              <ion-col>Дата рождения</ion-col>
              <ion-col>Дата ранения</ion-col>
              <ion-col>Дата поступления ВМО</ion-col>
              <ion-col>Диагноз</ion-col>
              <ion-col>Заключение ВВК, номер протокола</ion-col>
              <ion-col>Дата протокола заключения ВВК</ion-col>
              <ion-col>Группа инвалидности</ion-col>
              <ion-col>Дата проведения МСЭ</ion-col>
              <ion-col>Группа инвалидности МСЭ</ion-col>
              <ion-col>ВМО Военн мед организ</ion-col>
              <ion-col>Протез</ion-col>
              <ion-col>Вед протез</ion-col>
              <ion-col>Дата протезирования</ion-col>
              <ion-col>Дата выписки ВМО</ion-col>
              <ion-col>Источник средств ТСР</ion-col>
              <ion-col>Категория</ion-col>
              <ion-col>Решение продолжения службы</ion-col>
              <ion-col>Контактный телефон</ion-col>
              <ion-col>EMail</ion-col>
          </ion-row>
          <ion-row v-for="list_one in datavw.list">
              <ion-col>{{list_one}}</ion-col>
              <ion-col>
              <ion-button @click="() => router.push({ name: 'Post_prev', params: { id: list_one.id } })">Edit</ion-button>
              </ion-col>
              <ion-col>
                <ion-button @click="deleteId(list_one.id)">Удалить</ion-button>
              </ion-col>
          </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

