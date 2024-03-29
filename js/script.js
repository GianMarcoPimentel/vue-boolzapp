const { createApp } = Vue 

createApp({
    data() {
        return {
            activeContact : {              
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
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
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
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
            newMessages :    {
                message : '',
                status: 'sent'       
            },
            
            answers:   {
                message : '',
                status: 'received'       
            },
            searchQuery: '',
            
            isVisible: false,

            //filteredContacts : [],
        }
    },
    
    mounted() {
        this.activeContact = this.contacts[0];

      // this.filtraContatti() ;

    },
    methods :{
        // per cambiare la chat devo fare rifermineto all'index, per poin al click selezionare esattemnete quello voluto
        changeChat(index) {
            this.activeContact = this.contacts[index];
        },
        addMessages() {
            // per aggiungere un messaggio devo fare si che non sia vuoto (metodo .trim())
            if(this.newMessages.message.trim() != ""){
                
                // pusharlo con lo spread operator in modo che possa aggiungerne altri
                    this.activeContact.messages.push({...this.newMessages});
                 //   console.log( this.newMessages.status)
                // ripristinare il testo della barra in (vuoto)
                    this.newMessages.message = "";
                };

                //  con il set timeout devo richiamrae la funzione receiveMessage()
                setTimeout(() => {
                    this.receiveMessage();
                  }, 2000);
                  // ripristinare il testo in (vuoto)
                  this.newMessages.message = "";
        },
        receiveMessage() {
                  
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence').then((result) => {
                    
                this.answers.message = result.data.response;
               
             //   console.log( this.answers.status)
                // pusharlo con lo spread operator in modo che possa aggiungerne altri

                this.activeContact.messages.push({...this.answers})
                console.log(result.data.response)
                
                this.answers.message = "";
             
            });
        },

        

       /*  toggleVisibility(activeContact){

            console.log(activeContact);
        }, */

        
    },  
    computed : {
        filteredContacts() {
           // this.filteredContacts = this.contacts;
            /* return this.filteredContacts.filter(contact => {
              return contact.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            }) */
            if(this.searchQuery.trim().length > 0){
                // filtro i conatti in modo che contacts abbai il nome
                //scritto in qualsiasi modo sarà restituito in minuscolo grazie a toLowerCase()
                // con il meotodo inludes() perchè devo prenderlo solo se è presente
                // la searchQuery.trim()
                return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchQuery.trim()))
            }
            // deve 'ritornarmi' 
           return this.contacts;
        },
    },
}).mount('#app')


