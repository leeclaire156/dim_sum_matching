<template>
  <v-container class="fill-height" max-width="700" color="myCustomCardColor">
    <v-card class="pa-8 menu">
      <div class="mb-8 d-flex inline-flex titleText">
        <div>
          <v-img
            alt="Dim Sum"
            contain
            height="200"
            width="200"
            src="@/assets/menuIcon.png"
          />
        </div>
        <div class="text-center">
          <h1 class="text-h2 chineseName">包你識</h1>
          <h1 class="text-h2 englishName">Card To Cart</h1>
          <div class="text-body-2 mb-n1" style="font-weight: 500;">
            The object of this game is to teach you how to read off a Dim Sum menu in Cantonese!
            <br />
            Click on the cards and match the images to their characters.
            <br />
            Get 1 point for a match, get 2 points if you can type in the right pronunciation with the tones!
          </div>
        </div>
      </div>

      <v-row class="d-flex flex-inline">
        <v-col cols="3" class="boxStart d-flex">
          <v-row class="keyText pl-1">
            DATE
          </v-row>
          <v-row class="backgroundText" no-gutters>
            {{ styledDate() }}
          </v-row>
        </v-col>
        <v-col cols="3" class="box d-flex">
          <v-row class="keyText pl-1">
            TABLE NO
          </v-row>
          <v-row class="backgroundText" no-gutters>
            {{ styledTableNumber() }}
          </v-row>
        </v-col>
        <v-col cols="3" class="box d-flex">
          <v-row class="keyText pl-1">
            SERVER
          </v-row>
          <v-row class="backgroundText" no-gutters>
            Claire Lee
          </v-row>
        </v-col>
        <v-col cols="3" class="boxEnd d-flex">
          <v-row class="keyText pl-1">
            CHECK #
          </v-row>
          <v-row class="backgroundText" no-gutters>
            {{ styledCheckNumber()  }}
          </v-row>
        </v-col>
      </v-row>

      <v-row class="d-flex flex-inline">
        <v-col class="titleText d-flex flex-inline" style="padding: 0px !important; margin: 0px !important;">
          <v-row style="padding: 0px !important; margin: 0px !important;">
            <v-col class="d-flex flex-column" style="max-width: 30px; padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex flex-column justify-center align-center" 
              style="font-weight: 600; padding: 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0; border-top: 0;">
                <div>
                  小
                </div>
                <div>
                  A
                </div>
              </div>
              <div class="box d-flex flex-column justify-center align-center" 
              style="font-weight: 600; padding: 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
                <div>
                  中
                </div>
                <div>
                  B
                </div>
              </div>
              <div class="box d-flex flex-column justify-center align-center" 
              style="font-weight: 600; padding: 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
                <div>
                  大
                </div>
                <div>
                  C
                </div>
              </div>
              <div class="box d-flex flex-column justify-center align-center" 
              style="font-weight: 600; padding: 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom: 0;">
                <div>
                  特
                </div>
                <div>
                  D
                </div>
              </div>
            </v-col>
            <v-col  style=" padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0; border-top: 0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0;  border-bottom: 0">
              </div>
            </v-col>
            <v-col cols="2" style=" padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-bottom:0; border-top: 0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360;  border-bottom: 0">
              </div>
            </v-col>
            <v-col cols="1" style="padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom:0;  border-top: 0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom: 0;">
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-right: 0;">
        </v-col>
        <v-col cols="2"
          style= "border: 2.25px solid #ac555360; border-bottom:0;">
        </v-col>
        <v-col cols="1"
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-left: 0;">
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-right: 0;">
        </v-col>
        <v-col cols="2"
          style= "border: 2.25px solid #ac555360; border-bottom:0;">
        </v-col>
        <v-col cols="1"
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-left: 0;">
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-right: 0;">
        </v-col>
        <v-col cols="2"
          style= "border: 2.25px solid #ac555360; border-bottom:0;">
        </v-col>
        <v-col cols="1"
          style= "border: 2.25px solid #ac555360; border-bottom:0; border-left: 0;">
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column">
        <v-row style="margin: 0px; padding: 0px;">
          <v-col class="d-flex justify-center titleText"
            style= "border: 2.25px solid #ac555360; border-bottom:0; padding: 3px 0px 0px 0px; font-weight: 500;">
              TEA SELECTION
          </v-col>
        </v-row>
        
        <v-row style="margin: 0px; padding: 0px;">
          <v-col class="d-flex flex-column justify-center titleText"
            style= "border: 2.25px solid #ac555360; border-bottom:0; border-right: 0; padding: 10px 2px 0px 0px;">
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- hoeng1 pin2 -->
                <div class="chineseTeaName">
                  香片
                </div>
                <div class="englishTeaName">
                  Jasmine
                </div>
              </v-row>
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- wu1 lung2 -->
                <div class="chineseTeaName">
                  烏龍
                </div>
                <div class="englishTeaName">
                  Oolong
                </div>
              </v-row>
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- sau6 mei2 -->
                <div class="chineseTeaName">
                  壽眉
                </div>
                <div class="englishTeaName">
                  Shou Mei
                </div>
              </v-row>
          </v-col>
           <v-col class="d-flex flex-column justify-center titleText"
            style= "border: 2.25px solid #ac555360; border-bottom:0; padding: 10px 0px 0px 0px">
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- pou2 lei2 -->
                <div class="chineseTeaName">
                  普洱
                </div>
                <div class="englishTeaName">
                   Pu Er
                </div>
              </v-row>
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- tit3 gun1 jam1 -->
                <div class="chineseTeaName">
                  鐵觀音
                </div>
                <div class="englishTeaName">
                  Tieguanyin
                </div>
              </v-row>
              <v-row class="d-flex justify-center space-between"
                style="padding:0px; margin:0px">
                <!-- guk1 faa1 -->
                <div class="chineseTeaName">
                  菊花
                </div>
                <div class="englishTeaName">
                  Chrysanthemum
                </div>
              </v-row>
          </v-col>
        </v-row>
      </v-row>
      <!-- <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="tonal"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">
                Get started
              </h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Change this page by updating <v-kbd>{{ `<MainMenu />` }}</v-kbd> in <v-kbd>components/HelloWorld.vue</v-kbd>.
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col v-for="link in links" :key="link.href" cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            variant="tonal"
          />
        </v-col>
      </v-row> -->

      <v-row class="d-flex flex-inline">
        <v-col cols="6" class="titleText d-flex flex-column align-center justify-center" style="border: 2.25px solid  #ac555360; border-right: 0;">
            <div class="thankYouEnglish">
              Thank You!
            </div>
            <div class="thankYouChinese">
              謝謝
            </div>
        </v-col>
        <v-col cols="6" class="titleText d-flex flex-inline" style="padding: 0px !important; margin: 0px !important;">
          <v-row style="padding: 0px !important; margin: 0px !important;">
            <v-col class="d-flex flex-column" style="padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
                SUB TOTAL
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-right: 0; border-bottom:0;">
                TAX
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360; border-right: 0;">
                TOTAL
              </div>
            </v-col>
            <v-col cols="4" style=" padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                border: 2.25px solid #ac555360; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
              style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                border: 2.25px solid #ac555360;">
              </div>
            </v-col>
            <v-col cols="2" style="padding: 0px !important; margin: 0px !important;">
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important; color: #ac555390;
                  border: 2.25px solid #ac555360; border-left: 0; border-bottom:0;">
              </div>
              <div class="box d-flex justify-end font-weight-bold mr-2" 
                style="padding: 0px 5px 0px 0px !important; margin: 0px !important;
                  border: 2.25px solid #ac555360; border-left: 0;">
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  const links = [
    {
      href: 'https://vuetifyjs.com/',
      icon: 'mdi-text-box-outline',
      subtitle: 'Learn about all things Vuetify in our documentation.',
      title: 'Documentation',
    },
    {
      href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
      icon: 'mdi-star-circle-outline',
      subtitle: 'Explore available framework Features.',
      title: 'Features',
    },
    {
      href: 'https://vuetifyjs.com/components/all',
      icon: 'mdi-widgets-outline',
      subtitle: 'Discover components in the API Explorer.',
      title: 'Components',
    },
    {
      href: 'https://discord.vuetifyjs.com',
      icon: 'mdi-account-group-outline',
      subtitle: 'Connect with Vuetify developers.',
      title: 'Community',
    },
  ]

  //future feature: make it look more like handwriting with some characters having the .elevated class
  const styledCheckNumber = () => {
    const randomCheckNumber = Math.floor(Math.random() * 100000);
    return randomCheckNumber;
  };

  const styledTableNumber = () => {
    const randomTableNumber = Math.floor(Math.random() * 100);
    return randomTableNumber;
  };

  const styledDate = () => {
    const date = new Date().toLocaleDateString();
    const dateSplitArray = date.split('/').map((part) => part.padStart(2, '0'));
    return date;
  };
