
<script setup lang="ts">
import {useRouter} from 'vue-router';
import {ref} from 'vue';
import Connect from '../confconnect';
import {trash, pencil, backspace, checkmarkDone, eyeOff, logOut, logIn} from "ionicons/icons";
import {
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTextarea,
    IonIcon,
    alertController
} from '@ionic/vue';

console.log(document.cookie)

const router = useRouter();
const isEdit = ref(0)
const cols = 100
const datavw = ref({
    success: '',
    message: '',
    user: null,
    list: [],
    formEdit:
        {
            user: '',
            post: '',
        },
    formCreate:
        {
            user: '',
            post: '',
        },
});

const date = (string) =>{return new Date(string)}
const setEdit = (id) =>{
    isEdit.value = id
}

function styleAuth(){
    if (datavw.value.user==null){
        return '100%'
    }
    else {
        return '50%'
    }
}

function logout(){
    Connect.post('/logout', null)
        .then((response) => {
            localStorage.removeItem('user')
            window.location.replace("/forum")
        });
}

function login(){
    window.location.replace("/login")
}


function ShowSelectionInsideTextarea(id)
{
    const textComponent = document.getElementById(id).getElementsByClassName("native-textarea")[0]
    const startPos = textComponent.selectionStart;
    const endPos = textComponent.selectionEnd;
    return [startPos, endPos]
}

function addTag(id, tag){
    const pos = ShowSelectionInsideTextarea(id)
    const text = document.getElementById(id).getElementsByClassName("native-textarea")[0]
    text.value = text.value.slice(0, pos[0])+`[${tag}]${text.value.slice(pos[0], pos[1])}[/${tag}]`+ text.value.slice(pos[1])
    if (id=="edit"){
        datavw.value.formEdit.post = text.value
    }
    else {
        datavw.value.formCreate.post = text.value
    }

}

function isCurrentUser(post):Boolean{
    if (datavw.value.user!=null){
        return datavw.value.user.name == post.user;

    }
    return false
}


const AlertButtons = (id) => [
        {
            text: "Отмена"
        },

        {
            text:"Удалить",
            handler: () => {
                deleteId(id)
            }
        }
    ]
const createAlert = async (index) => {
    const post = datavw.value.list[index]
    const alert = await alertController.create({
        header: post.user,
        message: `Вы точно хотите удалить сообщение "${post.post}"`,
        buttons: AlertButtons(index),
        cssClass: "alertEdit",
    });

    await alert.present();
};

const replaceArray = [
    [' ', '&nbsp;'],
    ['\n', '\n<br>\n'],
    ['[spoiler]', '<span class="spoiler" onclick="this.classList.toggle(\'visible\');">'],
    ['[/spoiler]', '</span>'],
    ['[b]', '<b>'],
    ['[/b]', '</b>'],
    ['[i]', '<i>'],
    ['[/i]', '</i>'],
]

const editText = (text) =>{
    for (let tag of replaceArray){
        text = text.replaceAll(tag[0], tag[1])
    }
    return text
}

const submit = () => {
    try {
        Connect.post('/forum', datavw.value.formCreate)
            .then((response) => {
                document.getElementById("addPost").reset();
                document.querySelector(".post-form textarea").value = "";
                response.post = '';
                response.user = '';
                created()
                created(true)

            });
    } catch (error) {
        datavw.value.error = error;
    }
};
const update = (id) => {
    try {
        Connect.put(`/forum/${datavw.value.list[id].id}`, datavw.value.formEdit)
            .then((response) => {
                response.post = '';
                response.user = '';
                setEdit(0);
                created()
            });
    } catch (error) {
        datavw.value.error = error;
    }
};
const created = (down=false) => {
    try {
        Connect.get('/forum')
            .then((response) => {
                if (response.data.error != null) {
                    datavw.value.error = response.data.error;
                } else {
                    //let $user = document.querySelector("meta[name='user']").getAttribute('content').replaceAll("&quot;", '"');
                    let $user = localStorage.getItem("user");
                    if ($user!=null){
                        datavw.value.user = JSON.parse($user);
                        datavw.value.formCreate.user = datavw.value.user.name;
                    }
                    datavw.value.success = response.data.success;
                    datavw.value.message = response.data.message;
                    datavw.value.list = response.data.list;
                    if (down){
                        const id = datavw.value.list.length
                        window.location.replace(`forum#${datavw.value.list[id-2].id
                        }`)
                    }

                }
            });
    } catch (error) {
        console.log(error);
    }
};

const deleteId = (id) => {
    try {
        Connect.delete(`/forum/${datavw.value.list[id].id}`).then(
            (response) => {
                response.post = '';
                response.user = '';
                created()
            })
    } catch (error) {
        console.log(error.toString());
    }
    //router.push({ name: 'Post_list' });
};

created()
created(true)

let intervalId = setInterval(function() {
    if (document.activeElement.tagName.toLowerCase() == 'textarea'){
        created()
    }
    else{
        created(true)
    }
}, 10000);

function isAuth(){
    if (datavw.value.user!=null){
        return  ' is_auth'
    }
    else {
        return  ''
    }
}


</script>

<style>

::-webkit-scrollbar {
    background: inherit;
    width: 7px;
}

.spoiler {
    border-radius: 5px;
    -webkit-user-select: none;
    background: #3dc2ff;
    color: #3dc2ff;
    transition: all 0.2s;
}

.spoiler.visible {
    -webkit-user-select: text;
    background: rgba(61,194,255,.3);
    color: #000;

}

::-webkit-scrollbar-thumb {
    background-color: #3dc2ff;
    border-radius: 5px;
}

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

.forum{
    max-height: 100%;
    overflow-y: auto;
}

