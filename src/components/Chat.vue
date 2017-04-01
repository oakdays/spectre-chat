<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12 col-xs-12">
        <div class="panel sc-panel">
          <div class="panel-header">
            <h3>Spectre Chat</h3>
            <h5 v-if="isNameSet">User: {{ userName }}</h5>
          </div>
          <div class="panel-body">
            <div v-for="message in messages">
              <b>{{ message.user }}</b>: {{ message.text }}
            </div>            
          </div>
          <div class="panel-footer">
            <div class="input-group">
              <input type="text" class="form-input" placeholder="Write a message" :class="{'is-danger': hasError}" @keyup.enter="sendMessage()" v-model="messageToSend"/>
              <button class="btn btn-primary input-group-btn" @click="sendMessage()" :class="{'disabled, loading': sendingMessage}">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{'active': !isNameSet}">
      <div class="modal-overlay"></div>
      <div class="modal-container">
        <div class="modal-header">
          <button class="btn btn-clear float-right"></button>
          <div class="modal-title">What is your name?</div>
        </div>
        <div class="modal-body">
          <div class="content">
            <!-- content here -->
            <div class="form-group">
              <input class="form-input" type="text" id="input-example-1" :class="{'is-danger': hasNameError}" placeholder="Your name" v-model="userName" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary input-group-btn" @click="setName()">Let's chat!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../db'

  export default {
    data () {
      return {
        ref: db.ref('messages'),
        messages: this.$store.getters.messages,
        sendingMessage: false,
        userName: '',
        isNameSet: false,
        messageToSend: '',
        hasError: false,
        hasNameError: false
      }
    },
    methods: {
      debug (event) {
        console.log(event)
      },
      setName () {
        if (/\S/.test(this.userName)) {
          if (this.hasNameError) this.hasNameError = false
          this.isNameSet = true
        } else {
          this.hasNameError = true
        }
      },
      sendMessage () {
        var vm = this

        // string is not empty and not just whitespace
        if (/\S/.test(this.messageToSend)) {
          if (this.hasError) this.hasError = false
          this.sendingMessage = true
          this.ref.push({
            user: this.userName,
            text: this.messageToSend
          }).then(function () {
            vm.sendingMessage = false
            vm.messageToSend = ''
          })
        } else {
          this.hasError = true
        }
      }
    }
  }
</script>
