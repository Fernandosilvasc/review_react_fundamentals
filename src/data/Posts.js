import {v4 as uuid} from 'uuid'
export const posts = [
  {
    id: uuid(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58282921?v=4',
      name: 'Fernando Silva',
      role: 'FullStack Engineer'
    },
    content: [
      {type: 'paragraph', data: 'Hey Folks 👋'},
      {
        type: 'paragraph',
        data: "I just want to share that I uploaded another project to my portfolio. It's a project that I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀"
      },
      {type: 'anchor', data: '👉 jane.design/doctorcare'},
      {type: 'hashtags', data: ['#newproject', '#nlw', '#itbrcanada']}
    ],
    publishedAt: new Date('02-10-2023 18:00:00')
  },
  {
    id: uuid(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58282921?v=4',
      name: 'Fernando Correa da Silva',
      role: 'FullStack Engineer'
    },
    content: [
      {type: 'paragraph', data: 'Hey Folks 👋'},
      {
        type: 'paragraph',
        data: "I just want to share that I uploaded another project to my portfolio. It's a project that I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀"
      },
      {type: 'anchor', data: '👉 jane.design/doctorcare'},
      {type: 'hashtags', data: ['#newproject', '#nlw', '#itbrcanada']}
    ],
    publishedAt: new Date('02-13-2023 14:00:00')
  }
]