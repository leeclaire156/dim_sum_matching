<template>
  <v-footer
    app
    height="40"
  >
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <!-- <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2016-{{ (new Date()).getFullYear() }} 
      <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div> -->
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      Developed By Claire Lee 2025 
      —
      <inline
        class="text-decoration-none on-surface"
      >
        MIT License
      </inline>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  const items = [
    {
      title: 'GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/leeclaire156',
    },
    {
      title: 'LinkedIn',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/claire-lee-556b3a209/',
    },
    {
      title: 'Portfolio',
      icon: 'mdi-folder-open-outline',
      href: 'https://leeclaire156.github.io/Portfolio-V2/#portfolio',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
