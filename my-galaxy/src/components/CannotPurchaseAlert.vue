<template>
      <v-card>
        <v-card-text>
			돈이 부족합니다!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="cannotPurchaseAlertShow = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
</template>