.forum.is_auth{
    max-height: 75%;
}



.message {
    width: 50%;
    border-radius: 5px;
    height: fit-content;
    padding-bottom: 50px;
    margin-bottom: 20px;
    box-shadow: 0 .3em .7em #989898;
    margin-inline: auto;
    left: 0;
    right: 0;
    margin-top: 10px;
}

.message .user-name{
    width: fit-content;
}
.message .post-data{
    background-color:  #3dc2ff;
    color: white;
    border-radius: 5px 5px 0 0;
    min-height: 30px;
    padding: 5px;

}

form ion-list{
    border: #3dc2ff 2px solid;
    border-radius: 10px;
    margin-bottom: 100px;

}


.message .created-time{
    position: inherit;
    width: fit-content;
    float: right;
}

.add-post{
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto 10px auto;
}
.delete-post, .edit-post, .back-post, .done-post{
    float: right;
}


.textarea-disabled{
    opacity: 1;
    padding: 10px;
}

.edit-text{
    padding-block: 5px;
    padding-inline: 10px;
}

.textarea-wrapper-inner.sc-ion-textarea-md{
    padding: 0;
    display: block;
}

.start-slot-wrapper.sc-ion-textarea-md{
    padding: 0;
}


.submit{
    float: right;
}


#container a {
    text-decoration: none;
}

ion-header ion-toolbar ion-button{
    float: right;
}

</style>

<template>
    <ion-refresher>
        <ion-page>
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-title>Forum</ion-title>
                    <ion-button v-if="datavw.user!=null" @click="logout">
                        <ion-icon :icon="logOut" slot="icon-only"></ion-icon>
                    </ion-button>
                    <ion-button v-else @click="login">
                        <ion-icon :icon="logIn" slot="icon-only"></ion-icon>
                    </ion-button>
                </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true">
                <ion-header collapse="condense">
                    <ion-toolbar>
                        <ion-title size="large">Forum</ion-title>
                    </ion-toolbar>
                </ion-header>
                <div :class="'forum'+isAuth()">
                    <div class="message" v-for="(post, index) in datavw.list" :id="post.id">
                        <div class="post-data">
                            <span class="user-name">{{post.user}}</span>

                            <span v-if="post.created_at==post.updated_at" class="created-time">{{date(post.created_at).toLocaleDateString("ru-Ru")}} {{date(post.created_at).toLocaleTimeString("ru-Ru")}}</span>
                            <span v-else class="created-time">ред. {{date(post.updated_at).toLocaleDateString("ru-Ru")}} {{date(post.updated_at).toLocaleTimeString("ru-Ru")}}</span>

                        </div>
                        <template v-if="isEdit == post.id">
                            <form @submit.prevent="update(index)">
                                <ion-textarea id="edit" class="edit-text" :value="post.post"
                                              required
                                              rows=5
                                              @input="datavw.formEdit.post=$event.target.value">
                                    <ion-toolbar class="edit-text-toolbar" slot="start">
                                        <ion-button class="bold-text" @click="addTag('edit','b')">
                                            <b>B</b>
                                        </ion-button>
                                        <ion-button class="italic-text" @click="addTag('edit','i')">
                                            <i>I</i>
                                        </ion-button>
                                        <ion-button class="spoiler-text" @click="addTag('edit','spoiler')">
                                            <ion-icon :icon="eyeOff" slot="icon-only"></ion-icon>
                                        </ion-button>
                                    </ion-toolbar>
                                </ion-textarea>
                                <ion-button class="done-post" type="submit" color="secondary">
                                    <ion-icon :icon="checkmarkDone" slot="icon-only"></ion-icon>
                                </ion-button>
                                <ion-button class="back-post"  color="warning" @click="setEdit(0); datavw.formEdit.post=''">
                                    <ion-icon :icon="backspace" slot="icon-only"></ion-icon>
                                </ion-button>
                            </form>
                        </template>
                        <template v-else>
                            <div v-html="editText(post.post)" class="textarea-disabled"></div>
                            <ion-button v-if="isCurrentUser(post)" class="delete-post" color="danger" @click="createAlert(index)">
                                <ion-icon :icon="trash" slot="icon-only"></ion-icon>
                            </ion-button>
                            <ion-button v-if="isCurrentUser(post)" class="edit-post" color="secondary" @click="setEdit(post.id); datavw.formEdit.post=post.post">
                                <ion-icon :icon="pencil" slot="icon-only"></ion-icon>
                            </ion-button>
                        </template>
                    </div>
                </div>

                <template v-if="datavw.user==null">

                </template>
                <template v-else>
                    <form @submit.prevent="submit" id="addPost" >
                        <ion-list class="add-post">
                            <ion-item>
                                <ion-text>{{datavw.user.name}}</ion-text>
                            </ion-item>

                            <ion-item>
                                <ion-textarea id="post-text" class="post-form" required rows="5" @input="datavw.formCreate.post=$event.target.value">
                                    <ion-toolbar class="edit-text-toolbar" slot="start">
                                        <ion-button class="bold-text" @click="addTag('post-text','b')">
                                            <b>B</b>
                                        </ion-button>
                                        <ion-button class="italic-text" @click="addTag('post-text','i')">
                                            <i>I</i>
                                        </ion-button>
                                        <ion-button class="spoiler-text" @click="addTag('post-text','spoiler')">
                                            <ion-icon :icon="eyeOff" slot="icon-only"></ion-icon>
                                        </ion-button>
                                    </ion-toolbar>
                                </ion-textarea>
                            </ion-item>

                            <ion-button class="submit" type="submit">Send</ion-button>

                        </ion-list>
                    </form>
                </template>

            </ion-content>
        </ion-page>
    </ion-refresher>
</template>

