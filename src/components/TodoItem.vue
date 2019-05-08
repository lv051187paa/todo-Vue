<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="[`elevation-${hover ? 12 : 2}`, {completed: todo.completed}]"
      class="mx-auto"
      @dblclick="onCompleteUpd"
    >
      <v-card-title primary-title>
        <div>
          <h3 v-show="!editable" :contenteditable="editable" class="headline mb-0">{{ todo.title }}</h3>
          <input v-show="editable" type="text" v-model="title">
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
  props: ["todo", "onDelete"],
  data() {
    return {
      title: "",
      editable: false
    };
  },
  methods: {
    onEdit: function() {
      this.editable = !this.editable;
      if (!this.editable) {
        this.$emit("onEdit", { title: this.title, id: this.todo.id });
        this.todo.title = this.title;
      } else {
        this.title = this.todo.title;
      }
    },
    onCompleteUpd: function() {
      this.$emit('onCompleteUpd', {completed: !this.todo.completed, id: this.todo.id})
    }
  }
};
</script>

<style scoped lang="scss">
.completed {
  background: lighten($color: #5a9dca, $amount: 0);

  & h3, & input {
    color: #fff;
  }

  & .v-btn {
    color: #fff !important;
  }
}
</style>
