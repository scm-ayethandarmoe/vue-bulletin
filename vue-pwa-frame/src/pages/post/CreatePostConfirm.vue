<template>
  <v-form ref="form" @submit.prevent="confirmPost">
    <v-container>
      <v-row>
        <v-card-text>Title : {{ postTitle }} </v-card-text>
        <v-card-text>Description : {{ postDescription }} </v-card-text>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn type="submit" class="success">
            Create
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn class="danger">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script src="../../services/post/create-post-confirm.js"></script>
