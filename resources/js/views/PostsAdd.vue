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
   IonSelect,
   IonSelectOption,

} from '@ionic/vue';

const router = useRouter();

const datavw = ref({
  //csrf: '',
  error: '',

  form:
    {
      title: '',
      content: '',
    },
});

const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.post('/posts', datavw.value.form)
      .then((response) => {
        response.firstname = '';
        response.lastname = '';
        response.middlename = '';
        response.snils = '';
        response.private_number = '';
        response.birthdate = '';
        response.damage_date = '';
        response.entrance_date = '';
        response.diagnose = '';
        response.VVK_number = '';
        response.VVK_date = '';
        response.groupinvalid_id = '';
        response.MSE_date = '';
        response.groupinvalidmse_id = '';
        response.vmo_id = '';
        response.prosthesis = '';
        response.prosthesis_ved = '';
        response.prosthesis_date = '';
        response.VMO_date = '';
        response.money_source = '';
        response.category = '';
        response.decision_service = '';
        response.phone = '';
        response.email = '';
        //router.push({ name: 'Post_list' });
        window.location.href = '/posts';
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
  <ion-page>
    <ion-menu content-id="main-content">
    <ion-header collapse="condense">
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
 </ion-page>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle>
        <ion-button>Меню</ion-button>
      </ion-menu-toggle>
      </ion-toolbar>
    </ion-header>

      <ion-button  @click="() => router.push({ name: 'Reestrs' })">Назад</ion-button>

      <ion-content>
 <form @submit.prevent="submit">

  <ion-list>
    <ion-item>
      <ion-input required label="Фамилия" v-model="datavw.form.firstname"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Имя" v-model="datavw.form.lastname"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Отчество" v-model="datavw.form.middlename"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="СНИЛС" v-model="datavw.form.snils"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Личный номер" v-model="datavw.form.private_number"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Дата рождения" v-model="datavw.form.birthdate"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Дата ранения" v-model="datavw.form.damage_date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Дата поступления ВМО" v-model="datavw.form.entrance_date"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Диагноз" v-model="datavw.form.diagnose"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Заключение ВВК, номер протокола" v-model="datavw.form.VVK_number"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Дата протоколоа заключения протокола ВВК" v-model="datavw.form.VVK_date"></ion-input>
    </ion-item>

    <ion-item>
      <!-- <ion-input required label="Группа инвалидности" v-model="datavw.form.groupinvalid_id"></ion-input> -->
      <ion-select required label="Группа инвалидности" v-model="datavw.form.groupinvalid_id">
      <ion-select-option value="">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
    </ion-item>
    <ion-item>
      <ion-input required label="Дата проведения МСЭ" v-model="datavw.form.MSE_date"></ion-input>
    </ion-item>

    <ion-item>
      <!-- <ion-input required label="Группа инвалидности МСЭ" v-model="datavw.form.groupinvalidmse_id"></ion-input> -->
      <ion-select required label="Группа инвалидности МСЭ" v-model="datavw.form.groupinvalidmse_id">
      <ion-select-option value="">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
    </ion-item>
    <ion-item>
      <ion-input required label="ВМО Вонн мед орнаниз" v-model="datavw.form.vmo_id"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Протез" v-model="datavw.form.prosthesis"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Вед протез" v-model="datavw.form.prosthesis_ved"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Дата протезирования" v-model="datavw.form.prosthesis_date"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Дата выписки ВМО" v-model="datavw.form.VMO_date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Источник средств ТСР" v-model="datavw.form.money_source"></ion-input>
    </ion-item>
    <ion-item>
      <!-- <ion-input required label="Категория" v-model="datavw.form.category"></ion-input> -->
      <ion-select required label="Категория" v-model="datavw.form.category">
      <ion-select-option value="">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4">4</ion-select-option>
      <ion-select-option value="5">5</ion-select-option>
    </ion-select>
    </ion-item>

    <ion-item>
      <ion-input required label="Решение продолжения службы" v-model="datavw.form.decision_service"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required label="Контактный телефон" v-model="datavw.form.phone"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="EMail" v-model="datavw.form.email"></ion-input>
    </ion-item>

    <ion-button type="submit" color="success" >Добавить</ion-button>

  </ion-list>
  </form>
    </ion-content>
  </ion-page>
</template>

