<template>
    <div class="resume">
      <h1>This is the Resume page</h1>
      <h2>Education</h2>
      <div class="card-deck">
        <div v-for="(education, index) in educations" :key="index" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ education.degree }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ education.institution }}</h6>
            <p class="card-text">{{ education.description }}</p>
            <p class="card-text"><small class="text-muted">{{ education.date }}</small></p>
          </div>
        </div>
      </div>
      <h2>Skills</h2>
      <ul class="list-group">
        <li v-for="(skill, index) in skills" :key="index" class="list-group-item">{{ skill }}</li>
      </ul>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      experiences: [
      ],
      educations: [
        {
          degree: 'Grade 12',
          institution: 'Sinenjongo High School',
          description: 'Maths&Science',
          date: '2017 - 2021'
        },
        {
          degree: 'Web Development',
          institution: 'Life Choices Academy',
          description: 'Coding',
          date: '2023 - present'
        },
      ],
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
      ]
    };
  }
};
</script>