<script setup lang="ts">
import Menu from './Menu.vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import
{
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
   IonButton,
   IonIcon,
   IonInput,
   IonButtons,
   IonMenu,
   IonMenuButton,
   IonMenuToggle,

} from '@ionic/vue';


const router = useRouter();

</script>

<style scoped>
#container {
  text-align: center;
  width: 15%;
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
    <Menu />
</ion-page>
</template>


