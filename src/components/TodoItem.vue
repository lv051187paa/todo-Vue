<template>
  <v-hover>
    <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
    >
      <v-card-title primary-title>
        <div>
          <h3 :contenteditable="editable" class="headline mb-0">{{ todo.title }}</h3>
          <input type="text" v-model="title">
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" @click="onEdit">{{editable ? 'Save' : 'Edit'}}</v-btn>
        <v-btn flat color="orange" @click="onDelete()">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ['todo', 'onDelete'],
    data(){
      return {
        title: '',
        editable: false,

      }
    },
    methods: {
      onEdit: function() {
        this.editable = !this.editable;
        if(!this.editable) {
          this.$emit('onEdit', {title: this.title, id: this.todo.id})
        } else {
          this.title = this.todo.title;
        }
      }
    }
  }
</script>

<style scoped>

</style>