</script>

<style lang="scss" scoped>

  $light-dim-sum-check-red: #ac555360;
  $dim-sum-check-red: #AC5553;
  $pen-ink-blue: #1e76da90;
  $stamp-ink-red: #E37076;

  .menu {
    background-color: #ffffff;
    color: $pen-ink-blue;
  }

  .titleText {
    color: $dim-sum-check-red;
  }

  .englishName {
    font-weight: 400;
  }

  .chineseName {
    font-weight: bold;
    font-family: Kaiti;
  }
  
  .box {
    height: 65px;
    border: 2.25px solid $light-dim-sum-check-red;
    border-right: 0;
  }

  .boxStart {
    height: 65px;
    border: 2.25px solid $light-dim-sum-check-red;
    border-right: 0;
  }

  .boxEnd {
    height: 65px;
    border: 2.25px solid $light-dim-sum-check-red;
  }

  .box  > .keyText,
  .boxStart > .keyText,
  .boxEnd > .keyText {
    color: $light-dim-sum-check-red;
    font-family: 'Roboto', sans-serif;
  }

  .backgroundText {
    font-family: 'Caveat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .thankYouEnglish {
    font-family: 'Tangerine';
    font-size: 3rem;
    font-weight: 500;
  }

  .thankYouChinese {
    font-family: 'Kaiti', sans-serif;
    font-size: 2rem;
    font-weight: 600;
  }

  .chineseTeaName {
    padding-left: 2rem;
    flex-basis: 50%;
  }

  .englishTeaName {
    flex-basis: 50%;
  }

  // .elevated {
  //   vertical-align: 3px; /* Raises the text 3 pixels above the baseline */
  // }
</style>