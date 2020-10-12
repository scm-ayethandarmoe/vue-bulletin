<template>
  <v-form ref="form" @submit.prevent="createPost">
    <v-container>
      <v-row>
        <v-text-field label="Title :" v-model="title"> </v-text-field>
      </v-row>
      <v-row>
        <v-text-field label="Description :" v-model="description">
        </v-text-field>
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
<script src="../../services/post/create-post.js"></script>
