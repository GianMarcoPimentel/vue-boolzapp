const { createApp } = Vue 

createApp({
    data() {
        return {
            /* 
           per indicare i corrispettivi messaggi nelle chat devo avere attivo l'indice della conversaione,
           quindi setto un activeIndex : 0,
           */
          activeIndex : 0,
          searchContact : '',
          newMessage : '',
          newContact:'',
          answer: [
            'Ciao',
            'Tutto bene, tu?',
            'Domani solita ora, solito posto',
            'Rieccoti, è una vita che non ci sentiamo!'
          ],
          isDarkMode : false,
          /*
          PER LE CHIAMATE API PER LA RISPOSTA
          answers : {
            message:'',
            status: 'received',
          }, */

          contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Sofia',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Sofia va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    lastAccess: '15:50',
                    isTyping: false,
                    online: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
           
        
        }
    },
   
    methods: {
        getLastMessage(contact) {

           /* salvo i messagi in una variabile */
          const messages = contact.messages;
          
          /* se esite il messagio e la lunghezza dell'array messages è > 0 */
          if(messages && messages.length > 0 ) {
            /* salvo l'ultimo messaggio con indice [messages.length - 1] */
            const lastMessage = messages[messages.length - 1];
            /* salvo esattamente l'ultimo messaggio */
            let messageText = lastMessage.message;
            /* console.log(messageText.length) */
            /* do un massimo di caratteri visualizzabili nel layout */
            const maxLength = 30;
            /* se il messaggio ha puù di 30 caratteri aggiungo i ... */
            if(messageText.length > maxLength) {
                messageText = messageText.substring(0, maxLength) + '...';
            }
            return messageText;
                
          }
       
        },
        getLastTime(contact) {
            /* salvo i messaggi in una variabile */
            const date = contact.messages;
            /* se esite il messagio e la lunghezza dell'array messages è > 0 */
            if(date && date.length > 0){
                /* salvo l'ultimo messaggio con indice [messages.length - 1] */
                const lastMessage = date[date.length - 1];
               /*  console.log(lastMessage.date); */
                const dateTime = lastMessage.date.split(' ');
                const getTime = dateTime[1].split(':');
                const getHour = `${getTime[0]}:${getTime[1]}`;
                /* console.log(getHour); */

                return getHour;
            }
            return '';

        },
        getTime(message){
            
            const dateMessage = message.date;
            const dateMessageSplit = dateMessage.split(' ');
            const getHourMessage = dateMessageSplit[1].split(':');
            const hour = `${getHourMessage[0]}:${getHourMessage[1]}`;
            /* console.log(hour); */

            return hour;
        },
        //set time to insert in 'date' of addMessage
        getTimeStamp(){
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'});
            const timeMessage = `${date} ${time}`;
            console.log(now);
            console.log(date);
            console.log(time);
            console.log(timeMessage);
            return timeMessage;

        },
        getHour(){
            const now = new Date();
            const time = now.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'});
            return time;
        },
        changeActiveContact(index) {
            /* console.log(index);
            console.log(this.contacts[index]); */
            this.activeIndex = index;

            const myManagment = document.getElementById("my-managment");
            const otherContacts = document.getElementById("my-conversation");
            if(window.innerWidth <= 768){
                myManagment.style.width = "0vw";
                otherContacts.style.width = "100vw";
                myManagment.style.flexGrow = "0";
                otherContacts.style.flexGrow = "1";

            }
        },

        addMessage() {
           if(this.newMessage.trim() !== ''){
                this.contacts[this.activeIndex].messages.push({
                    date:  `${this.getTimeStamp()}`,
                    message: this.newMessage,
                    status : 'sent',
                });
                /* Faccio in modo che una volta inviato si svuoti il campo di input */
                this.newMessage = "";

                const activeChat = this.activeIndex;

                // set 'is Typing for one second 
                setTimeout(() => {
                   /*  console.log(this.contacts[activeChat].isTyping) */
                    this.contacts[activeChat].isTyping = true;
                }, 1000);

                /* automatic answer */
                setTimeout(() => {
                    const answerIndex = Math.floor(Math.random() * this.answer.length);
                   /*  console.log(answerIndex); */
                    this.contacts[this.activeIndex].messages.push({
                        date: `${this.getTimeStamp()}`,
                        message: this.answer[answerIndex],
                        status : 'received',
                    })
                    this.contacts[activeChat].isTyping = false;
                    this.contacts[activeChat].online = true;
                    /* 
                    questo per riospondere con un achiamata API
                    this.receiveMessage();
                    */
                   
                    
                }, 2500);
                setTimeout(()=>{
                    this.contacts[activeChat].online = false;
                    this.contacts[activeChat].lastAccess = this.getHour();
                },4000)
            }

            

            
            },
            sendMessage(){
               if(this.newMessage.trim() !== ''){
                this.addMessage();

               }
               
                
            },
/* 
QUESTO PER RICHIAMARE LA CHIAMATA API E AGGIUNGERLO ALL'ARRAY ANSEWRS
            receiveMessage() {
                  
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence').then((result) => {
                        
                    this.answers.message = result.data.response;
                   
                    console.log( this.answers.message);
                    // pusharlo con lo spread operator in modo che possa aggiungerne altri
                console.log(this.contacts[this.activeIndex].messages);
                this.contacts[this.activeIndex].messages.push({
                    date:"10/06/2024 17:30",
                    message: this.answers.message,
                    status:'received',
                });
                 // this.activeContact.messages.push({...this.answers})
                   // console.log(result.data.response)
                
                    this.answers.message = "";
                }); 
            
                
            
        }*/
        deleteMessage(messageIndex){
            /* ghju */
            /* console.log(this.contacts[this.activeIndex].messages.splice(messageIndex , 1)); */
            this.contacts[this.activeIndex].messages.splice(messageIndex, 1);
        },

        deleteConversation() {
            /* console.log(this.contacts.splice(this.activeIndex, 1));
            console.log(this.contacts.length) */;
            this.contacts.splice(this.activeIndex,1);
            if(this.activeIndex >= this.contacts.length) {
                this.activeIndex = this.contacts.length - 1 ;
            }
        },
        
        deleteAllMessages() {
         /*    console.log(this.contacts[this.activeIndex].messages = []); */
            this.contacts[this.activeIndex].messages = [];
            
        },
        addNewContact(){
            console.log(this.contacts);
            this.contacts.push({
                name: this.newContact,
                avatar:'./img/avatar_unknown.jpg',
                visible: true,
                isTyping: false,
                online: false,
                lastAccess: this.getHour(),
                messages: [],


            })
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            const toggleBtn = document.getElementById('toggle-btn');

            if (toggleBtn) {
                toggleBtn.classList.toggle('toggle-btn--dark', this.isDarkMode);
            }
            document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
            /* console.log(this.isDarkTheme = !this.isDarkTheme);
            const toggleButton = document.getElementById('toggle-btn');
            console.log(toggleButton);
            if(toggleButton){
                toggleButton.classList.toggle('toggle-btn--dark', this.isDarkTheme);
            }
            document.documentElement.classList.toggle('dark-mode', this.isDarkTheme); */
        },
        backToChatList() {
            const myManagment = document.getElementById("my-managment");
            const otherContacts = document.getElementById("my-conversation");
            if(window.innerWidth <= 769){
                myManagment.style.width = "100vw";
                otherContacts.style.width = "0vw";
                myManagment.style.flexGrow = "1";
                otherContacts.style.flexGrow = "0";

            }
        }

      }
  
}).mount('#app')


