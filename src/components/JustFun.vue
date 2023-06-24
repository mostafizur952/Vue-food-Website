<template>
  <nav>
    <ul class="N-ul">
      <li
        v-for="item in menuItems"
        :key="item.id"
        :class="{ 'active': item.isActive }"
        @mouseover="setHovered(item.id)"
        @mouseleave="clearHovered(item.id)"
        @click="setActive(item.id)"
        class="N-item "
      >
        <i :class="getIconClass(item)"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label: 'Home', isActive: false, isHovered: false },
        { id: 2, label: 'About', isActive: false, isHovered: false },
        { id: 3, label: 'Services', isActive: false, isHovered: false },
        { id: 4, label: 'Contact', isActive: false, isHovered: false }
      ]
    };
  },
  methods: {
    setHovered(itemId) {
      this.menuItems.forEach(item => {
        if (item.id === itemId) {
          item.isHovered = true;
        }
      });
    },
    clearHovered(itemId) {
      this.menuItems.forEach(item => {
        if (item.id === itemId) {
          item.isHovered = false;
        }
      });
    },
    setActive(itemId) {
      this.menuItems.forEach(item => {
        if (item.id === itemId) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    },
    getIconClass(item) {
      if (item.isActive) {

        return'bi bi-facebook'; // Active icon class
      } else if (item.isHovered) {
        return 'bi bi-facebook'; // Hover icon class
      }
    }
  }
};
</script>

<style>
nav .N-ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}

nav .N-item {
  border: 1px solid red;
  width:100px;
  padding: 10px;
  cursor: pointer;
  text-align: end;
}

.N-item span{
  padding-left:15px;
}

nav .N-item:hover {

  background-color: #ccc;
}

nav .N-item.active {
  background-color: #f00;
  color: #fff;
}
</style>

<!-- Add Font Awesome CDN in your index.html file -->
