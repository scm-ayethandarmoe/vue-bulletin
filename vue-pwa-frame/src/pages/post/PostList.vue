<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="postCreate()"
            >Create</v-btn
          >
          <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="postUser">
        <template v-slot:[`item.title`]="{ item }">
          <a v-if="item.title" @click="postDetail(item.id)">{{ item.title }}</a>
        </template>
        <template v-slot:[`item.operation`]>
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <a color="red lighten-2" dark v-bind="attrs" v-on="on"> </a>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Post Detail
            </v-card-title>
            <v-card-text v-model="postDetail.title">
              <h3>Title : {{ title }}</h3>
            </v-card-text>
            <v-card-text v-model="postDetail.description">
              <h3>Description : {{ description }}</h3>
            </v-card-text>
            <v-card-text v-model="postDetail.postcreate">
              <h3>Created user : {{ postcreate }}</h3>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </v-card>
</template>
<script src="../../services/post/post-list.js"></script>
<style scoped src="../../assets/css/pages/post/post-list.css"></style>
