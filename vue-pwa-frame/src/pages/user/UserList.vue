<template>
  <v-card>
    <v-card-title>
      User list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              hide-details="auto"
              v-model="searchText"
            ></v-text-field>
          </v-col>
          <v-btn class="user-list-btn mr-4" color="primary">Filter</v-btn>
          <v-btn class="user-list-btn mr-4" color="primary">Create</v-btn>
          <v-btn class="user-list-btn mr-4" color="primary">Upload</v-btn>
          <v-btn class="user-list-btn mr-4" color="primary">Download</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="createduserName">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name" @click="detailUser(item.id)">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.operation`]>
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="user-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="user-list-btn">Delete</v-btn>
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
              User Detail
            </v-card-title>
            <v-card-text v-model="detailUser.name">
              <h3>Name : {{ name }}</h3>
            </v-card-text>
            <v-card-text v-model="detailUser.email">
              <h3>Email : {{ email }}</h3>
            </v-card-text>
            <v-card-text v-model="detailUser.address">
              <h3>Address : {{ address }}</h3>
            </v-card-text>
            <v-card-text v-model="detailUser.phone">
              <h3>Phone : {{ phone }}</h3>
            </v-card-text>
            <v-card-text v-model="detailUser.dob">
              <h3>Date Of Brith : {{ dob }}</h3>
            </v-card-text>
            <v-card-text v-model="detailUser.createduser">
              <h3>Created User : {{ createduser }}</h3>
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
<script src="../../services/pages/user/user-list.js"></script>
<style scoped src="../../assets/css/pages/user/user-list.css"></style>
