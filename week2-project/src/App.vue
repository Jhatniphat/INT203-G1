<script setup>
import SearchIcon from './components/icons/SearchIcon.vue';
import groups from '../data/groups.json'
const swapBgcolor=(id)=>{
  if((id%2)==1) return 'bg-slate-200'
  else return 'bg-white'
}
</script>

<template>
  <div class="w-full">
    <header>
      <section class="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center">
        <img src="./assets/vue-icon.png" alt="" class="h-14">
        <div>
          <h1 class="text-white text-2xl">Creative Project</h1>
          <h2 class="italic text-indigo-200 text-xl">Play and learn</h2>
        </div>
      </section>
    </header>
    <main>
      <!-- search bar -->
      <section class="flex justify-end p-2">
        <div class="w-1/4 flex gap-3 border border-gray-300 items-center rounded-lg p-2">
          <SearchIcon />
          <input class="outline-none" type="text" name="" id="" placeholder="Type your keyword">
        </div>
      </section>

      <!-- group list -->
      <section>
          <div class="grid grid-cols-12 gap-2 font-semibold text-xl pb-3">
            <h3>Section</h3>
            <h3 class="col-span-2">Group Name</h3>
            <h3 class="col-span-5">Github Repository</h3>
            <h3 class="col-span-4">Member</h3>
          </div>
          <div  v-for=" group in groups" :key="group.ID" class="grid grid-cols-12 gap-2 font-semibold" v-bind:class="swapBgcolor(group.ID)">
            <p> {{ group.section }}</p>
            <p class="col-span-2"> {{ group.groupName }}</p>
            <p class="col-span-5"> {{ group.repo }}</p>
            <ul class="col-span-4 list-inside list-disc">
              <li v-for="member in group.members" :key="member.studentId"> {{ member.studentId }} {{ member.studentName }}</li>
            </ul>
          </div>
      </section>
    </main>
  </div>
  <div>
  </div>
</template>

<style scoped></style>
